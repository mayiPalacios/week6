import React from "react";

const NavbarGeneral = ({ setRoute, previousRoute, currentRoute }) => {
  const handlePreviousRoute = () => {
    if (currentRoute === "/home") {
      setRoute("/login");
    } else {
      setRoute(previousRoute);
    }

    if (previousRoute === "/login") {
      localStorage.removeItem("userlog");
    }
  };

  const handleRouteHome = () => {
    setRoute("/home");
  };

  return (
    <nav>
      <div className="form__navGeneral">
        <div className="containter__btn--navbarGeneral">
          <button id="btn__exit--navbar" onClick={handlePreviousRoute}>
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/2760/2760599.png"
            />
          </button>

          <button id="btn__home--navbar" onClick={handleRouteHome}>
            <img
              alt="img"
              src="https://cdn-icons-png.flaticon.com/512/3959/3959344.png"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarGeneral;
