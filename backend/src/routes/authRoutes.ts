import express from 'express';
import { changePassword, signIn, signUp } from '../controllers/authController';

export const authRouter = express.Router();

authRouter.post('/signUp', signUp);
authRouter.post('/signIn', signIn);
authRouter.post('/changePassword', changePassword);
