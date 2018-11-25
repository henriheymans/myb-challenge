import React, { Component } from "react";
import "./FriendsTab.css";
import Fetch from "./Fetch";
class FriendsTab extends Component {
  render() {
    return (
      <Fetch url="http://localhost:5000/players/1/friends">
        {({ loading, error, data }) => {
          if (loading) return <span>Loading...</span>;
          if (error) return <span>Error loading</span>;

          const friends = Object.keys(data).map(friend => (
            <div
              key={data[friend].id}
              className="item-friend col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6"
            >
              <img
                className="img-fluid img-responsive item-friend-picture"
                src={data[friend].picture}
                alt={data[friend].first_name + " " + data[friend].last_name}
              />
              <div className="item-friend-infos">
                <p>
                  <strong>
                    {data[friend].last_name + " " + data[friend].first_name}
                  </strong>
                </p>
                <p>{data[friend].total_friends} Friends</p>
                <p>{data[friend].total_events} Events</p>
              </div>
            </div>
          ));

          return (
            <div className="row justify-content-center all-friends">
              {friends}
            </div>
          );
        }}
      </Fetch>
    );
  }
}

export default FriendsTab;
