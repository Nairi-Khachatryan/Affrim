import { getRefferals } from '../controllers/refferalsController';
import express from 'express';

export const refferalsRoute = express.Router();

refferalsRoute.get('/getReferrals/:id', getRefferals);
