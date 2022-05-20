import { IBaseState } from "../base";
import { IResevation } from "../models/reservation";

export interface IReservationsState extends IBaseState {
    reservations: IResevation[];
}