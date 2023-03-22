import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { getAllCards } from "../../utils/callsFetch";
import { Iresults } from "../../models/interfaceGames";
import { Link, useNavigate } from "react-router-dom";
import useLocalstorage from "../../hooks/useLocalstorage";
import img from "../../IMG/defaultImg.png";

const AllCards = () => {
  const [data, setData] = useState<Iresults[] | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [itemSearch, setSearch] = useState("");
  const [itemsPerPage, setItemPage] = useState<number>(10);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { idToken } = useLocalstorage();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const request = await getAllCards(itemsPerPage, itemSearch);

        setData(request?.results);
      } catch (error: any) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [itemsPerPage, error, itemSearch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const debouncedFunction = debounce((event) => {
    setSearch("&search=" + event.target.value);
    navigate(
      `/allcards/?page=${itemsPerPage}&search=${encodeURIComponent(
        event.target.value
      )}`,
      { replace: true }
    );
  }, 2000);

  function handleSelectOption(event: React.ChangeEvent<HTMLSelectElement>) {
    const copyOption = parseInt(event.target.value);
    setItemPage(copyOption);
  }

  const handleRouteID = (id: number) => {
    if ("gameID" in localStorage) {
      localStorage.removeItem("gameID");
      localStorage.setItem("gameID", "/" + id);
    } else {
      localStorage.setItem("gameID", "/" + id);
    }
  };

  const defaultImg = img;
  return (
    <div>
      <div className="inpt__wrapper">
        <input
          type="text"
          placeholder="Search"
          id="inpt__search"
          onChange={(event) => debouncedFunction(event)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="input-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <select className="select__card--number" onChange={handleSelectOption}>
          <option value="">Select number of cards</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>

      <div className="container_all--card parent">
        <h1>Generals card</h1>
        <div className="container__all--items">
          {data?.map((item) => (
            <div key={item.id} className="card__all">
              <Link to={`/game${idToken}`}>
                <button onClick={() => handleRouteID(item.id)}>
                  <div
                    className="card__all--img"
                    style={{
                      backgroundImage: "url(" + item.background_image + ")",
                    }}
                  ></div>
                  <span>{item.name}</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCards;
