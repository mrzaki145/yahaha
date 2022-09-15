import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CTA, Footer } from "../components";
import Carousel from "../components/common/Carousel";
import Tilt from "../components/common/Tilt";
import {
  createContent,
  bannerBg,
  asset,
  scene,
  game,
  carousel1,
  carousel2,
  carousel3,
  puplish,
  creation,
  unity,
} from "../data/images";

function Create() {
  const TiltOpts = {
    scale: 1.05,
    speed: 1500,
    max: 30,
  };

  useEffect(() => {
    document.body.classList.add("create");

    return () => {
      document.body.classList.remove("create");
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="hero stack--sm">
          <h1>
            <span>Introducing</span>
            <span>Yahaha Studio</span>
          </h1>
          <p>
            Using Yahaha Studio creators with little or no coding experience can
            create the games that they imagine: YAHAHA has lowered the barrier
            to 3D games creation with this supremely easy new creator tool
            modeled on all the principles of the Unity development
            environment.It could be a gateway to a new life as a creator in the
            Metaverse.
          </p>
          <NavLink to="/download" className="btn">
            Download Now
          </NavLink>
        </div>

        <Carousel>
          <img src={carousel1} alt="" key={1} />
          <img src={carousel2} alt="" key={2} />
          <img src={carousel3} alt="" key={3} />
        </Carousel>
      </div>

      <section className="container content">
        <header className="stack--sm">
          <h2>Create different content</h2>
          <p>
            Whether you have 3D game creation experience or not, you can easily
            use YAHAHA to create unique content.
          </p>
        </header>

        <div className="sm-content">
          <img src={createContent} alt="" />
        </div>

        <Tilt className="box tilt" options={TiltOpts}>
          <div className="tilt-content">
            <img src={bannerBg} alt="" className="bg" />
            <img src={asset} alt="" className="asset" />
            <img src={scene} alt="" className="scene" />
            <img src={game} alt="" className="game" />
          </div>
        </Tilt>
      </section>

      <section className="container stack--lg">
        <figure className="switcher">
          <img src={puplish} alt="" />
          <figcaption className="stack--sm">
            <h2>Easy to publish</h2>
            <p>
              After you finish the creation, you only need to submit to publish
              it, without tedious steps.
            </p>
          </figcaption>
        </figure>
        <figure className="switcher">
          <img src={creation} alt="" />
          <figcaption className="stack--sm">
            <h2>Low code creation</h2>
            <p>
              If you are using low code,YAHAHA has a large number of assets,
              components and templates that can be used for free to create
              quickly.
            </p>
          </figcaption>
        </figure>
        <figure className="switcher">
          <img src={unity} alt="" />
          <figcaption className="stack--sm">
            <h2>Friendly with Unity creators</h2>
            <p>
              Unity creators can open up and build multiplayer worlds more
              easily in YAHAHA.
            </p>
          </figcaption>
        </figure>
      </section>

      <CTA />

      <Footer />
    </>
  );
}

export default Create;
