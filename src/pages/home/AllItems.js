import React from "react";
import { Fragment } from "react";
import AllCards from "../../components/cards/allCards";
import NavbarGeneral from "../../components/layout/navbarGeneral";

const AllItems = ({ setRoute, previousRoute, currentRoute }) => {
  return (
    <Fragment>
      <NavbarGeneral
        setRoute={setRoute}
        previousRoute={previousRoute}
        currentRoute={currentRoute}
      />
      <AllCards setRoute={setRoute} />
    </Fragment>
  );
};

export default AllItems;
