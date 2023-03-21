import React, { useState, useEffect } from "react";
import useLocalstorage from "../../hooks/useLocalstorage";
import { getCardFeatures } from "../../utils/callsFetch";
import { Iresults } from "../../models/interfaceGames";
import { IfetchResults } from "../../models/InterfaceFetch";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import.meta.env;

type State = {
  isLoading: boolean;
  error?: Error;
  data?: Iresults[] | undefined;
};

const initialState: State = {
  isLoading: false,
  data: [],
  error: undefined,
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const { idToken } = useLocalstorage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await getCardFeatures();
        if (req) {
          dispatch({ type: "FETCH_SUCCESS", data: req?.results });
        }
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE", error: error as Error });
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
      {state.data?.map((item) => (
        <Link to={`/game${idToken}`}>
          <div
            key={item.id}
            className="card__feature"
            onClick={() => handleRouteID(item.id)}
          >
            <img alt="img" src={item.background_image} />
          </div>
        </Link>
      ))}
    </div>
  );
});

CardFeatures.displayName = "CardFeatures";

export default CardFeatures;
