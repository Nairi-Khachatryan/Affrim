import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    surname: {
      required: true,
      type: String,
    },
    phone: {
      required: true,
      type: Number,
      unique: true,
    },
    passwordHash: {
      required: true,
      type: String,
    },
    hamsterClickCount: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
