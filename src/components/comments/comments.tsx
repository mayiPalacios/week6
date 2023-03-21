import React, { useState, useEffect } from "react";
const url = "https://eminent-incandescent-peripheral.glitch.me/comments";
import useLocalstorage from "../../hooks/useLocalstorage";
import { Icomment } from "../../models/interfaceUser";
import { getComment } from "../../utils/callsFetch";
import { postComment } from "../../utils/callsFetch";

const Comments = () => {
  const { idToken, token } = useLocalstorage();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);
  const [comment, setcomment] = useState("");
  const [data, setData] = useState<Icomment>();
  const thisID = parseInt(idToken?.replace("/", ""));
  const userLog = JSON.parse(token);
  const [available, setAvailable] = useState<Icomment>();

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await getComment();
        setData(request);
        console.log(request);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [available]);

  if (!data) {
    return;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const post: Icomment = {
      comment: comment,
      post_id: thisID,
      user_id: userLog.id,
      name_user: userLog.name,
      last_name: userLog.lastName,
    };

    try {
      const response = await postComment(post);
      setAvailable(response);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <p>Cargando comentarios...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <section className="container__section--comments">
      <div className="container__title--comments">
        <h2 className="lineSpecialties">COMMENTS</h2>
      </div>

      <div className="container__value--comments">
        {data
          .filter((datas) => parseInt(datas.post_id) === thisID)
          .map((datas) => (
            <div key={datas.id}>
              <h6>{datas.name_user + " " + datas.last_name}</h6>
              <p>{datas.comment}</p>
            </div>
          ))}
      </div>

      <div className="container__form--comments">
        <div className="container__title--comments">
          <h2 className="lineSpecialties">LEAVE A REPLY</h2>
        </div>

        <form onSubmit={handleSubmit} className="div__form--comments">
          <textarea
            placeholder="Comment *"
            onChange={(e) => setcomment(e.target.value)}
          ></textarea>
          <button type="submit">Post comment</button>
        </form>
      </div>
    </section>
  );
};

export default Comments;
