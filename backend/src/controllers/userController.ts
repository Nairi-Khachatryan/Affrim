import { RequestsWithHisCard } from '../models/userReqWithHisCard.model';
import { RequestsWithOurCard } from '../models/userReqWithOurCard.model';
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

export const createReplenishWithOurCard = async (
  req: Request,
  res: Response
) => {
  const USER_ID = req.params.id;
  const { value } = req.body;

  try {
    if (!USER_ID) {
      return res
        .status(404)
        .json({ success: false, message: 'Invalid User Id' });
    }

    const request = new RequestsWithOurCard({
      id: USER_ID,
      value,
      status: 'Pending',
    });

    res.status(201).json({
      success: true,
      message: 'User request create successfully',
    });

    await request.save();
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
      console.log(error);
    }
  }
};

interface CardData {
  cvc: string;
  value: string;
  cardNumber: string;
  expiryMonth: number;
  expiryYear: number;
}

export const createReplenishWithHisCard = async (
  req: Request<{ id: string }, {}, { cardData: CardData }>,
  res: Response
) => {
  const USER_ID = req.params.id;
  const { cardData } = req.body;

  console.log(cardData, 'cardData');

  try {
    if (!USER_ID) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid User Id' });
    }

    // Card number validation
    if (cardData.cardNumber.length !== 12) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid Card Number' });
    }

    // CVC
    if (cardData.cvc.length !== 3) {
      return res.status(400).json({ success: false, message: 'Invalid CVC' });
    }

    // Month
    if (cardData.expiryMonth < 1 || cardData.expiryMonth > 12) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid Expiry Month' });
    }

    // Year
    if (cardData.expiryYear < 2025) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid Expiry Year' });
    }

    const request = new RequestsWithHisCard({
      id: USER_ID,
      value: cardData.value,
      cardData: {
        cardNumber: cardData.cardNumber,
        cvc: cardData.cvc,
        expiryMonth: cardData.expiryMonth,
        expiryYear: cardData.expiryYear,
      },

      status: 'Pending',
    });

    await request.save();

    return res.json({ success: true, message: 'Card saved successfully' });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  }
};
