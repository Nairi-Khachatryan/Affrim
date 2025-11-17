import { persistedReducer } from '../config/persistConfig';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';


export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
