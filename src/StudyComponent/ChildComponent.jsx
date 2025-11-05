import React from "react";
import { Button } from "reactstrap";

const ChildComponent = (props) => {
  return (
    <div>
      <Button onClick={() => props.greetHandler("Child")}> Greet Parent</Button>
    </div>
  );
};

export default ChildComponent;
