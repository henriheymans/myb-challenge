import React, { Component } from "react";
import "./ProfilePage.css";
import FriendsTab from "./Components/FriendsTab";
import UpcomingEventsTab from "./Components/UpcomingEventsTab";
import TabBar from "./Components/TabBar";
import UserPanel from "./Components/UserPanel";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
class ProfilePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/players/1/upcoming" />
            <Redirect exact from="/players/:id" to="/players/:id/upcoming" />
            <Route
              path="/players/:id/upcoming"
              render={props => (
                <div>
                  <UserPanel {...props} />
                  <TabBar />
                  <UpcomingEventsTab {...props} />
                </div>
              )}
            />

            <Route
              path="/players/:id/friends"
              render={props => (
                <div>
                  <UserPanel {...props} />
                  <TabBar />
                  <FriendsTab {...props} />
                </div>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default ProfilePage;
