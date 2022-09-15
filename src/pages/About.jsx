import { useEffect } from "react";
import { Footer } from "../components";
import {
  diversity,
  inclusiveness,
  innovation,
  coatue,
  hillhouse,
  zhenfund,
  bai,
  mi,
  fivey,
  bili,
  cgtrader,
  unity,
  igda,
  ggac,
  futureGames,
  rgda,
  goms,
  pgcHsk,
  igf,
  bron,
  indieHub,
  nti,
  sgda,
  bgc,
  agl,
  wn,
  sga,
  tg,
  devGamm,
  gig,
  wlg,
  hive,
  dd,
  ukie,
  lgda,
  helsinki,
  gds,
  igda2,
  jina,
} from "../data/images";

function About() {
  useEffect(() => {
    document.body.classList.add("about");

    return () => {
      document.body.classList.remove("about");
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="hero stack--lg">
          <h1>
            <span>We make 3D multiplayer online creation</span>
            <span>easy for everyone</span>
          </h1>
          <p>
            YAHAHA is here to solve a big problem-how to let people have fun and
            share with friends through 3D interaction. Before YAHAHA, making
            true 3D interactive experiences needed a high level of technical
            knowhow. YAHAHA brings 3D content creation to every creator with
            simple and easy tools and templates. With YAHAHA, creators are part
            of an exciting new social community sharing creative, fun
            experiences where the only limitation is your imagination.
          </p>
        </div>
      </div>

      <section className="section container">
        <header className="section__header">
          <h2>Team YAHAHA</h2>
          <p>
            Founded in 2020, our company has now opened offices in Finland,
            Korea and China. We have a strong engineering culture with more than
            80% of our team members being engineers. With an open culture, we
            embrace diversity, innovation and inclusiveness.
          </p>
        </header>

        <section className="team">
          <div>
            <img src={diversity} alt="" />
            <h3>Diversity</h3>
          </div>
          <div>
            <img src={inclusiveness} alt="" />
            <h3>Inclusiveness</h3>
          </div>
          <div>
            <img src={innovation} alt="" />
            <h3>Innovation</h3>
          </div>
        </section>
      </section>

      <section className="section container">
        <header className="section__header">
          <h2>Our Investors</h2>
        </header>

        <div className="companies investors">
          <img src={coatue} alt="coatue logo" />
          <img src={hillhouse} alt="hillhouse logo" />
          <img src={zhenfund} alt="zhenfund logo" />
          <img src={bai} alt="bai logo" />
          <img src={mi} alt="mi logo" />
          <img src={fivey} alt="fivey logo" />
          <img src={bili} alt="bili logo" />
        </div>
      </section>

      <section className="section container">
        <header className="section__header">
          <h2>Our Partners</h2>
        </header>

        <div className="companies">
          <img src={cgtrader} alt="" />
          <img src={unity} alt="" />
          <img src={igda} alt="" />
          <img src={ggac} alt="" />
          <img src={futureGames} alt="" />
          <img src={rgda} alt="" />
          <img src={goms} alt="" />
          <img src={pgcHsk} alt="" />
          <img src={igf} alt="" />
          <img src={bron} alt="" />
          <img src={indieHub} alt="" />
          <img src={nti} alt="" />
          <img src={sgda} alt="" />
          <img src={bgc} alt="" />
          <img src={agl} alt="" />
          <img src={wn} alt="" />
          <img src={sga} alt="" />
          <img src={tg} alt="" />
          <img src={devGamm} alt="" />
          <img src={gig} alt="" />
          <img src={wlg} alt="" />
          <img src={hive} alt="" />
          <img src={dd} alt="" />
          <img src={ukie} alt="" />
          <img src={lgda} alt="" />
          <img src={helsinki} alt="" />
          <img src={gds} alt="" />
          <img src={igda2} alt="" />
          <img src={jina} alt="" />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
