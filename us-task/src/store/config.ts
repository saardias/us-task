import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<Promise<any>, RootState, unknown, Action>
export default store;