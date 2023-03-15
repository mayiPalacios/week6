import React from "react";
import useFetch from "../../utils/createRequest";
import { IfetchProps } from "../../utils/createRequest";

const props: IfetchProps = {
  url: "https://api.rawg.io/api/games",
  params: "&page_size=6&page=3",
  typeMethod: "GET",
  key: "key=f99f9038acea4c0c9fdf996f2eb9a1d5",
  id: "",
};

const CardFeatures = React.memo(() => {
  const { data, error, isLoading } = useFetch(props);

  if (error) {
    return <div>Error al recuperar los datos de la API</div>;
  }

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  const handleRouteID = (id) => {
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

CardFeatures.displayName = "CardFeatures";

export default CardFeatures;
