import React, { useRef, useEffect, useState } from "react";
import Game from "./pages/game/game.js";
import Home from "./pages/home/home.js";
import AllItems from "./pages/home/AllItems.js";
import Header from "./components/layout/header.js";
import Footer from "./components/layout/footer.js";
import Login from "./pages/login/login.js";
import Register from "./pages/register/register.js";
import usePreviousValue from "./utils/usePreviousValue.js";

function App() {
  const [currentRoute, setCurrentRoute] = useState("/login");
  const previousRoute = usePreviousValue(currentRoute);

  let route;
  switch (currentRoute) {
    case "/game":
      route = <Game setRoute={setCurrentRoute} previousRoute={previousRoute} />;

      break;

    case "/all":
      route = (
        <AllItems
          setRoute={setCurrentRoute}
          previousRoute={previousRoute}
          currentRoute={currentRoute}
        />
      );
      break;

    case "/home":
      route = (
        <Home
          setRoute={setCurrentRoute}
          previousRoute={previousRoute}
          currentRoute={currentRoute}
        />
      );
      break;
    case "/login":
      route = (
        <Login setRoute={setCurrentRoute} previousRoute={previousRoute} />
      );
      break;

    case "/register":
      route = <Register setRoute={setCurrentRoute} />;
      break;
    default:
      route = <Login setRoute={setCurrentRoute} />;
      break;
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header setRoute={setCurrentRoute} />
        {route}
        <Footer />
      </header>
    </div>
  );
}

export default App;
