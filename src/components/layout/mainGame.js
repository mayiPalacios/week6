import React from "react";
import { Fragment } from "react";
import Comments from "../comments/comments";
import useFetch from "../../utils/createRequest";
import startImage from "../../IMG/star.png";
import remoteImg from "../../IMG/remote.png";
const url = "https://api.rawg.io/api/games";
const key = "key=f99f9038acea4c0c9fdf996f2eb9a1d5";

const MainGame = React.memo(() => {
  let id = localStorage.getItem("gameID");
  const { data, error, isLoading } = useFetch(url, "", "GET", key, id);

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
