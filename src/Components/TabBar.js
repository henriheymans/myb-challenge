import React, { Component } from "react";
import "./TabBar.css";
class TabBar extends Component {
  state = {};
  render() {
    return (
      <div className="row justify-content-center tabs-container">
        <div className="col-12 text-center">
          <button className="btn btn-info m-2">Friends</button>
          <button className="btn btn-info">Upcoming Events</button>
        </div>
      </div>
    );
  }
}

export default TabBar;
