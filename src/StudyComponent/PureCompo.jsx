import React, { PureComponent } from "react";

class PureCompo extends PureComponent {
  render() {
    console.log("------------Pure Compo Render");

    return (
      <div>
        <h2>Pure Component {this.props.name}</h2>
      </div>
    );
  }
}

export default PureCompo;
