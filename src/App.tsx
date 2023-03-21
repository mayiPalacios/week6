import { useState } from "react";
import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Login from "./pages/login/login";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./pages/home/home";
import Game from "./pages/game/game";
import AllItems from "./pages/home/AllItems";
import Register from "./pages/register/register";
import RouteName from "./utils/routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route  path={`/${RouteName.LOGIN}`}  element={<Login />} />
          <Route path={`/${RouteName.HOME}`}  element={<Home />} />
          <Route path={`/${RouteName.GAME}`} element={<Game/>} />
          <Route path={`/${RouteName.ALLITEMS}`}  element={<AllItems />} />
          <Route path={`/${RouteName.REGISTER}`}  element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </div>
  );
}

export default App;
