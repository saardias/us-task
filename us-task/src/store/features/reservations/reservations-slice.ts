import { MealType, IMeal, IResevation, IMealLists } from './../../../interfaces/models/reservation';
import { IReservationsState } from '../../../interfaces/store/states-interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getNewOreder } from '../../../utils/utils';
import { IFailedPayload, IUnique } from '../../../interfaces/base';
import mealsApi from '../../api/meals-api';
import { AppThunk } from '../../config';

const initialState: IReservationsState = {
    orders: [],
    loading: false,
    error: null,
    lists: { first: [], main: [], desert: [] },
    listsLoaded: false
}

const _addNewOrder = (state: IReservationsState) => {
    state.orders.push(getNewOreder());
}

const _removeOrder = (state: IReservationsState, { payload }: PayloadAction<IUnique>) => {
    let updateOrders = [...state.orders].filter((reservation) =>
        reservation.id !== payload.id
    )
    state.orders = updateOrders;
}

const adjustOreder = (order: IResevation, meal: MealType, value: IMeal | null) => {
    order[meal] = value;
    if (meal === 'first') {
        order.main = null;
        order.desert = null;
        order.ready = false;
        return;
    }
    if (meal === 'main') {
        order.desert = null;
        order.ready = false;
        return;
    }
    if (meal === 'desert') {
        if (value) {
            order.ready = true;
            return;
        }
        order.ready = false;
    }
}

const _setMeal = (state: IReservationsState, { payload }: PayloadAction<{ id: string, meal: MealType, value: IMeal | null }>) => {
    const {
        id, meal, value
    } = payload;
    let updateOrders = [...state.orders];
    const index = updateOrders.findIndex((order) => order.id === id);
    if (index >= 0) {
        adjustOreder(updateOrders[index], meal, value);
    }
    state.orders = updateOrders;
}

const _startLoad = (state: IReservationsState) => {
    state.loading = true;
}

const _success = (state: IReservationsState) => {
    state.loading = false;
}

const _failed = (state: IReservationsState, { payload }: PayloadAction<IFailedPayload>) => {
    state.loading = false;
    state.error = payload.error
}

const _getMealListsSuccess = (state: IReservationsState, { payload }: PayloadAction<{ mealLists: IMealLists }>) => {
    state.loading = false;
    state.listsLoaded = true;
    state.lists = payload.mealLists;
}

const ReservationsSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers: {
        addNewOrder: _addNewOrder,
        removeOrder: _removeOrder,
        setMeal: _setMeal,
        startLoad: _startLoad,
        success: _success,
        failed: _failed,
        getMealListsSuccess: _getMealListsSuccess
    }
})

const { actions, reducer } = ReservationsSlice;
export const { addNewOrder, removeOrder, setMeal, startLoad, success, failed, getMealListsSuccess } = actions;

export default reducer;

export const getMealLists = (): AppThunk => async (dispatch) => {
    try {
        dispatch(startLoad());
        const res = await mealsApi.fetchMeals();
        if (res.error) {
            return dispatch(failed(res.error))
        }
        return dispatch(getMealListsSuccess({ mealLists: res.data }))
    } catch (error: any) {
        return dispatch(failed(error))
    }
}
