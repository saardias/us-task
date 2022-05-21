import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Container from '@mui/material/Container';
import Routes from "../../routes";

const PageContainer = ({ children }: { children: any; }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    console.log('location', location)
    return (
        <Container sx={{
            width: '100%',
            minHeight: '100%',
            backgroundColor: `${theme.palette.background.default}`
        }} maxWidth={false}>
            {
                location.pathname !== Routes.main.home ?
                    <IconButton
                        onClick={() => { navigate(-1) }}
                        aria-label='back-button'
                        sx={{ position: 'absolute' }}
                        color={'primary'}
                        edge={'start'}
                        size={'large'}>
                        <ArrowBackIcon />
                    </IconButton>
                    : null
            }
            {children}
        </Container>
    )
}

export default PageContainer;