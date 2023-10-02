import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({});

export default store;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
