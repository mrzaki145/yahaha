/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { Footer } from "../components";
import Icon from "../components/common/Icon";
import { banner, app, studio } from "../data/images";

function getOS() {
  let OSName = "Unknown OS";
  if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
  else if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
  else if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
  else if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

  return OSName;
}

function Download() {
  useEffect(() => {
    document.body.classList.add("download");

    return () => {
      document.body.classList.remove("download");
    };
  }, []);

  return (
    <>
      <header className="header container">
        <div className="switcher">
          <div>
            <h1>
              <span>Get YAHAHA</span> <span>for any device</span>
            </h1>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="btn">
              Download for {getOS()}
            </a>
          </div>

          <img src={banner} alt="" />
        </div>
      </header>

      <section className="section container">
        <div className="stories">
          <div className="store">
            <img src={app} alt="" />
            <h2>Mobile Apps</h2>
            <div className="btn-group">
              <a href="#" className="download-btn">
                <Icon name="logo-apple" />
                App Store
              </a>
              <a href="#" className="download-btn">
                <Icon name="logo-google-playstore" />
                Google Play
              </a>
            </div>
          </div>
          <div className="store">
            <img src={studio} alt="" />
            <h2>Yahaha Studio</h2>
            <div className="btn-group">
              <a href="#" className="download-btn">
                <Icon name="logo-windows" />
                Windows
              </a>
              <a href="#" className="download-btn">
                <Icon name="logo-apple" />
                MacOS
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Download;
