import { IMealLists } from './../models/reservation';
import { PaletteMode } from "@mui/material";
import { IBaseState } from "../base";
import { IResevation } from "../models/reservation";

export interface IReservationsState extends IBaseState {
    orders: IResevation[];
    lists: IMealLists;
    listsLoaded: boolean;
}

export interface ISystemState {
    paletteMode: PaletteMode
}