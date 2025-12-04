import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <p>This is the home page</p>
      <Link to={"/about"}>
        <button>Redirect to About</button>
      </Link>
    </div>
  );
};

export default HomePage;
