import { Op } from 'sequelize';

import SubscriptionMail from '../jobs/SubscriptionMail';
import Queue from '../../lib/Queue';

import User from '../models/User';
import Meetup from '../models/Meetup';
import File from '../models/File';
import Subscription from '../models/Subscription';

class SubscriptionController {
  async index(req, res) {
    const subscriptions = await Meetup.findAll({
      where: {
        date: {
          [Op.gt]: new Date(),
        },
      },
      include: [
        User,
        {
          model: File,
          as: 'file',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: Subscription,
          where: { user_id: req.userId },
          attributes: ['id'],
          required: true,
        },
      ],
      order: ['date'],
    });

    return res.json(subscriptions);
  }

  async store(req, res) {
    const user = await User.findByPk(req.userId);
    const meetup = await Meetup.findByPk(req.params.meetupId, {
      include: [User],
    });

    if (meetup.past) {
      return res
        .status(400)
        .json({ error: "You can't subscribe past meetups" });
    }
    if (meetup.user_id === req.userId) {
      return res
        .status(400)
        .json({ error: "You can't subscribe to your own meetup" });
    }

    const hasSubscription = await Subscription.findOne({
      where: {
        user_id: user.id,
      },
      include: [
        {
          model: Meetup,
          required: true,
          where: {
            date: meetup.date,
          },
        },
      ],
    });

    if (hasSubscription) {
      return res
        .status(400)
        .json({ error: "You can't subscribe to two meetup at the same time" });
    }

    const subscription = await Subscription.create({
      user_id: user.id,
      meetup_id: meetup.id,
    });

    await Queue.add(SubscriptionMail.key, {
      user,
      meetup,
    });

    return res.json(subscription);
  }

  async delete(req, res) {
    const subscription = await Subscription.findOne({
      where: {
        meetup_id: req.params.meetupId,
        user_id: req.userId,
      },
      include: [Meetup],
    });

    if (!subscription) {
      return res
        .status(400)
        .json({ error: 'You are not subscribed in this Meetup' });
    }

    if (subscription.Meetup.past) {
      return res
        .status(400)
        .json({ error: "You can't unsubscribe past meetups" });
    }

    await subscription.destroy();

    return res.send();
  }
}

export default new SubscriptionController();
