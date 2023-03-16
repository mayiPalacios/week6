import React, { useState, useCallback, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const Login = React.memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useAuth();
  const [showAlert, setShowAlert] = useState(false);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  /*
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const userFound = await login(email, password);

        if (userFound) {
    
          localStorage.setItem("userlog", JSON.stringify(userFound));
        } else {
          setShowAlert(true);
        }
      } catch (error) {}
    },
    [email, password, setRoute, login]
  );*/
  /*
  if (error) {
    return <div>Error: {error.message}</div>;
  }
*/ /*
  if (showAlert) {
    return (
      <div className="container__alert">
        <div className="alert__content" id="cookiesPopup">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2731/2731811.png"
            alt="cookies-img"
          />
          <p>The email or password is incorrect</p>
          <button className="btn__accept" onClick={() => setShowAlert(false)}>
            That's fine!
          </button>
        </div>
      </div>
    );
  }

  const handleRouteRegister = () => {
    setRoute("/register");
  };
*/
return (
  <main id="main__login">
    <div className="container__login">
      <form className="form__login">
        <p className="title">Log in</p>
        <input placeholder="Email" type="email" id="email" autoFocus />
        <i className="fa fa-user"></i>
        <input type="password" placeholder="Password" id="password" />
        <div className="btn__sign">
          <a>Sign Up</a>
        </div>

        <i className="fa fa-key"></i>
        <button type="submit">
          <i className="spinner"></i>
          <span className="state">Log in</span>
        </button>
      </form>
    </div>
  </main>
);
});

export default Login;
