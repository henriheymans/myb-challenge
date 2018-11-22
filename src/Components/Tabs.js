import React, { Fragment, Component } from "react";
import UpcomingEvents from "./UpcomingEvents";
import FriendsTab from "./FriendsTab";
import TabBar from "./TabBar";

class Tabs extends Component {
  state = {
    activeTab: ""
  };

  selectActiveTab = tabToActivate => {
    let activeTab = { ...this.state };
    activeTab = tabToActivate;
    this.setState({ activeTab });
  };

  render() {
    const { children } = this.props;
    // If Active tab is whatever else than "Friends", show Upcoming Events
    let tabReturned = "";
    if (this.state.activeTab === "") {
      tabReturned = <UpcomingEvents />;
      this.setState({ activeTab: "Upcoming Events" });
    } else if (this.state.activeTab === "Friends") {
      tabReturned = <FriendsTab />;
    } else {
      tabReturned = <UpcomingEvents />;
    }

    return (
      <Fragment>
        <TabBar
          activePageTitle={this.state.activeTab}
          selectActiveTab={this.selectActiveTab}
          children={children}
        />
        {tabReturned}
      </Fragment>
    );
  }
}

export default Tabs;
