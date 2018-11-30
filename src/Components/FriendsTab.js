import React from "react";
import "./FriendsTab.css";
import Fetch from "./Fetch";
import { Link } from "react-router-dom";
const FriendsTab = props => {
  const friendsUrl = props.match.params.id;
  return (
    <div className="friends-tab">
      <div className="col-12 text-center">
        <h2 className="page-title">Friends</h2>
        <div className="page-separator m-auto" />
      </div>
      <div className="all-friends">
        <Fetch url={"http://localhost:5000/players/" + friendsUrl + "/friends"}>
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
                  <div className="friend-stats">
                    <p>{data[friend].total_friends} Friends</p>
                    <p>{data[friend].total_events} Events</p>
                  </div>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/players/${data[friend].id}`}
                  >
                    <p className="friend-link">See profile</p>
                  </Link>
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
      </div>
    </div>
  );
};

export default FriendsTab;
