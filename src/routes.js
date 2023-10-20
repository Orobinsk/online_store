import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, PROFILE_ROUTE, SHOP_ROUTE} from "./utils/const";
import {BasketPage} from "./pages/BasketPage";
import {DevicePage} from "./pages/DevicePage";
import {ShopPage} from "./pages/ShopPage";
import {ProfilePage} from "./pages/ProfilePage";
import {AdminPage} from "./pages/AdminPage";

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
        path: PROFILE_ROUTE,
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