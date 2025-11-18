import type { Request, Response } from 'express';
import { User } from '../models/user.model';

export const addClick = async (req: Request, res: Response) => {
  const { userId, clickCount } = req.body;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { hamsterClickCount: clickCount } },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
      console.log(error);
    }
  }
};

export const getClicks = async (req: Request, res: Response) => {
  const userId = req.params.id;

  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ success: false, message: 'Invalid User Id' });
  }

  res.status(200).json({ success: true, clickCount: user.hamsterClickCount });

  try {
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  }
};
