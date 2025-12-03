import mongoose from 'mongoose';

const userRequestWithOurCard = new mongoose.Schema(
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
  },
  { timestamps: true }
);

export const RequestsWithOurCard = mongoose.model(
  'RequestsWithOurCard',
  userRequestWithOurCard
);
