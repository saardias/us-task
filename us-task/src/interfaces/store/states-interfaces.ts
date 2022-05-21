import { PaletteMode } from "@mui/material";
import { IBaseState } from "../base";
import { IResevation } from "../models/reservation";

export interface IReservationsState extends IBaseState {
    reservations: IResevation[];
}

export interface ISystemState {
    paletteMode: PaletteMode
}