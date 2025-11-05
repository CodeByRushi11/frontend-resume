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
// import React, { useState } from "react";
// import Select from "react-select";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { RangeDatePicker } from "react-google-flight-datepicker";
// import "react-google-flight-datepicker/dist/main.css";
// import avtar from "./th.jpeg";
// import {
//   Container,
//   Row,
//   Col,
//   FormGroup,
//   Label,
//   Input,
//   Button,
// } from "reactstrap";

// const MyDetails = () => {
//   const [state, setState] = useState({
//     firstName: "",
//     email: "",
//     selectDesignation: null,
//     empType: null,
//     dateOfBirth: null,
//     dateOfJoin: null,
//     address: "",
//     localAddress: "",
//     saveInfo: [],
//     startDate: null,
//     endDate: null,
//     base64: [],
//     base64new: [],
//     mobile_number: "",
//     alternate_number: "",
//     mobile_number_error: "",
//     email_error: "",
//     invalid_input: false,
//     message: "",
//   });

//   const saveDetails = () => {
//     const {
//       firstName,
//       email,
//       selectDesignation,
//       empType,
//       dateOfBirth,
//       dateOfJoin,
//       address,
//       localAddress,
//       saveInfo,
//       startDate,
//       endDate,
//       base64,
//       base64new,
//       mobile_number,
//       alternate_number,
//     } = state;

//     const d = new Date(dateOfBirth).toISOString();
//     const d2 = new Date(dateOfJoin).toISOString();

//     const array = saveInfo;
//     const obj = {
//       first_name: firstName,
//       email_id: email,
//       select_Designation: selectDesignation,
//       emp_Type: empType,
//       mo_no: mobile_number,
//       al_mono: alternate_number,
//       date_of_Birth: d.split("T")[0],
//       date_of_join: d2.split("T")[0],
//       permanant_address: address,
//       local_adress: localAddress,
//       startDate: new Date(startDate),
//       endDate: new Date(endDate),
//       base_64: base64,
//       base64_new: base64new,
//     };

//     array.push(obj);
//     setState({ ...state, saveInfo: array });
//   };

//   const designationChange = (selectDesignation) => {
//     setState({ ...state, selectDesignation });
//   };

//   const empChange = (empType) => {
//     setState({ ...state, empType });
//   };

//   const onDateChange = (startDate, endDate) => {
//     setState({ ...state, startDate, endDate });
//   };

//   const startDateSelect1 = (date) => {
//     setState({ ...state, dateOfJoin: date });
//   };

//   const startDateSelect = (date) => {
//     setState({ ...state, dateOfBirth: date });
//   };

//   const UploadImg = async (event) => {
//     const files = event.target.files;
//     if (files && files.length > 0) {
//       const newImagesPromises = Array.from(files).map((file) =>
//         convertToBase64(file)
//       );
//       const newImages = await Promise.all(newImagesPromises);
//       setState({ ...state, base64: newImages });
//     }
//   };

//   const convertToBase64 = (image) => {
//     return new Promise((res) => {
//       const reader = new FileReader();
//       reader.addEventListener("load", () => {
//         res({ profile_image: reader.result });
//       });
//       reader.readAsDataURL(image);
//     });
//   };

//   const UploadImg1 = async (event) => {
//     const files = event.target.files;
//     if (files && files.length > 0) {
//       const newImagesPromises1 = Array.from(files).map((file) =>
//         convertToBase641(file)
//       );
//       const newImages1 = await Promise.all(newImagesPromises1);
//       setState({ ...state, base64new: newImages1 });
//     }
//   };

//   const convertToBase641 = (image) => {
//     return new Promise((res) => {
//       const reader = new FileReader();
//       reader.addEventListener("load", () => {
//         res({ profile_image1: reader.result });
//       });
//       reader.readAsDataURL(image);
//     });
//   };

//   const validateNumber = (input) => {
//     const re = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
//     return re.test(input);
//   };

//   const validateEmail = (input) => {
//     const validRegex =
//       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     return validRegex.test(input);
//   };

//   const checkNumber = () => {
//     const { mobile_number } = state;
//     const isValid = mobile_number && validateNumber(mobile_number);
//     setState({
//       ...state,
//       mobile_number_error: isValid ? "" : "Invalid mobile number",
//     });
//     return isValid;
//   };

