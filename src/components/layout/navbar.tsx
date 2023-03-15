import React from "react";

const Navbar = () => {

  return (
    <nav>
      <div className="form__header">
        <div className="containter__btn--navbar">
          <button id="btn__exit--navbar" >
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/2760/2760599.png"
            />
          </button>

          <button id="btn__home--navbar">
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

export default Navbar;
