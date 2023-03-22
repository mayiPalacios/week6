import { Fragment } from "react";
import CardFeatures from "../cards/cardFeatures";
import CardGenerals from "../cards/cardGeneral";

const MainHome = () => {
  return (
    <main>
      <section className="section__spam">
        <div>
          <img
            alt="img"
            id="img__background"
            src="https://image.api.playstation.com/pr/bam-art/153/618/ef7f2c99-2f21-4a1e-9c9f-c731ea6928d9.jpg?w=1920&thumb=false"
          ></img>
          <img
            alt="img"
            id="img__icon--moment"
            src="https://image.api.playstation.com/pr/bam-art/154/121/a9e953b7-7a3e-4d06-a621-e2dee266faa7.png?w=620&thumb=false"
          />
        </div>
      </section>

      <div>
        <Fragment>
          <CardFeatures />
          <CardGenerals />
        </Fragment>
      </div>
    </main>
  );
};
export default MainHome;
