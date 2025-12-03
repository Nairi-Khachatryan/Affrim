import express from 'express';
import {
  createReplenishWithHisCard,
  createReplenishWithOurCard,
  getUsers,
} from '../controllers/userController';

export const userRouter = express.Router();

userRouter.post('/getRefUsers', getUsers);
userRouter.post('/createReplenishWithOurCard/:id', createReplenishWithOurCard);
userRouter.post('/createReplenishWithHisCard/:id', createReplenishWithHisCard);
