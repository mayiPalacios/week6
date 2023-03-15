import React from "react";
import { Fragment } from "react";
import Navbar from "../../components/layout/navbar";
import MainHome from "../../components/layout/mainHome";

const Home = ({ setRoute, previousRoute, currentRoute }) => {
  return (
    <Fragment>
      <Navbar
        setRoute={setRoute}
        previousRoute={previousRoute}
        currentRoute={currentRoute}
      />
      <MainHome setRoute={setRoute} />
    </Fragment>
  );
};

export default Home;
