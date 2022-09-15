/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import Icon from "./common/Icon";
import { logo } from "../data/images";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="brand">
          <img src={logo} alt="" className="logo" />
          <p>Ushering in the next generation of entertainment.</p>
          <p>© 2022 Yahaha Studios All Rights Reserved</p>
          <p>
            Disclaimer: some of the art assets on the website are purchased and
            used only for concept demonstration purposes.
          </p>
        </div>

        <div className="nav-links">
          <dl>
            <div>
              <dt>Product</dt>
              <dd>
                <Link to="/">Play</Link>
              </dd>
              <dd>
                <Link to="/create">Create</Link>
              </dd>
              <dd>
                <Link to="/download">Download</Link>
              </dd>
            </div>
            <div>
              <dt>Company</dt>
              <dd>
                <Link to="/about">About</Link>
              </dd>
              <dd>
                <a href="#">Press Kit</a>
              </dd>
            </div>
            <div>
              <dt>Creator</dt>
              <dd>
                <a href="#">Portal</a>
              </dd>
              <dd>
                <a href="#">Docs</a>
              </dd>
            </div>
            <div>
              <dt>Legal</dt>
              <dd>
                <a href="#">Privacy</a>
              </dd>
              <dd>
                <a href="#">Terms of Use</a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="follow-us">
          <dl>
            <dt>Follow us</dt>
            <div className="links">
              <dd>
                <a
                  href="https://twitter.com/OfficialYahaha"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="logo-twitter" />
                </a>
              </dd>
              <dd>
                <a
                  href="https://discord.gg/swxTWD2U3V"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="logo-discord" />
                </a>
              </dd>
              <dd>
                <a
                  href="https://www.twitch.tv/yahahastudios"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="logo-twitch" />
                </a>
              </dd>
              <dd>
                <a
                  href="https://www.youtube.com/channel/UCcxps6OEHluRAs9-PntVFhg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="logo-youtube" />
                </a>
              </dd>
              <dd>
                <a
                  href="https://www.linkedin.com/company/yahaha"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="logo-linkedin" />
                </a>
              </dd>
            </div>
          </dl>

          <a href="mailto:contact@yahaha.com" className="contact-btn">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
