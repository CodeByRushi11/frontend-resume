// Methods as props
import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent = (ChildName) => {
    alert(`Hello ${this.state.parentName} from ${ChildName}`);
  };

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}
