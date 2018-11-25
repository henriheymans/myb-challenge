import React, { Component } from "react";

class Fetch extends Component {
  state = {
    loading: true,
    error: false,
    data: []
  };
  componentWillMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({ data, loading: false }))
      .catch(err => this.setState({ loading: false, error: true }));
  }
  render() {
    return (
      <div>
        {this.props.children({
          ...this.props,
          ...this.state
        })}
      </div>
    );
  }
}

export default Fetch;
