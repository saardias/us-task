import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import reducers from './features';

const appReducer = combineReducers(reducers)

export type RootState = ReturnType<typeof appReducer>

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
    return appReducer(state, action);
}

export default rootReducer;