import React from "react";
import useFetch from "../../utils/createRequest";
const url = "https://api.rawg.io/api/games";
const key = "key=f99f9038acea4c0c9fdf996f2eb9a1d5";

const CardFeatures = React.memo(({ setRoute }) => {
  const param = "&page_size=6&page=3";
  const { data, error, isLoading } = useFetch(url, param, "GET", key, "");

  if (error) {
    return <div>Error al recuperar los datos de la API</div>;
  }

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  const handleRouteID = (id) => {
    setRoute("/game");
    if ("gameID" in localStorage) {
      localStorage.removeItem("gameID");
      localStorage.setItem("gameID", "/" + id);
    } else {
      localStorage.setItem("gameID", "/" + id);
    }
  };

  return (
    <div className="container_card--feature">
      {data.results?.map((item) => (
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

export default CardFeatures;
