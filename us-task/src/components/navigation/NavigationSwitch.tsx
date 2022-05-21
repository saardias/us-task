import React from "react";
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import Routes from "../../routes";
import Home from "../home/Home";
import Reservations from "../reservations/Reservations";

const NavigationSwitch = () => {
    return (
        <Switch>
            <Route path={Routes.main.home.path} element={<Home />} ></Route>
            <Route path={Routes.main.reservations.path} element={<Reservations />} ></Route>
            <Route
                path="*"
                element={<Navigate to={Routes.main.home.path} replace />}
            />
        </Switch>
    )
}

export default NavigationSwitch;
