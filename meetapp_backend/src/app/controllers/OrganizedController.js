import { parseISO, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';

import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class OrganizedController {
  async index(req, res) {
    const where = {};
    const page = req.query.page || 1;

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
}

export default new OrganizedController();
