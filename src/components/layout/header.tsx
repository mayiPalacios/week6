import React from "react";
import { Link } from "react-router-dom";

const Header = React.memo(() => {
  return (
    <header>
      <div className="container__logo">
        <img
          src="https://www.diurnay.com/media/2015/09/blanco-sony-logo.png"
          alt=""
        />
      </div>
    </header>
  );
});

export default Header;
