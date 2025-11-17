import storageSession from 'redux-persist/lib/storage/session';
import userReducer from '../features/user/userSlice';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage: storageSession, //delete user data after close browser
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
