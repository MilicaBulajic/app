import React from "react";
import { Link } from "react-router-dom";
import logo0 from "../../assets/logo0.png";

const Home = () => {
  return (
    <div>
      <div className="landing">
        <div className="landing-nav-container">
          <div>
            <a href="/">
              <img
                className="logo"
                src={logo0}
                style={{ width: "240px" }}
                alt="logo"
              />
            </a>
          </div>
          <div className="nav-menu">
            <Link to="/signup">Register</Link>
            <Link to="/login">Login</Link>
          </div>
          <div className="main">
            <h1>Classify properly.</h1>
            <p>
              Planning, tracking, and delivering your team's best work has never
              been easier with Classify
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
