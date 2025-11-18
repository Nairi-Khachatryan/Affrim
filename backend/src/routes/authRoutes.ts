import { changePassword, signIn, signUp } from '../controllers/authController';
import express from 'express';

export const authRouter = express.Router();

authRouter.post('/signUp', signUp);
authRouter.post('/signIn', signIn);
authRouter.post('/changePassword', changePassword);
