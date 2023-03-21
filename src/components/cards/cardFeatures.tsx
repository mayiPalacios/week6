import React, { useState, useEffect } from "react";
import useFetch from "../../utils/createRequest";
import { IfetchProps } from "../../utils/createRequest";
import { getCardFeatures } from "../../utils/callsFetch";
import { Iresults } from "../../models/interfaceGames";
import { IfetchResults } from "../../models/InterfaceFetch";
import { useReducer } from "react";
import.meta.env;

type State = {
  isLoading: boolean;
  error?: Error;
  data?: Iresults[] | undefined;
};

const initialState: State = {
  isLoading: false,
};

type Action =
  | { type: "FETCH_REQUEST" }
  | { type: "FETCH_SUCCESS"; data: Iresults[] }
  | { type: "FETCH_FAILURE"; error: Error };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { isLoading: true, error: undefined, data: [] };
    case "FETCH_SUCCESS":
      return { isLoading: false, data: action.data || state.data };
    case "FETCH_FAILURE":
      return { isLoading: false, error: action.error };
    default:
      return state;
  }
}

const CardFeatures = React.memo(() => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [data, setData] =
    useState<Iresults[]>(); /*combinar estos 3 estados en uno con uredReducer */
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await getCardFeatures();
        setData(req?.results);
        /* dispatch({ type: "FETCH_SUCCESS", data: req?.results });*/
      } catch (error) {
        /*  setError(error as Error);*/
        /* dispatch({ type: "FETCH_FAILURE", error: error as unknown });*/
        /* setIsLoading(false);*/
      }
    };
    fetchData();
  }, []);

  if (state.error) {
    return <div>Error al recuperar los datos de la API</div>;
  }

  if (state.isLoading) {
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

  return (
    <div className="container_card--feature">
      {data?.map((item) => (
        <div
          key={item.id}
          className="card__feature"
          onClick={() => handleRouteID(item.id)}
        >
          <img alt="img" src={item.background_image} />
        </div>
      ))}
    </div>
  );
});

CardFeatures.displayName = "CardFeatures";

export default CardFeatures;
