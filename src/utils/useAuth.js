import { useState, useEffect } from "react";

const useAuth = () => {
  const [userJson, setuserJson] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(
          `https://eminent-incandescent-peripheral.glitch.me/users`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await request.json();
        setuserJson(data);
      } catch (_error) {
        setError(_error);
      }
    };

    fetchData();
  }, []);

  function login(email, password) {
    const userFound = userJson.find(
      (element) => element.email === email && element.password === password
    );
    if (userFound) {
      return userFound;
    } else {
      return false;
    }
  }
  return { login, error };
};

export default useAuth;
