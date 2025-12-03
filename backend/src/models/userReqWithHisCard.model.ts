import mongoose from 'mongoose';

const userRequestsWithHisCard = new mongoose.Schema(
  {
    status: {
      type: String,
      default: 'Pending',
    },
    value: {
      type: Number,
    },
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    cardData: {
      cardNumber: String,
      cvc: String,
      expiryMonth: Number,
      expiryYear: Number,
    },
  },
  { timestamps: true }
);

export const RequestsWithHisCard = mongoose.model(
  'RequestsWithHisCard',
  userRequestsWithHisCard
);
