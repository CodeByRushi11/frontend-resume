import React, { Component } from "react";

export default class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rushikesh",
    };
    console.log("Lifecycle B Constuctor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle B getDerivedFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCyle B componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycle B should Componemt update");
    return true;
  }
  getSnapshotBeforeUpdate(precProps, preState) {
    console.log("Lifecycle B getSnapShotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycle B componentDidUpdate");
  }
  rend;
  render() {
    console.log("LifeCycle B Render");

    return (
      <div>
        <h5>LifeCyle B</h5>
      </div>
    );
  }
}
