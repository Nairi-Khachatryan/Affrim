import express from 'express';
import { addClick, getClicks } from '../controllers/hamsterControllers';

export const hamsterRouter = express.Router();

hamsterRouter.post('/addClick', addClick);
hamsterRouter.get('/getClicks/:id', getClicks);
