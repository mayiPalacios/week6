import React from "react";
import { Fragment } from "react";
import MainGame from "../../components/layout/mainGame";
import NavbarGeneral from "../../components/layout/navbarGeneral";

const Game = () => {
  return (
    <Fragment>
      <NavbarGeneral />
      <MainGame />
    </Fragment>
  );
};

export default Game;
