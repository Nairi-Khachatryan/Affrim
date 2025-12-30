import { RequestsWithHisCard } from '../models/userReqWithHisCard.model';
import { RequestsWithOurCard } from '../models/userReqWithOurCard.model';
import type { Request, Response } from 'express';

export const getUsersTransactionsWithOurCard = async (
  req: Request,
  res: Response
) => {
  try {
  } catch (error) {}
};

export const getUsersTransactionsWithHisCard = async (
  req: Request,
  res: Response
) => {
  try {
    const requests = await RequestsWithHisCard.find();

    return res.status(200).json(requests);
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to get transactions',
    });
  }
};
