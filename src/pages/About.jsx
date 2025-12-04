import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <p>This is the about page</p>
      <Link to={"/"}>
        <button>Redirect to Home</button>
      </Link>
    </div>
  );
};

export default About;
