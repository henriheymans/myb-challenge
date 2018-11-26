import React, { Component } from "react";
import "./TabBar.css";
import { Link } from "react-router-dom";
class TabBar extends Component {
  state = {
    titleName: "Upcoming Events"
  };

  changeTitleName = event => {
    console.log(event);
  };

  render() {
    return (
      <div className="row justify-content-center tabs-container">
        <div className="col-12 text-center">
          <div>
            <Link to="./upcoming">
              <button
                onClick={this.changeTitleName}
                className="btn btn-info m-2"
              >
                Upcoming Events
              </button>
            </Link>
            <Link to="./friends">
              <button onClick={this.changeTitleName} className="btn btn-info">
                Friends
              </button>
            </Link>
          </div>
        </div>
        <div className="col-12 text-center">
          <h2 className="page-title">{this.changeTitleName()}</h2>
        </div>
        <div className="page-separator" />
      </div>
    );
  }
}

export default TabBar;
