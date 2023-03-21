import { request } from "http";
import React, { useState, useEffect, useRef } from "react";
import { Iresults } from "../../models/interfaceGames";
import { getGeneralCards } from "../../utils/callsFetch";
import { useNavigate } from "react-router-dom";
import useLocalstorage from "../../hooks/useLocalstorage";
import { replace } from "lodash";
import { Link } from "react-router-dom";

const itemsPerPage = 5;

const CardGenerals = React.memo(() => {
  const { idToken } = useLocalstorage();
  const navigate = useNavigate();
  const [data, setData] = useState<Iresults[] | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const request = await getGeneralCards(itemsPerPage, currentPage);

        setData(request?.results);
      } catch (_error: any) {
        setError(_error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [currentPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handlePreviousCurrentPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextCurrentPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleRouteID = (id: number) => {
    if ("gameID" in localStorage) {
      localStorage.removeItem("gameID");
      localStorage.setItem("gameID", "/" + id);
    } else {
      localStorage.setItem("gameID", "/" + id);
    }
  };

  return (
    <div className="container_card--general">
      <div className="container__title--general">
        <h1>Generals card</h1>

        <button className="btn__all--card">
          <h2>All cards</h2>
        </button>
      </div>
      <div className="container__btn--general">
        <button
          className="btn__before--general"
          onClick={handlePreviousCurrentPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="btn__after--general"
          onClick={handleNextCurrentPage}
          disabled={data?.length < itemsPerPage}
        >
          Next
        </button>
      </div>
      <div className="container__general--items">
        {data?.map((item: any) => (
          <div key={item.id} className="card__general">
            <Link to={`/game${idToken}`}>
            <button
              style={{ backgroundImage: "url(" + item.background_image + ")" }}
              onClick={() => handleRouteID(item.id)}
            ></button></Link>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default CardGenerals;

