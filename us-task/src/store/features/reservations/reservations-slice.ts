import { v4 as uuidv4 } from 'uuid';
import { IResevation, MealType, IMeal } from './../../../interfaces/models/reservation';
import { IReservationsState } from '../../../interfaces/store/states-interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IReservationsState = {
    orders: [],
    loading: false,
    error: null
}

const _addNewOrder = (state: IReservationsState) => {
    const newReservation: IResevation = {
        id: uuidv4(),
        first: null,
        main: null,
        desert: null
    }
    state.orders.push(newReservation);
}

const _removeOrder = (state: IReservationsState, { payload }: PayloadAction<{ id: string }>) => {
    let updateOrders = [...state.orders].filter((reservation) =>
        reservation.id !== payload.id
    )
    state.orders = updateOrders;
}

const _setMeal = (state: IReservationsState, { payload }: PayloadAction<{ id: string, meal: MealType, value: IMeal | null }>) => {
    const {
        id, meal, value
    } = payload;
    let updateOrders = [...state.orders];
    const index = updateOrders.findIndex((order) => order.id === id);
    if (index >= 0) {
        updateOrders[index][meal] = value;
        if (meal === 'first') {
            updateOrders[index].main = null;
            updateOrders[index].desert = null;
        }
        if (meal === 'main') {
            updateOrders[index].desert = null;
        }
    }
    state.orders = updateOrders;
}

const ReservationsSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers: {
        addNewOrder: _addNewOrder,
        removeOrder: _removeOrder,
        setMeal: _setMeal
    }
})

const { actions, reducer } = ReservationsSlice;
export const { addNewOrder, removeOrder, setMeal } = actions;

export default reducer;