//   const AlcheckNumber = () => {
//     const { alternate_number } = state;
//     const isValid = alternate_number && validateNumber(alternate_number);
//     setState({
//       ...state,
//       mobile_number_error: isValid ? "" : "Invalid mobile number",
//     });
//     return isValid;
//   };

//   const checkEamil = () => {
//     const { email } = state;
//     const isValid = email && validateEmail(email);
//     setState({ ...state, email_error: isValid ? "" : "Invalid Email ID" });
//     return isValid;
//   };

//   const ValidationData = () => {
//     const {
//       firstName,
//       selectDesignation,
//       email,
//       empType,
//       alternate_number,
//       mobile_number,
//       address,
//       localAddress,
//     } = state;

//     if (
//       !firstName ||
//       !selectDesignation ||
//       !email ||
//       !empType ||
//       !mobile_number ||
//       !alternate_number ||
//       !address ||
//       !localAddress
//     ) {
//       setState({
//         ...state,
//         invalid_input: true,
//         message: "Please fill all the fields",
//       });
//     } else {
//       setState({ ...state, invalid_input: false, message: "" });
//     }
//   };

//   const renderCustomHeader = ({
//     date,
//     changeYear,
//     changeMonth,
//     decreaseMonth,
//     increaseMonth,
//     prevMonthButtonDisabled,
//     nextMonthButtonDisabled,
//   }) => {
//     const years = Array.from(
//       { length: new Date().getFullYear() - 1990 + 1 },
//       (_, i) => 1990 + i
//     );
//     const months = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];

//     return (
//       <div style={{ margin: 10, display: "flex", justifyContent: "center" }}>
//         <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
//           {"<"}
//         </button>
//         <select
//           value={date.getFullYear()}
//           onChange={({ target: { value } }) => changeYear(value)}
//         >
//           {years.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//         <select
//           value={months[date.getMonth()]}
//           onChange={({ target: { value } }) =>
//             changeMonth(months.indexOf(value))
//           }
//         >
//           {months.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//         <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
//           {">"}
//         </button>
//       </div>
//     );
//   };

//   const designationOption = [
//     { value: "Excecutive", label: "Digital Marketing Executive" },
//     { value: "frontend", label: "Frontend Developer" },
//     { value: "backend", label: "Backend Developer" },
//     { value: "Php", label: "Php Developer" },
//     { value: "Python", label: "Python Developer" },
//     { value: "java", label: "Java Developer" },
//   ];

//   const empOption = [
//     { value: "TR", label: "Trainee" },
//     { value: "PT", label: "Part Time" },
//     { value: "FT", label: "Full Time" },
//   ];

//   return (
//     <div>
//       <Container>
//         <h2 className="myDetails">My Details</h2>
//         <Container>
//           <p>Avatar</p>
//           <div>
//             <img
//               className="img2"
//               src={
//                 state.base64new.length > 0
//                   ? state.base64new[0].profile_image1
//                   : avtar
//               }
//               alt="imgnew"
//             />
//           </div>
//           <input
//             id="inputGroupFile02"
//             type="file"
//             className="proImg"
//             accept="image/*"
//             onChange={UploadImg1}
//           />
//           <label
//             className="input-group-text"
//             htmlFor="inputGroupFile02"
//             className="proImg"
//           >
//             <i className="fa-solid fa-pen-to-square"></i>
//           </label>
//         </Container>
//         <Row>
//           <Col md={4}>
//             <FormGroup>
//               <Label for="firstName">Name</Label>
//               <Label>First Name</Label>
//               <Input
//                 type="text"
//                 placeholder="Enter First Name"
//                 invalid={!state.firstName && state.invalid_input}
//                 onChange={(e) =>
//                   setState({ ...state, firstName: e.target.value })
//                 }
//               />
//             </FormGroup>
//           </Col>

//           <Col md={4}>
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 type="text"
//                 placeholder="Email ID"
//                 invalid={!state.email && state.invalid_input}
//                 onChange={(e) => setState({ ...state, email: e.target.value })}
//               />
//             </FormGroup>
//           </Col>

//           <Col md={4}>
//             <FormGroup>
//               <Label for="designation">Designation</Label>
//               <Select
//                 isMulti
//                 value={state.selectDesignation}
//                 onChange={(e) => setState({ ...state, selectDesignation: e })}
//                 options={designationOption}
//                 placeholder="select designation..."
//                 className={
//                   state.invalid_input && !state.selectDesignation
//                     ? "InvalidSelect"
//                     : ""
//                 }
//               />
//             </FormGroup>
//           </Col>

