import React, { useState, useEffect } from "react";
import useFetch from "../../utils/createRequest";
import { IfetchProps } from "../../utils/createRequest";
import { getCardFeatures } from "../../utils/callsFetch";
import { Iresults } from "../../models/interfaceGames";
import { IfetchResults } from "../../models/InterfaceFetch";

import.meta.env
/*
const props: IfetchProps = {
  url: process.env.REACT_APP_API_URL,
  params: "&page_size=6&page=3",
  typeMethod: "GET",
  key: "key=f99f9038acea4c0c9fdf996f2eb9a1d5",
  id: "",
};
*/
const CardFeatures = React.memo(() => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Iresults[]>();

  useEffect(() => {
    const fetchData = async()=> {
      try {
        const req = await getCardFeatures();
        setData(req?.results);

      } catch (err: any) {
        setError(err);
        setIsLoading(false);
      }
    }
    fetchData();
  },[]);

  if (error) {
    return <div>Error al recuperar los datos de la API</div>;
  }

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  const handleRouteID = (id: number) => {
    if ("gameID" in localStorage) {
      localStorage.removeItem("gameID");
      localStorage.setItem("gameID", "/" + id);
    } else {
      localStorage.setItem("gameID", "/" + id);
    }
  };

  return <div className="container_card--feature">
    {data?.map((item) => (
        <div
          key={item.id}
          className="card__feature"
          onClick={() => handleRouteID(item.id)}
        >
          <img alt="img" src={item.background_image} />
        </div>
      ))}
  </div>;
});

CardFeatures.displayName = "CardFeatures";

export default CardFeatures;
