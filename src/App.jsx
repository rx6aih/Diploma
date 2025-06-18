import * as React from "react";
import {BrowserRouter} from "react-router-dom";
import MyNavbar from "./Components/UI/Navbar/MyNavbar.jsx";
import {HeroUIProvider} from "@heroui/system";
import AppRouter from "./Route/AppRouter.jsx";
import Footer from "./Components/UI/Footer/Footer.jsx";
import {useEffect, useState} from "react";
function App() {

    return (
        <BrowserRouter>
            <HeroUIProvider>
                <MyNavbar/>
                <AppRouter/>
                <Footer/>
            </HeroUIProvider>
        </BrowserRouter>
    );
}

export default App
