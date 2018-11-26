import React from "react";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Redwan" };
  }
  render() {
    return <div>{"this is a video page"}</div>;
  }
}
export default Video;
