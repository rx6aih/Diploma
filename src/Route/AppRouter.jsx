import {publicRoutes} from "./routes.js";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
            <Routes>
                {publicRoutes.map(route =>(
                    <Route path={route.path} key={route.path} element={<route.component/>}/>
                ))}
            </Routes>
    );
};

export default AppRouter;