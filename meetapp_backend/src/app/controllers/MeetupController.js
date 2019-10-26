import * as Yup from 'yup';
import { parseISO, isBefore, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';

import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
  async index(req, res) {
    const where = {};
    const page = req.query.page || 1;
    where.user_id = req.userId;

    if (req.query.date) {
      const searchDate = parseISO(req.query.date);

      where.date = {
        [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
      };
    }

    const meetups = await Meetup.findAll({
      where,
      include: [
        User,
        {
          model: File,
          as: 'file',
          attributes: ['id', 'path', 'url'],
        },
      ],
      limit: 10,
      offset: 10 * (page - 1),
      order: ['date'],
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
      file_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res.status(400).json({ error: 'Invalid date' });
    }

    const user_id = req.userId;

    const meetup = await Meetup.create({
      ...req.body,
      user_id,
    });

    return res.status(201).json(meetup);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      description: Yup.string(),
      location: Yup.string(),
      date: Yup.date(),
      file_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const user_id = req.userId;

    const meetup = await Meetup.findByPk(req.params.id);
    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not found' });
    }
    if (meetup.user_id !== user_id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    if (meetup.past) {
      return res.status(400).json({ error: "You can't update past Meetup" });
    }

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res.status(400).json({ error: 'Invalid date' });
    }

    await meetup.update(req.body);

    return res.json(meetup);
  }

  async delete(req, res) {
    const user_id = req.userId;

    const meetup = await Meetup.findByPk(req.params.id);
    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not found' });
    }
    if (meetup.user_id !== user_id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    if (meetup.past) {
      return res.status(400).json({ error: "You can't delete past Meetup" });
    }

    await meetup.destroy();

    return res.send();
  }
}

export default new MeetupController();
