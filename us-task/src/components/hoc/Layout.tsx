import NavigationBar from '../navigation/NavigationBar';
import Container from '@mui/material/Container';

const Layout = ({ children }: { children: any; }) => {
    return (
        <>
            <NavigationBar />
            {children}
        </>
    )
}

export default Layout;