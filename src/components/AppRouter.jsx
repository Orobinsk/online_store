import React, {useContext} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/const";
import {Context} from "../index";
import NavBar from "./Navbar/NavBar";

const AppRouter = () => {
    const {user}=useContext(Context)
    return (
        <BrowserRouter>
            <NavBar/>
            {user.isAuth
                ?
                <Routes>
                    {authRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    )}
                    {publicRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />)}
                    <Route
                        path="*"
                        element={<Navigate to={SHOP_ROUTE} replace/>}
                        key={SHOP_ROUTE}
                    />
                </Routes>
                :
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />)}
                    <Route
                        path="*"
                        element={<Navigate to={SHOP_ROUTE} replace/>}
                        key={SHOP_ROUTE}
                    />
                </Routes>}
        </BrowserRouter>
    )
};
export default AppRouter;