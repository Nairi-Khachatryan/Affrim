import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    isAdmin: {
      type: Boolean,
      default: false,
    },
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
      default: 0,
    },

    referralCode: {
      type: String,
      required: true,
      unique: true,
    },

    // кто пригласил (ID пользователя)
    referredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },

    // список рефералов
    referrals: [
      {
        type: String,
        // type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],

    balance: {
      type: Number,
      default: 0,
    },

    registrationIp: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
