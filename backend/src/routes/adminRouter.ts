import express from 'express';
import {
  getUsersTransactionsWithHisCard,
  getUsersTransactionsWithOurCard,
} from '../controllers/adminController';

export const adminRouter = express.Router();

adminRouter.get(
  '/getUsersWithHisReplenish/:id',
  getUsersTransactionsWithHisCard
);
adminRouter.get(
  '/getUsersWithOurReplenish/:id',
  getUsersTransactionsWithOurCard
);