//           <Col md={4}>
//             <FormGroup>
//               <Label for="empType">Employee Type </Label>
//               <Select
//                 value={state.empType}
//                 onChange={(e) => setState({ ...state, empType: e })}
//                 options={empOption}
//                 placeholder="select type..."
//                 className={
//                   state.invalid_input && !state.empType ? "InvalidSelect" : ""
//                 }
//               />
//             </FormGroup>
//           </Col>

//           <Col md={4}>
//             <FormGroup>
//               <Label for="moN0.">Mobile Number </Label>
//               <Input
//                 type="text"
//                 placeholder="Mobile Number"
//                 value={state.mobile_number}
//                 onChange={(e) =>
//                   setState({ ...state, mobile_number: e.target.value })
//                 }
//                 onBlur={checkNumber}
//                 invalid={!state.mobile_number && state.invalid_input}
//               />
//               {state.mobile_number_error && (
//                 <div className="invalid-feedback-test">
//                   {state.mobile_number_error}
//                 </div>
//               )}
//             </FormGroup>
//           </Col>

//           <Col md={4}>
//             <FormGroup>
//               <Label for="altmoN0."> Alternate Mobile Number </Label>
//               <Input
//                 type="text"
//                 placeholder="Mobile Number"
//                 value={state.alternate_number}
//                 onChange={(e) =>
//                   setState({ ...state, alternate_number: e.target.value })
//                 }
//                 onBlur={AlcheckNumber}
//                 invalid={!state.alternate_number && state.invalid_input}
//               />
//               {state.mobile_number_error && (
//                 <div className="invalid-feedback-test">
//                   {state.mobile_number_error}
//                 </div>
//               )}
//             </FormGroup>
//           </Col>

//           <Col md={4}>
//             <FormGroup>
//               <Label for="addrees"> Permanant Address</Label>
//               <Input
//                 type="text"
//                 value={state.address}
//                 onChange={(e) =>
//                   setState({ ...state, address: e.target.value })
//                 }
//                 placeholder="address..."
//                 invalid={!state.address && state.invalid_input}
//               />
//             </FormGroup>
//           </Col>

//           <Col md={4}>
//             <FormGroup>
//               <Label for="localAddress"> Local Address</Label>
//               <Input
//                 type="text"
//                 value={state.localAddress}
//                 onChange={(e) =>
//                   setState({ ...state, localAddress: e.target.value })
//                 }
//                 placeholder=" local address..."
//                 invalid={!state.localAddress && state.invalid_input}
//               />
//             </FormGroup>
//           </Col>

//           <Col md={4}>
//             <Label for="dateOfBirth">Date Of Birth</Label>
//             <FormGroup>
//               <DatePicker
//                 className="dateOFBirth"
//                 placeholderText="Select Date"
//                 selected={state.dateOfBirth}
//                 renderCustomHeader={renderCustomHeader}
//                 onChange={(date) => startDateSelect(date)}
//                 dateFormat="dd-MM-yyyy"
//               />
//             </FormGroup>
//           </Col>

//           <Col md={4}>
//             <Label for="dateOfJoining"> Date of Joining </Label>
//             <FormGroup>
//               <DatePicker
//                 className="dateofJoin"
//                 placeholderText="Select Date"
//                 selected={state.dateOfJoin}
//                 onChange={(date) => startDateSelect1(date)}
//                 dateFormat="dd-MM-yyyy"
//               />
//             </FormGroup>
//           </Col>

//           <Col md={4}>
//             <FormGroup>
//               <Label for="exampleText">Work Time Duration</Label>
//               <RangeDatePicker
//                 startDate={state.startDate}
//                 endDate={state.endDate}
//                 onChange={(startDate, endDate) =>
//                   onDateChange(startDate, endDate)
//                 }
//                 minDate={new Date(1900, 0, 1)}
//                 maxDate={new Date(2100, 0, 1)}
//                 dateFormat="DD-MM-YYYY"
//                 startDatePlaceholder="Start Date"
//                 endDatePlaceholder="End Date"
//                 disabled={false}
//                 className="my-own-class-name"
//                 startWeekDay="monday"
//               />
//             </FormGroup>
//           </Col>

