import React, { useState } from "react";
import useFetch from "../../utils/createRequest";
const url = "https://eminent-incandescent-peripheral.glitch.me/users";

const Register = React.memo(({ setRoute }) => {
  const { data } = useFetch(url, "", "GET", "", "");
  const [userName, setUserName] = useState("");
  const [userLastNam, setLastName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState();

  const userObject = {
    id: null,
    name: "",
    lastName: "",
    email: "",
    password: "",
  };

  if (!data) {
    return;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const lastID = data[data.length - 1].id + 1;
    userObject.id = lastID;
    userObject.name = userName;
    userObject.lastName = userLastNam;
    userObject.email = userEmail;
    userObject.password = userPassword;

    try {
      const response = await fetch(
        `https://eminent-incandescent-peripheral.glitch.me/users`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userObject),
        }
      );
      if (response.ok) {
        setAlertData("User registered successfully!");
        setShowAlert(true);
      } else {
        setAlertData("Failed to register user.");
        setShowAlert(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRouteLogin = () => {
    setRoute("/login");
  };

  if (showAlert) {
    return (
      <div className="container__alert">
        <div className="alert__content" id="cookiesPopup">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3456/3456426.png"
            alt="cookies-img"
          />
          <p>{alertData}</p>
          <button className="btn__accept" onClick={() => setShowAlert(false)}>
            That's fine!
          </button>
        </div>
      </div>
    );
  }

  return (
    <main id="main__register">
      <div className="container__register">
        <form className="form__register" onSubmit={handleSubmit}>
          <p className="title">Register</p>
          <input
            placeholder="Email"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <i className="fa fa-user"></i>
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="fa fa-user"></i>
          <input
            type="name"
            placeholder="name"
            id="name"
            onChange={(e) => setUserName(e.target.value)}
          />
          <i className="fa fa-user"></i>
          <input
            type="last__name"
            placeholder="Last name"
            id="last__name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <div className="btn__sign">
            <a href={handleRouteLogin} onClick={handleRouteLogin}>
              Sign In
            </a>
          </div>

          <i className="fa fa-key"></i>
          <button type="submit">
            <i className="spinner"></i>
            <span className="state">register</span>
          </button>
        </form>
      </div>
    </main>
  );
});

export default Register;
