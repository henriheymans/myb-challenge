import React, { Component } from "react";
import Fetch from "./Fetch";
import "./UserPanel.css";
import TabBar from "./TabBar";

class UserPanel extends Component {
  render() {
    const playerUrl = this.props.match.params.id;

    let lastSeen = date => {
      let lastSeenMonth = new Date(date).getMonth();
      let currentMonth = new Date().getMonth();
      let timeBeforeEvent = 0;
      while (currentMonth !== lastSeenMonth) {
        timeBeforeEvent++;
        lastSeenMonth++;
        if (lastSeenMonth > 12) {
          lastSeenMonth = 0;
        }
      }
      return timeBeforeEvent - 1;
    };

    return (
      <Fetch url={"http://localhost:5000/players/" + playerUrl}>
        {({ loading, error, data }) => {
          if (loading) return <span>Loading...</span>;
          if (error) return <span>Error loading</span>;

          return (
            <div className="row justify-content-center userPanel-box">
              <div className="userPanel-picture col-12 text-center">
                <img
                  src={data.picture}
                  className="profile-picture img-fluid"
                  alt={data.first_name + " " + data.last_name}
                />
              </div>
              <div className="userPanel-userInfos col-lg-12 text-center align-self-center">
                <h2>{data.first_name + " " + data.last_name}</h2>
                <p>Works at {data.company}</p>
                <p>Lives in {data.city_name}</p>
                <p>Last seen : {lastSeen(data.last_seen)} months</p>
              </div>
              <div className="userPanel-userStats col-4 text-center m-auto">
                <h2>{data.total_friends} Friends</h2>
                <div className="stats-separator" />
                <h2>{data.total_events} Events</h2>
              </div>
            </div>
          );
        }}
      </Fetch>
    );
  }
}

export default UserPanel;
