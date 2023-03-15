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

function App() {
  const [count, setCount] = useState(0);

  return (
    <body>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Game />} />
          <Route path="/allCards" element={<AllItems />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </body>
  );
}

export default App;
