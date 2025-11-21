import { Request, Response } from 'express';
import { User } from '../models/user.model';

export const getRefferals = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'Invalid User Id' });
    }

    return res.status(200).json({ success: true, data: user.referrals });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  }
};
