import { useNavigate, useLocation } from "react-router-dom";
import {
    AppBar,
    IconButton,
    Stack,
    Toolbar,
    Button
} from '@mui/material';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { MainRoutesArray } from "../../routes";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { togglePaletteMode } from "../../store/features/system/system-slice";
import { ReactElement } from "react";

const NavigationBar = () => {
    const dispatch = useAppDispatch();
    const system = useAppSelector(state => state.system);
    const location = useLocation();
    const navigate = useNavigate();

    const navigateToPage = (path: string) => {
        navigate(path, { replace: false });
    };

    const onColorModeClick = () => {
        dispatch(togglePaletteMode());
    }

    const NavButtons = MainRoutesArray.map((route): ReactElement => (
        <Button
            key={route.path}
            disabled={route.path === location.pathname}
            onClick={() => { navigateToPage(route.path) }}
            color={'inherit'}>
            {route.name}
        </Button>
    ));

    return (
        <AppBar position='static'>
            <Toolbar>
                <DinnerDiningIcon />
                <Stack direction={'row'} spacing={2} sx={{ flexGrow: 1 }}>
                    {NavButtons}
                </Stack>
                <IconButton
                    onClick={onColorModeClick}
                    aria-label='logo'
                    color={'inherit'}
                    edge={'start'}
                    size={'large'}>
                    {
                        system.paletteMode === 'light' ?
                            <DarkModeIcon />
                            :
                            <LightModeIcon />
                    }
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar;