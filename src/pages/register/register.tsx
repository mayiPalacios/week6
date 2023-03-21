import React, { useEffect, useState } from "react";
import { Iresults } from "../../models/interfaceGames";
import { Ilogin, Iuser } from "../../models/interfaceUser";
import { getUser, postUser } from "../../utils/callsFetch";
import useFetch from "../../utils/createRequest";

const Register = () => {
  /* const { data } = useFetch(url, "", "GET", "", "");*/
  let lenghtData=0;
  const [data, setData] = useState<Ilogin[]>();
  const [userName, setUserName] = useState("");
  const [userLastNam, setLastName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await getUser();
        setData(request);
        lenghtData = request?.length ;
      } catch (error: any) {
        <div>error</div>;
      }
       
    };
    fetchData();
  }, []);

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }

  function handleLastname(event: React.ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    const post: Iuser = {
      name: userName,
      lastName: userLastNam, 
      email: userEmail,
      password: userPassword,
    };
         
   try {
      const response = await postUser(post);
        console.log(response);
      setAlertData("User registered successfully!");
      setShowAlert(true);
    } catch (error) {
      console.error(error);
      setAlertData("Failed to register user.");
      setShowAlert(true);
    }
  };

  const handleRouteLogin = () => {};

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
            onChange={handleEmail}
            autoFocus
          />

          <i className="fa fa-user"></i>
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handlePassword}
          />

          <i className="fa fa-user"></i>
          <input
            type="name"
            placeholder="name"
            id="name"
            onChange={handleName}
          />

          <i className="fa fa-user"></i>
          <input
            type="last__name"
            placeholder="Last name"
            id="last__name"
            onChange={handleLastname}
          />

          <div className="btn__sign">
            <a onClick={handleRouteLogin}>Sign In</a>
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
};

export default Register;