//           <Col md={4}>
//             <FormGroup>
//               <Label for="exampleText" className="uploadlabel">
//                 Upload Documents{" "}
//               </Label>
//               <Input
//                 type="file"
//                 multiple
//                 onChange={UploadImg}
//                 className="uploadlabel"
//               />
//               {state.base64.length > 0 &&
//                 state.base64.map((value, index) => (
//                   <img
//                     className="img1"
//                     src={value.profile_image}
//                     alt="imgnew"
//                     key={index}
//                   />
//                 ))}
//             </FormGroup>
//           </Col>
//         </Row>

//         <Input
//           className="form-check-input mt-0"
//           type="checkbox"
//           value=""
//           aria-label="Checkbox for following text input"
//           color="success"
//           onClick={ValidationData}
//         />
//         <label htmlFor="form-check-input mt-0">Check </label>
//         <br />
//         {state.message && (
//           <div className="invalid-feedback-test">{state.message}</div>
//         )}
//         <Button className="btnSave" color="primary" onClick={saveDetails}>
//           Save
//         </Button>
//       </Container>
//     </div>
//   );
// };

// export default MyDetails;

// export default ResgistrationForm;
// import Select from "react-select";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { RangeDatePicker } from "react-google-flight-datepicker";
// import "react-google-flight-datepicker/dist/main.css";
// import avtar from "./th.jpeg";
//   // Arrow Function
//   saveDetails = () => {
//     const {
//       firstName,
//       email,
//       selectDesignation,
//       empType,
//       dateOfBirth,
//       dateOfJoin,
//       address,
//       localAddress,
//       saveInfo,
//       startDate,
//       endDate,
//       base64,
//       base64new,
//       mobile_number,
//       alternate_number,
//     } = this.state;
//     // ISO string
//     const d = new Date(dateOfBirth).toISOString();
//     console.log(d.split("T")[0]);
//     //Iso string DateOF Joining
//     const d2 = new Date(dateOfJoin).toISOString();
//     console.log(d2.split("T")[0]);
//     const array = saveInfo;
//     const obj = {
//       first_name: firstName,
//       email_id: email,
//       select_Designation: selectDesignation,
//       emp_Type: empType,
//       mo_no: mobile_number,
//       al_mono: alternate_number,
//       date_of_Birth: d.split("T")[0],
//       date_of_join: d2.split("T")[0],
//       permanant_address: address,
//       local_adress: localAddress,
//       startDate: new Date(startDate),
//       endDate: new Date(endDate),
//       base_64: base64,
//       base64_new: base64new,
//     };
//     array.push(obj);
//     console.log("array=----------------", array);
//     this.setState({
//       saveInfo: array,
//     });
//   };
//   //   select designation mutltiple select
//   designationChange = (selectDesignation) => {
//     this.setState({ selectDesignation }, () =>
//       console.log(`Option selected:`, this.state.selectDesignation)
//     );
//   };
//   //   single select emplpoyyee type
//   empChange = (empType) => {
//     this.setState({ empType }, () =>
//       console.log(`Option selected :`, this.state.empType)
//     );
//   };

//   startDateSelect = (date) => {
//     console.log("date====", date);
//     this.setState({
//       dateFormat: new Date(date),
//     });
//   };

//   onDateChange = (startDate, endDate) => {
//     console.log("startDate,endDate====", startDate, endDate);
//     this.setState({
//       startDate: new Date(startDate),
//       endDate: new Date(endDate),
//     });
//   };

//   // Date of join
//   startDateSelect1 = (date) => {
//     console.log("date====", date);
//     this.setState({
//       dateOfJoin: new Date(date),
//     });
//   };
//   //  Date of birth
//   startDateSelect = (date) => {
//     console.log("date====", date);
//     this.setState({
//       dateOfBirth: new Date(date),
//     });
//   };

//   // Upload File code
//   UploadImg = async (event) => {
//     console.log("Imgg", event.target.files);
//     var my_file = event.target.files;

//     if (event.target.files && event.target.files.length > 0) {
//       const newImagesPromises = [];
//       for (let i = 0; i < event.target.files.length; i++) {
//         newImagesPromises.push(this.convertToBase64(event.target.files[i]));
//       }
//       const newImages = await Promise.all(newImagesPromises);
//       this.setState({
//         base64: newImages,
//       });

//       setTimeout(() => {
//         console.log("this is the first message", this.state.base64);
//       }, 1000);
//     }
//   };

