import NavigationBar from '../navigation/NavigationBar';

const Layout = ({ children }: { children: any; }) => {
    return (
        <>
            <NavigationBar />
            {children}
        </>
    )
}

export default Layout;