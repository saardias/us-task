import { IResevation } from './../../../interfaces/models/reservation';
import { IReservationsState } from './../../../interfaces/store/reservations-interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IReservationsState = {
    reservations: [],
    loading: false,
    error: null
}

const _addNewReservation = (state: IReservationsState) => {
    const newReservation: IResevation = {
        first: null,
        main: null,
        desert: null
    }
    state.reservations.push(newReservation);
}


const ReservationsSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers: {
        addNewReservation: _addNewReservation
    }
})

const { actions, reducer } = ReservationsSlice;
export const { addNewReservation } = actions;

export default reducer;
