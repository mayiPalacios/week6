import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = React.memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useAuth();
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    console.log(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const userFound = await login(email, password);

        if (userFound) {
          localStorage.setItem("userlog", JSON.stringify(userFound));
          navigate("/home");
        } else {
          setShowAlert(true);
        }
      } catch (error) {}
    },
    [email, password, login]
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

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
    navigate("/register");
  };

  return (
    <main id="main__login">
      <div className="container__login">
        <form className="form__login" onSubmit={handleSubmit}>
          <p className="title">Log in</p>
          <input
            placeholder="Email"
            type="email"
            id="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
          <i className="fa fa-user"></i>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <i className="fa fa-key"></i>
          <div className="btn__sign">
            <a onClick={handleRouteRegister}>Sign Up</a>
          </div>

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
