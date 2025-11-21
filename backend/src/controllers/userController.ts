import { Request, Response } from 'express';
import { User } from '../models/user.model';

export const getUsers = async (req: Request, res: Response) => {
  const { ids } = req.body;

  try {
    const users = await User.find({ _id: { $in: ids } });

    if (!users) {
      return res
        .status(404)
        .json({ success: false, message: 'Invalid User Id' });
    }

    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  }
};
