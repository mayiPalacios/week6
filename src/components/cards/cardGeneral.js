import React, { useState, useEffect } from "react";
const itemsPerPage = 5;

const CardGenerals = React.memo(({ setRoute }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const request = await fetch(
          ` https://api.rawg.io/api/games?key=f99f9038acea4c0c9fdf996f2eb9a1d5&page_size=${itemsPerPage}&page=${currentPage}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await request.json();

        setData(data.results);
      } catch (_error) {
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
    return <div>Error: {error.message}</div>;
  }

  const handlePreviousCurrentPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextCurrentPage = () => {
    setCurrentPage(currentPage + 1);
  };

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
    <div className="container_card--general">
      <div className="container__title--general">
        <h1>Generals card</h1>

        <button className="btn__all--card" onClick={() => setRoute("/all")}>
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
          disabled={data.length < itemsPerPage}
        >
          Next
        </button>
      </div>
      <div className="container__general--items">
        {data?.map((item) => (
          <div key={item.id} className="card__general">
            <button
              style={{ backgroundImage: "url(" + item.background_image + ")" }}
              onClick={() => handleRouteID(item.id)}
            ></button>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default CardGenerals;