//   convertToBase64 = (image) => {
//     console.log(image);
//     return new Promise((res) => {
//       const reader = new FileReader();
//       console.log("reader===============", reader);
//       const { type, name, size } = image;
//       reader.addEventListener("load", () => {
//         res({
//           profile_image: reader.result,
//         });
//       });
//       reader.readAsDataURL(image);
//     });
//   };
//   // Upload File code
//   UploadImg1 = async (event) => {
//     console.log("Imgg", event.target.files);
//     var my_file = event.target.files;

//     if (event.target.files && event.target.files.length > 0) {
//       const newImagesPromises1 = [];
//       for (let i = 0; i < event.target.files.length; i++) {
//         newImagesPromises1.push(this.convertToBase641(event.target.files[i]));
//       }
//       const newImages1 = await Promise.all(newImagesPromises1);
//       this.setState({
//         base64new: newImages1,
//       });

//       setTimeout(() => {
//         console.log("this is the first message", this.state.base64);
//       }, 1000);
//     }
//   };

//   convertToBase641 = (image) => {
//     console.log(image);
//     return new Promise((res) => {
//       const reader = new FileReader();
//       console.log("reader===============", reader);
//       const { type, name, size } = image;
//       reader.addEventListener("load", () => {
//         res({
//           profile_image1: reader.result,
//         });
//       });
//       reader.readAsDataURL(image);
//     });
//   };

//   // validation Input feild
//   validateNumber = (input) => {
//     var re = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;

//     return re.test(input);
//   };
//   validateEmail = (input) => {
//     var validRegex =
//       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     return validRegex.test(input);
//   };

//   checkNumber = () => {
//     const { mobile_number } = this.state;

//     const isValid = mobile_number && this.validateNumber(mobile_number);

//     this.setState({
//       mobile_number_error: isValid ? "" : "Invalid mobile number",
//     });

//     return isValid;
//   };

//   AlcheckNumber = () => {
//     const { alternate_number } = this.state;

//     const isValid = alternate_number && this.validateNumber(alternate_number);

//     this.setState({
//       mobile_number_error: isValid ? "" : "Invalid mobile number",
//     });

//     return isValid;
//   };

//   checkEamil = () => {
//     const { email } = this.state;

//     const isValid = email && this.validateNumber(email);

//     this.setState({
//       email_error: isValid ? "" : "Invalid Email ID",
//     });

//     return isValid;
//   };

//   ValidationData = () => {
//     const {
//       firstName,
//       selectDesignation,
//       email,
//       empType,
//       alternate_number,
//       mobile_number,
//       address,
//       localAddress,
//     } = this.state;

//     if (
//       firstName == "" ||
//       firstName == undefined ||
//       selectDesignation == "" ||
//       selectDesignation == undefined ||
//       email == "" ||
//       email == undefined ||
//       empType == "" ||
//       empType == undefined ||
//       mobile_number == "" ||
//       mobile_number == undefined ||
//       alternate_number == "" ||
//       alternate_number == undefined ||
//       address == "" ||
//       address == undefined ||
//       localAddress == "" ||
//       localAddress == undefined
//     ) {
//       this.setState({
//         invalid_input: true,
//         message: "Please fill all the feild",
//       });
//     } else {
//       this.setState({
//         invalid_input: false,
//         message: "",
//       });
//     }
//   };

//   //  select date of rbirth
//   setStartDate = (date) => {
//     this.setState({
//       dateOfBirth: date,
//     });
//   };

//   renderCustomHeader = ({
//     date,
//     changeYear,
//     changeMonth,
//     decreaseMonth,
//     increaseMonth,
//     prevMonthButtonDisabled,
//     nextMonthButtonDisabled,
//   }) => {
//     const years = Array.from(
//       { length: new Date().getFullYear() - 1990 + 1 },
//       (_, i) => 1990 + i
//     );
//     const months = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];

//     return (
//       <div
//         style={{
//           margin: 10,
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
//           {"<"}
//         </button>
//         <select
//           value={date.getFullYear()}
//           onChange={({ target: { value } }) => changeYear(value)}
//         >
//           {years.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>

//         <select
//           value={months[date.getMonth()]}
//           onChange={({ target: { value } }) =>
//             changeMonth(months.indexOf(value))
//           }
//         >
//           {months.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>

//         <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
//           {">"}
//         </button>
//       </div>
//     );
//   };

//   render() {
//     const designationOption = [
//       { value: "Excecutive", label: "Digital Marketing Executive" },
//       { value: "frontend", label: "Frontend Developer" },
//       { value: "backend", label: "Backend Developer" },
//       { value: "Php", label: "Php Developer" },
//       { value: "Python", label: "Python Developer" },
//       { value: "java", label: "Java Developer" },
//     ];

