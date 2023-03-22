import { Fragment } from "react";
import AllCards from "../../components/cards/allCards";
import NavbarGeneral from "../../components/layout/navbarGeneral";

const AllItems = () => {
  return (
    <Fragment>
      <NavbarGeneral />
      <AllCards />
    </Fragment>
  );
};

export default AllItems;
