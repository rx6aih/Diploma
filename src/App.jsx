import * as React from "react";
import {BrowserRouter} from "react-router-dom";
import MyNavbar from "./Components/UI/Navbar/MyNavbar.jsx";
import {HeroUIProvider} from "@heroui/system";
function App() {

  return (
      <BrowserRouter>
          <HeroUIProvider>
              <MyNavbar/>
          </HeroUIProvider>
      </BrowserRouter>
  )
}

export default App
