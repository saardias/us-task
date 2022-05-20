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

const NavigationBar = () => {
    const navigate = useNavigate();

    const navigateToPage = (path: string) => {
        navigate(path, { replace: true });
    };

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
                    aria-label='logo'
                    color={'inherit'}
                    edge={'start'}
                    size={'large'}>
                    <DarkModeIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar;