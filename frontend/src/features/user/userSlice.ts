import { createUser } from '../../api/auth/createUser';
import { signInUser } from '../../api/auth/logInUser';
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  id: string | null;
  name: string | null;
  surname: string | null;
  phone: number | null;
}

const initialState: UserState = {
  id: null,
  name: null,
  surname: null,
  phone: null,
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
        }
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.phone = action.payload.data.phone;
          state.id = action.payload.data.id;
          state.name = action.payload.data.name;
          state.surname = action.payload.data.surname;
        }
      });
  },
});

export const { removeUser } = userSlice.actions;
export default userSlice.reducer;
