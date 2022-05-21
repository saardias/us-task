import ReservationSlice from "./reservations/reservations-slice";
import SystemSlice from './system/system-slice';

const reducers = {
    system: SystemSlice,
    reservations: ReservationSlice
}

export default reducers;