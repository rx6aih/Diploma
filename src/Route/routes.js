import Analytic from "../Pages/Analytic.jsx";
import History from "../Pages/History.jsx";
import Home from "../Pages/Home.jsx";
import Kfc from "../Pages/Kfc.jsx";
import Mac from "../Pages/Mac.jsx";
import Register from "../Pages/Register.jsx";
import Bk from "../Pages/Bk.jsx";
import Login from "../Pages/Login.jsx";
import Favorites from "../Pages/Favorites.jsx";

export const publicRoutes = [
    {path: '/analytic', component: Analytic},
    {path: '/history', component: History},
    {path: '/home', component: Home},
    {path: '/favorites', component: Favorites},
    {path: '/kfc', component: Kfc},
    {path: '/mac', component: Mac},
    {path: '/bk', component: Bk},
    {path: '/register', component: Register},
    {path: '/login', component: Login}
]