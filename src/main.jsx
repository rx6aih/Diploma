import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HeroUIProvider} from "@heroui/system";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <HeroUIProvider>
            <App />
        </HeroUIProvider>
    </BrowserRouter>
)
