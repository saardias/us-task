import { useNavigate } from "react-router-dom";
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

import Routes from "../../routes";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { togglePaletteMode } from "../../store/features/system/system-slice";

const NavigationBar = () => {
    const dispatch = useAppDispatch();
    const system = useAppSelector(state => state.system);
    const navigate = useNavigate();

    const navigateToPage = (path: string) => {
        navigate(path, { replace: false });
    };

    const onColorModeClick = () => {
        dispatch(togglePaletteMode());
    }

    return (
        <AppBar position='static'>
            <Toolbar>
                <DinnerDiningIcon />
                <Stack direction={'row'} spacing={2} sx={{ flexGrow: 1 }}>
                    <Button
                        onClick={() => { navigateToPage(Routes.main.home) }}
                        color={'inherit'}>
                        Home
                    </Button>
                    <Button
                        onClick={() => { navigateToPage(Routes.main.reservations) }}
                        color={'inherit'}>
                        dinner Reservation
                    </Button>
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