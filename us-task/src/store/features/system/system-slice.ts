import { ISystemState } from './../../../interfaces/store/states-interfaces';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ISystemState = {
    paletteMode: 'light'
}

const _togglePaletteMode = (state: ISystemState) => {
    state.paletteMode = state.paletteMode === 'light' ? 'dark' : 'light';
}

const SystemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        togglePaletteMode: _togglePaletteMode
    }
})

const { actions, reducer } = SystemSlice;
export const { togglePaletteMode } = actions;

export default reducer;
