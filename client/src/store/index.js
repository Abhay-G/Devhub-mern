import { configureStore } from '@reduxjs/toolkit';
import auth from './authSlice';
import activate from './activateSice';
export const store = configureStore({
    reducer: {
        auth,
        activate,
    },
});
