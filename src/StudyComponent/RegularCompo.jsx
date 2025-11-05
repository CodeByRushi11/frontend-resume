import React, { Component } from "react";

export class RegularCompo extends Component {
  render() {
    console.log("------------Regular Compo Render");

    return (
      <div>
        <h2>Regular Componenet {this.props.name}</h2>
      </div>
    );
  }
}

export default RegularCompo;
