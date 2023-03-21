import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavbarGeneral = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
    window.location.reload();
  };

  return (
    <nav>
      <div className="form__navGeneral">
        <div className="containter__btn--navbarGeneral">
          <button id="">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/2760/2760599.png"
            />
          </button>

          <button onClick={handleClick} id="btn__home--navbar">
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
