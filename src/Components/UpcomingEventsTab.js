import React, { Component } from "react";
import "./UpcomingEvents.css";
import Fetch from "./Fetch";
class UpcomingEvents extends Component {
  render() {
    const eventsUrl = this.props.match.params.id;

    let formatDate = date => {
      let formattedDate = new Date(date);
      const dayNames = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday"
      };
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let dateDay = dayNames[formattedDate.getDay()];
      return (
        dateDay +
        " " +
        formattedDate.getDate() +
        " " +
        monthNames[formattedDate.getMonth()] +
        " at " +
        formattedDate.getHours() +
        " : " +
        formattedDate.getMinutes()
      );
    };

    let monthLeft = date => {
      let eventMonth = new Date(date).getMonth();
      let currentMonth = new Date().getMonth();
      let timeBeforeEvent = 0;
      while (currentMonth !== eventMonth) {
        timeBeforeEvent++;
        currentMonth++;
        if (currentMonth > 12) {
          currentMonth = 0;
        }
      }
      return timeBeforeEvent - 1;
    };

    return (
      <div className="events-tab">
        <div className="col-12 text-center">
          <h2 className="page-title">Upcoming Events</h2>
          <div className="page-separator m-auto" />
        </div>
        <Fetch
          url={"http://localhost:5000/players/" + eventsUrl + "/lastEvents"}
        >
          {({ loading, error, data }) => {
            if (loading) return <span>Loading...</span>;
            if (error) return <span>Error loading</span>;

            const lastEvents = Object.keys(data).map(event => (
              <div
                key={event}
                className="item-event col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6"
              >
                <p>In {monthLeft(data[event].date)} months</p>
                <h2>{data[event].name}</h2>
                <p>{formatDate(data[event].date)}</p>
                <p>
                  <strong>{data[event].participants.length}</strong>{" "}
                  Participants
                </p>
              </div>
            ));

            return (
              <div className="row justify-content-center all-events">
                {lastEvents}
              </div>
            );
          }}
        </Fetch>
      </div>
    );
  }
}

export default UpcomingEvents;
