import React from "react";
import "./TabBar.css";
import { Link } from "react-router-dom";
const TabBar = () => {
  return (
    <div className="row justify-content-center tabs-container">
      <div className="col-12 text-center">
        <div>
          <Link to="./upcoming">
            <button className="btn btn-info m-2">Upcoming Events</button>
          </Link>
          <Link to="./friends">
            <button className="btn btn-info">Friends</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