//     const empOption = [
//       { value: "TR", label: "Trainee" },
//       { value: "PT", label: "Part Time" },
//       { value: "FT", label: "Full Time" },
//     ];

//     return (
//       <div>
//         <Container>
//           <h2 className="myDetails">My Details</h2>
//           <Container>
//             <p>Avatar</p>
//             <div>
//               <img
//                 className="img2"
//                 src={
//                   this.state.base64new.length > 0
//                     ? this.state.base64new[0].profile_image1
//                     : avtar
//                 }
//                 alt="imgnew"
//               />
//             </div>
//             <input
//               id="inputGroupFile02"
//               type="file"
//               className="proImg"
//               accept="image/*"
//               onChange={this.UploadImg1}
//             />{" "}
//             <label
//               class="input-group-text"
//               for="inputGroupFile02"
//               className="proImg"
//             >
//               <i class="fa-solid fa-pen-to-square"></i>
//             </label>
//           </Container>
//           <Row>
//             <Col md={4}>
//               <FormGroup>
//                 <Label for="firstName">Name</Label>
//                 <Label>First Name</Label>
//                 <Input
//                   type="text"
//                   placeholder="Enter First Name"
//                   invalid={
//                     this.state.firstName == "" && this.state.invalid_input
//                   }
//                   onChange={(e) => {
//                     this.setState({
//                       firstName: e.target.value,
//                     });
//                   }}
//                 />
//               </FormGroup>
//             </Col>

//             <Col md={4}>
//               <FormGroup>
//                 <Label for="email">Email</Label>
//                 <Input
//                   type="text"
//                   placeholder="Email ID"
//                   invalid={this.state.email == "" && this.state.invalid_input}
//                   onChange={(e) => {
//                     this.setState({
//                       email: e.target.value,
//                     });
//                   }}
//                 />
//               </FormGroup>
//             </Col>

//             <Col md={4}>
//               <FormGroup>
//                 <Label for="designation">Designation</Label>
//                 <Select
//                   isMulti
//                   value={this.state.selectDesignation}
//                   onChange={(e) => {
//                     this.setState({
//                       selectDesignation: e,
//                     });
//                   }}
//                   options={designationOption}
//                   placeholder="select designation..."
//                   className={
//                     this.state.invalid_input &&
//                     this.state.selectDesignation == ""
//                       ? "InvalidSelect"
//                       : ""
//                   }
//                 />
//               </FormGroup>
//             </Col>
//             <Col md={4}>
//               <FormGroup>
//                 <Label for="empType">Employee Type </Label>
//                 <Select
//                   value={this.state.empType}
//                   onChange={(e) => {
//                     this.setState({
//                       empType: e,
//                     });
//                   }}
//                   options={empOption}
//                   placeholder="select type..."
//                   className={
//                     this.state.invalid_input && this.state.empType == ""
//                       ? "InvalidSelect"
//                       : ""
//                   }
//                 />
//               </FormGroup>
//             </Col>

//             <Col md={4}>
//               <FormGroup>
//                 <Label for="moN0.">Mobile Number </Label>
//                 <Input
//                   type="text"
//                   placeholder="Mobile Number"
//                   inva={this.state.mobile_number
//                     .replace(/[^0-9.]/g, "")
//                     .replace(/(\..*?)\..*/g, "$1")
//                     .replace(/^0[^.]/, "0")}
//                   onChange={(e) => {
//                     this.setState({
//                       mobile_number: e.target.value,
//                     });
//                   }}
//                   onBlur={this.checkNumber}
//                   invalid={
//                     this.state.mobile_number == "" && this.state.invalid_input
//                   }
//                 />
//                 {this.state.mobile_number_error ? (
//                   <div className="invalid-feedback-test">
//                     {this.state.mobile_number_error}
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </FormGroup>
//             </Col>

//             <Col md={4}>
//               <FormGroup>
//                 <Label for="altmoN0."> Alternate Mobile NUmber </Label>

