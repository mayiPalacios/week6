import React,{useState,useEffect} from "react";
import { Fragment } from "react";
import Comments from "../comments/comments";
import useFetch from "../../utils/createRequest";
import startImage from "../../IMG/star.png";
import remoteImg from "../../IMG/remote.png";
import { getViewDetails } from "../../utils/callsFetch";
import { Iresults } from "../../models/interfaceGames";
import { Iplatforms } from "../../models/interfaceGames";

const MainGame = React.memo(() => {
  let id = localStorage.getItem("gameID");
  const [data,setData] = useState<Iplatforms[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 /* const { data, error, isLoading } = useFetch(url, "", "GET", key, id);*/
 useEffect(() => {
 
  const fetchData = async () => {
      const reques = await  getViewDetails();
      setData(reques?.platforms);
  }
  fetchData();


 }, []);

  if (error) {
    return <div>Error al recuperar los datos de la API</div>;
  }

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  const paragraph = data.description;

  return (
    <main className="main__game">
      <section className="container__section--info">
        <div id="section__games--elements">
          <img alt="" id="img__post--games" src={data.background_image} />

          <div className="div__info--more">
            <ul className="ul__info--game">
              {data.platforms?.map((item) => (
                <li key={item.id}>
                  <div>
                    <div>
                      <span>
                        <img alt="imgRemote" src={remoteImg} />
                      </span>
                      <span className="title__span">{item.platform.name}</span>
                    </div>
                  </div>
                </li>
              ))}
              <li id="container__rating">
                <div>
                  <span>
                    <img alt="imgStart" src={startImage} />
                  </span>
                  <span className="title__span">Rating:{data.rating}</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="div__info--post">
            <h2>{data.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: paragraph }}></div>
          </div>
        </div>
      </section>
      <Fragment>
        <Comments />
      </Fragment>
    </main>
  );
});

export default MainGame;
