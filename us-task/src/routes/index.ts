
export const mainRoutes = {
    home: { path: '/home', name: 'Home' },
    reservations: { path: '/reservations', name: 'dinner reservation' }
}

const Routes = {
    main: mainRoutes,
}

export const MainRoutesArray = (Object.keys(mainRoutes) as (keyof typeof mainRoutes)[]).map((key: keyof typeof mainRoutes) => mainRoutes[key])
export default Routes;