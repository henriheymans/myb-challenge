import React, { Component } from "react";
import "./ProfilePage.css";
import UserPanel from "./Components/UserPanel";
import FriendsTab from "./Components/FriendsTab";
import UpcomingEvents from "./Components/UpcomingEvents";
import Tabs from "./Components/Tabs";
class ProfilePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <UserPanel />
        <Tabs>
          <UpcomingEvents title="Upcoming Events" />
          <FriendsTab title="Friends" />
        </Tabs>
      </div>
    );
  }
}

export default ProfilePage;
