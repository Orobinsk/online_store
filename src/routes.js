import AdminPage from "./pages/AdminPage/components/AdminPage";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/const";
import BasketPage from "./pages/BasketPage/BasketPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import DevicePage from "./pages/DevicePage/DevicePage";
import ProfilePage from "./pages/AuthPage/ProfilePage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <AdminPage/>
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        element: <ShopPage/>
    },
    {
        path: LOGIN_ROUTE,
        element: <ProfilePage/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <ProfilePage/>
    },
    {
        path: DEVICE_ROUTE + '/:id',
        element: <DevicePage/>
    },
    {
        path: BASKET_ROUTE,
        element: <BasketPage/>
    }
]