import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_AUTH } from '../../routes/urlPaths';

type signInReqParams = {
  phone: number;
  password: string;
};

type signInResponce = {
  success: boolean;
  message: string;
  data: {
    name: string;
    surname: string;
    phone: number;
    id: string;
    referralCode: string;
    referrals: Array<string>;
  };
};

export const signInUser = createAsyncThunk(
  'user/signIn',
  async (userData: signInReqParams) => {
    const res = await fetch(`${API_AUTH}/signIn`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    return (await res.json()) as signInResponce;
  }
);
