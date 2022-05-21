import { PaletteMode } from "@mui/material";
import { IBaseState } from "../base";
import { IResevation } from "../models/reservation";

export interface IReservationsState extends IBaseState {
    orders: IResevation[];
}

export interface ISystemState {
    paletteMode: PaletteMode
}