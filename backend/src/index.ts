import { refferalsRoute } from './routes/refferalsRoute';
import { hamsterRouter } from './routes/hamsterRouter';
import { userRouter } from './routes/userRouter';
import { authRouter } from './routes/authRoutes';
import { connectDb } from './config/db';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { adminRouter } from './routes/adminRouter';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5052;

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);
app.use('/hamster', hamsterRouter);
app.use('/referrals', refferalsRoute);
app.use('/user', userRouter);
app.use('/admin', adminRouter);

app.listen(PORT, () => {
  console.log(`Server listening at Port ${PORT}`);
  connectDb();
});
