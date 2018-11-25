import React, { Component } from "react";
import "./ProfilePage.css";
import FriendsTab from "./Components/FriendsTab";
import UpcomingEvents from "./Components/UpcomingEvents";
import Tabs from "./Components/Tabs";
import UserPanel from "./Components/UserPanel";
class ProfilePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <UserPanel />
        <Tabs>
          <FriendsTab title="Friends" />
          <UpcomingEvents title="Upcoming Events" />
        </Tabs>
      </div>
    );
  }
}

export default ProfilePage;
