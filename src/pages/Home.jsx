import { useEffect } from "react";
import { CTA, Footer } from "../components";
import {
  video,
  boom,
  roundIcon,
  airplane,
  helix,
  friends,
  avatar,
  multiverse,
} from "../data/images";

function Home() {
  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="hero">
          <h1>
            <span>Ushering in the </span>
            <span>next generation</span>
            <span>of entertainment</span>
          </h1>
          <div className="video">
            <img src={video} alt="" />
          </div>
          <p>
            In YAHAHA, you can experience amazing 3D games made by creators
            around the world with your friends, at any time. And you can bring
            your dreams to life and become a game or 3D content creator yourself
            with our simple, fun, and free to use creation tools.
          </p>
        </div>

        <div className="objects container">
          <img className="boom" src={boom} alt="" />
          <img className="airplane" src={airplane} alt="" />
          <img className="roundIcon" src={roundIcon} alt="" />
          <img className="helix" src={helix} alt="" />
        </div>
      </header>

      <section className="container stack--lg">
        <figure className="switcher">
          <img src={friends} alt="" />
          <figcaption className="stack--sm">
            <h2>Hang out with friends</h2>
            <p>
              Invite friends and meet new ones anytime, in countless immersive
              3D spaces and like-minded communities.
            </p>
          </figcaption>
        </figure>
        <figure className="switcher">
          <img src={avatar} alt="" />
          <figcaption className="stack--sm">
            <h2>Create your avatar</h2>
            <p>
              Create and own your virtual identity by creating a unique avatar
              to start your new digital lifestyle.
            </p>
          </figcaption>
        </figure>
        <figure className="switcher">
          <img src={multiverse} alt="" />
          <figcaption className="stack--sm">
            <h2>Explore the YAHAHA multiverse</h2>
            <p>
              Explore and experience many fun activities and enjoy interactive
              content from creators with new virtual spaces popping up
              everywhere.
            </p>
          </figcaption>
        </figure>
      </section>

      <CTA />

      <Footer />
    </>
  );
}

export default Home;
