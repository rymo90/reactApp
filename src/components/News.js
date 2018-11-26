import React from "react";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Redwan" };
  }
  render() {
    return <div>{"Hello World !!! This is an News component"}</div>;
  }
}
export default News;
