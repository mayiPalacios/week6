import { useState, useEffect } from "react";
import { Ilogin } from "../models/interfaceUser";
import { getUser } from "../utils/callsFetch";
import { Iuser } from "../models/interfaceUser";

const useAuth = () => {
  const [userJson, setuserJson] = useState<Ilogin[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await getUser();
        console.log(request);
        setuserJson(request);
      } catch (_error: any) {
        setError(_error);
      }
    };

    fetchData();
  }, []);

  function login(email: string, password: string) {
    const userFound = userJson?.find(
      (element: Ilogin) =>
        element.email === email && element.password === password
    );

    if (userFound) {
      const localUser: Iuser = {
        id: userFound?.id,
        name: userFound?.name,
        lastName: userFound?.lastName,
        email: userFound?.email,
      };
      return localUser;
    } else {
      return false;
    }
  }

  return { login, error };
};

export default useAuth;
