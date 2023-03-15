import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <img
          alt="img"
          src="https://cdn-icons-png.flaticon.com/512/1241/1241001.png"
        />
        <hr />
      </div>

      <div className="container__copyright">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              © 2023 Sony Interactive Entertainment Inc. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
