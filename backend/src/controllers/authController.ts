// import { rewardReferral } from "../utils/rewardReferral";
import type { Request, Response } from 'express';
import { User } from '../models/user.model';
import { nanoid } from 'nanoid';
import bcrypt from 'bcrypt';

export const signUp = async (req: Request, res: Response) => {
  const { name, surname, phone, password, ref } = req.body;

  try {
    const candidate = await User.findOne({ phone });
    if (candidate) {
      return res.status(409).json({
        success: false,
        message: `Account with this phone number ( ${phone} ) already exists`,
      });
    }

    const passwordHash = await bcrypt.hash(password, 8);

    const referralCode = nanoid(8);

    let referredBy = null;
    const referrals: Array<string> = [];

    if (ref) {
      const refUser = await User.findOne({ referralCode: ref });
      if (refUser) {
        referredBy = refUser._id;
      }
    }

    const forwarded = req.headers['x-forwarded-for'];
    const ip =
      (typeof forwarded === 'string'
        ? forwarded.split(',')[0]
        : Array.isArray(forwarded)
        ? forwarded[0]
        : null) || req.socket.remoteAddress;

    const user = new User({
      name,
      surname,
      phone,
      passwordHash,
      hamsterClickCount: 0,
      referrals,
      referralCode,
      referredBy,
      balance: 0,
      registrationIp: ip,
    });

    await user.save();

    if (referredBy) {
      await User.findByIdAndUpdate(referredBy, {
        $push: { referrals: user._id },
      });

      // await rewardReferral(user._id);
    }

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: {
        phone,
        name,
        surname,
        id: user._id,
        referralCode,
        referrals,
        balance: 0,
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
        referralCode: user.referralCode,
        referrals: user.referrals,
        balance: user.balance,
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
