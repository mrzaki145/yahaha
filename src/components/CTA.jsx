import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">
      <header>
        <h2 className="h1">
          <span>Ready to start</span> <span>your journey?</span>
        </h2>
        <Link to="/download" className="btn">
          Download Now
        </Link>
      </header>

      <div className="preview"></div>
    </section>
  );
}

export default CTA;
