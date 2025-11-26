import { createUser } from '../../api/auth/createUser';
import { signInUser } from '../../api/auth/logInUser';
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  isAdmin: false | true;
  id: string | null;
  name: string | null;
  surname: string | null;
  phone: number | null;
  referralCode: string | null;
  referrals: Array<string>;
  balance: number;
}

const initialState: UserState = {
  isAdmin: false,
  id: null,
  name: null,
  surname: null,
  phone: null,
  referralCode: null,
  referrals: [],
  balance: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser: () => {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.phone = action.payload.data.phone;
          state.id = action.payload.data.id;
          state.name = action.payload.data.name;
          state.surname = action.payload.data.surname;
          state.referralCode = action.payload.data.referralCode;
          state.referrals = action.payload.data.referrals;
          state.balance = action.payload.data.balance;
          state.isAdmin = action.payload.data.isAdmin;
        }
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.phone = action.payload.data.phone;
          state.id = action.payload.data.id;
          state.name = action.payload.data.name;
          state.surname = action.payload.data.surname;
          state.referralCode = action.payload.data.referralCode;
          state.referrals = action.payload.data.referrals;
          state.balance = action.payload.data.balance;
          state.isAdmin = action.payload.data.isAdmin;
        }
      });
  },
});

export const { removeUser } = userSlice.actions;
export default userSlice.reducer;
