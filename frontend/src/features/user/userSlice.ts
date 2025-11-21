import { createUser } from '../../api/auth/createUser';
import { signInUser } from '../../api/auth/logInUser';
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  id: string | null;
  name: string | null;
  surname: string | null;
  phone: number | null;
  referralCode: string | null;
  referrals: Array<string>;
}

const initialState: UserState = {
  id: null,
  name: null,
  surname: null,
  phone: null,
  referralCode: null,
  referrals: [],
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
        }
      });
  },
});

export const { removeUser } = userSlice.actions;
export default userSlice.reducer;
