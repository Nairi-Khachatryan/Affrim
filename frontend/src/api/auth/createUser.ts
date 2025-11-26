import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_AUTH } from '../../routes/urlPaths';

type createUserParams = {
  name: string;
  surname: string;
  phone: number;
  password: string;
};

type createUserResponce = {
  success: boolean;
  message: string;
  data?: {
    isAdmin: false;
    name: string;
    surname: string;
    phone: number;
    id: string;
    referralCode: string;
    referrals: Array<string>;
    balance: number;
  };
};

export const createUser = createAsyncThunk(
  'user/createUser',
  async (values: createUserParams) => {
    const res = await fetch(`${API_AUTH}/signUp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    return (await res.json()) as createUserResponce;
  }
);
