import React from "react";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let's build something together!
      </p>
      <Link to="/contact" className="btn">
        contact
      </Link>
    </section>
  );
};

export default Connect;