//                 <Input
//                   type="text"
//                   placeholder="Mobile Number"
//                   inva={this.state.alternate_number
//                     .replace(/[^0-9.]/g, "")
//                     .replace(/(\..*?)\..*/g, "$1")
//                     .replace(/^0[^.]/, "0")}
//                   onChange={(e) => {
//                     this.setState({
//                       alternate_number: e.target.value,
//                     });
//                   }}
//                   onBlur={this.AlcheckNumber}
//                   invalid={
//                     this.state.alternate_number == "" &&
//                     this.state.invalid_input
//                   }
//                 />
//                 {this.state.mobile_number_error ? (
//                   <div className="invalid-feedback-test">
//                     {this.state.mobile_number_error}
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </FormGroup>
//             </Col>

//             <Col md={4}>
//               <FormGroup>
//                 <Label for="addrees"> Permanant Address</Label>
//                 <Input
//                   type="text"
//                   value={this.state.address}
//                   onChange={(e) => this.setState({ address: e.target.value })}
//                   placeholder="address..."
//                   invalid={this.state.address == "" && this.state.invalid_input}
//                 />
//               </FormGroup>
//             </Col>

//             <Col md={4}>
//               <FormGroup>
//                 <Label for="localAddress"> Local Address</Label>

//                 <Input
//                   type="text"
//                   value={this.state.localAddress}
//                   onChange={(e) =>
//                     this.setState({ localAddress: e.target.value })
//                   }
//                   placeholder=" local address..."
//                   invalid={
//                     this.state.localAddress == "" && this.state.invalid_input
//                   }
//                 />
//               </FormGroup>
//             </Col>

//             <Col md={4}>
//               <Label for="dateOfBirth">Date Of Birth</Label>
//               <FormGroup>
//                 <DatePicker
//                   className="dateOFBirth"
//                   placeholderText="Select Date"
//                   selected={this.state.dateOfBirth}
//                   renderCustomHeader={this.renderCustomHeader}
//                   onChange={(date) => this.startDateSelect(date)}
//                   dateFormat="dd-MM-yyyy"
//                 />
//               </FormGroup>
//             </Col>

//             <Col md={4}>
//               <Label for="dateOfJoining"> Date of Joining </Label>
//               <FormGroup>
//                 <DatePicker
//                   className="dateofJoin"
//                   placeholderText="Select Date"
//                   selected={this.state.dateOfJoin}
//                   onChange={(date) => this.startDateSelect1(date)}
//                   dateFormat="dd-MM-yyyy"
//                 />
//               </FormGroup>
//             </Col>

//             <Col md={4}>
//               <FormGroup>
//                 <Label for="exampleText">Work Time Duration</Label>

//                 <RangeDatePicker
//                   startDate={this.state.startDate}
//                   endDate={this.state.endDate}
//                   onChange={(startDate, endDate) =>
//                     this.onDateChange(startDate, endDate)
//                   }
//                   minDate={new Date(1900, 0, 1)}
//                   maxDate={new Date(2100, 0, 1)}
//                   dateFormat="DD-MM-YYYY"
//                   startDatePlaceholder="Start Date"
//                   endDatePlaceholder="End Date"
//                   disabled={false}
//                   className="my-own-class-name"
//                   startWeekDay="monday"
//                 />
//               </FormGroup>
//             </Col>

//             <Col md={4}>
//               <FormGroup>
//                 <Label for="exampleText" className="uploadlabel">
//                   Upload Documents{" "}
//                 </Label>

//                 <Input
//                   type="file"
//                   multiple
//                   onChange={this.UploadImg}
//                   className="uploadlabel"
//                 />
//                 {this.state.base64.length > 0
//                   ? this.state.base64.map((value, index) => {
//                       return (
//                         <img
//                           className="img1"
//                           src={value.profile_image}
//                           alt="imgnew"
//                         />
//                       );
//                     })
//                   : ""}
//               </FormGroup>
//             </Col>
//           </Row>
//           {/* <Button
//             color="success"
//             onClick={() => {
//               this.ValidationData();
//             }}
//           >
//             Check
//           </Button> */}

//           <Input
//             class="form-check-input mt-0"
//             type="checkbox"
//             value=""
//             aria-label="Checkbox for following text input"
//             color="success"
//             onClick={() => {
//               this.ValidationData();
//             }}
//           />
//           <label for="form-check-input mt-0">Check </label>
//           <br></br>
//           {this.state.message && (
//             <div className="invalid-feedback-test">{this.state.message}</div>
//           )}
//           <Button
//             className="btnSave"
//             color="primary"
//             onClick={this.saveDetails}
//           >
//             Save
//           </Button>
//         </Container>
//       </div>
//     );
//   }
// }
