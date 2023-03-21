import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Login from "./pages/login/login";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./pages/home/home";
import Game from "./pages/game/game";
import AllItems from "./pages/home/AllItems";
import Register from "./pages/register/register";
import RouteName from "./utils/routes";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import useLocalstorage from "./hooks/useLocalstorage";
import { useState } from "react";
import usePreviousValue from "./hooks/usePreviousValue";

function App() {
  const { idToken } = useLocalstorage();
  const [currentRoute, setCurrentRoute] = useState("/login");
  const previousRoute = usePreviousValue(currentRoute);

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path={`/${RouteName.LOGIN}`} element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path={`/${RouteName.HOME}`} element={<Home />} />
            <Route path={`/${RouteName.GAME}${idToken}`} element={<Game />} />
            <Route path={`/${RouteName.ALLITEMS}`} element={<AllItems />} />
          </Route>

          <Route path={`/${RouteName.REGISTER}`} element={<Register />} />
          <Route path="*" element={<p>Not Found:404!</p>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
