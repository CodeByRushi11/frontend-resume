import React, { Fragment, use, useState } from "react";
import "./ResgistrationForm.scss";
import { Button, Container, FormGroup, Input, Label, Row } from "reactstrap";
const ResgistrationForm = () => {
  const [formInfo, setFormInfo] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [selectDesignation, setSelectDesigination] = useState("");
  const [empType, setEmpType] = useState("");
  const [dob, setDob] = useState(new Data());
  const [doj, setDoj] = useState(new Date());
  const [address, setAdderss] = useState("");
  const [localAddress, setLocalAddress] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [base64, setBase64] = useState([]);
  const [base64New, setBase64New] = useState([]);
  const [moNo, setMoNo] = useState("");
  const [alNo, setAlNo] = useState("");
  const [email, setEmail] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //   Handle Function to save Information
  const handleSave = () => {
    console.log("Saved Information");
  };

  return (
    <Fragment>
      <Container>
        <h2>My Details</h2>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label>
                Name <span style={{ color: "red" }}>*</span>
              </Label>
              <Input
                type="text"
                placeholder="Enter First Name"
                // invalid={this.state.firstName == "" && this.state.invalid_input}
                // onChange={(e) => {
                //   this.setState({
                //     firstName: e.target.value,
                //   });
                // }}
              />
            </FormGroup>
          </Col>
          <Col md={6}></Col>
          <Button color="success" onClick={handleSave}>
            Save
          </Button>
        </Row>
      </Container>
    </Fragment>
  );
};
export default ResgistrationForm;
