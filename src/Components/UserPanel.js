import React, { Component } from "react";
import "./UserPanel.css";

class UserPanel extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <div className="row justify-content-center userPanel-box">
          <div className="userPanel-picture col-12 text-center">
            <img src="/testPhoto.jpg" className="profile-picture img-fluid" />
          </div>
          <div className="userPanel-userInfos col-lg-12 text-center align-self-center">
            <h2>Henri Heymans</h2>
            <p>- Works at Freelancing</p>
            <p>- Lives in Anglet, France</p>
            <p>- Last seen 3 Days ago</p>
          </div>
          <div className="userPanel-userStats col-4 text-center m-auto">
            <h2>250 Friends</h2>
            <div className="stats-separator" />
            <h2>152 Upcoming Events</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPanel;
