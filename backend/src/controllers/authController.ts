import type { Request, Response } from 'express';
import { User } from '../models/user.model';
import bcrypt from 'bcrypt';

export const signUp = async (req: Request, res: Response) => {
  const { name, surname, phone, password } = req.body;

  try {
    const condidate = await User.findOne({ phone });

    if (condidate) {
      return res.status(409).json({
        success: false,
        message: `Account with this phone number ( ${phone} ) already exists`,
      });
    }

    const passwordHash = await bcrypt.hash(password, 8);

    const user = new User({
      name,
      surname,
      phone,
      passwordHash,
      hamsterClickCount: 0,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: {
        phone,
        name,
        surname,
        id: user._id,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};
export const signIn = async (req: Request, res: Response) => {
  const { phone, password } = req.body;

  try {
    const user = await User.findOne({ phone });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: `Wrong Phone : ${phone} or Password : ${password}`,
      });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: `Wrong Phone ${phone} or Password ${password}`,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      data: {
        name: user.name,
        surname: user.surname,
        id: user._id,
        phone: user.phone,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};
export const changePassword = async (req: Request, res: Response) => {};
