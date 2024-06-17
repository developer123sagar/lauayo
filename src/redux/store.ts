import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AuthReducer } from "@/redux/reducers/AuthReducer";
import { AuthApi } from "@/redux/api/AuthApi";
import { VideoApi } from "./api/VideoApi";


const store = configureStore({
    reducer: {
        [AuthApi.reducerPath]: AuthApi.reducer,
        [VideoApi.reducerPath]: VideoApi.reducer,
        [AuthReducer.name]: AuthReducer.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AuthApi.middleware, VideoApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;