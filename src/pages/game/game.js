import React from "react";
import { Fragment } from "react";
import MainGame from "../../components/layout/mainGame";
import NavbarGeneral from "../../components/layout/navbarGeneral";

const Game = ({ setRoute, previousRoute }) => {
  return (
    <Fragment>
      <NavbarGeneral setRoute={setRoute} previousRoute={previousRoute} />
      <MainGame setRoute={setRoute} />
    </Fragment>
  );
};

export default Game;
