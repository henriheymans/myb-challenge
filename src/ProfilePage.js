import React, { Component } from "react";
import "./ProfilePage.css";
import UserPanel from "./Components/UserPanel";
import TabBar from "./Components/TabBar";
import FriendsTab from "./Components/FriendsTab";
import UpcomingEvents from "./Components/UpcomingEvents";
class ProfilePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <UserPanel />
        <TabBar />
        <FriendsTab />
        <UpcomingEvents />
      </div>
    );
  }
}

export default ProfilePage;
