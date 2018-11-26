import React from "react";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Redwan" };
  }
  render() {
    return <div>{"Hello World This is an Event component"}</div>;
  }
}
export default Event;
