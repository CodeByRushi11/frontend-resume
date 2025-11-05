// // Functional Component 👇 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// import React from "react";
// const ReactPractice = () => {
//   return (
//     <div>
//       <h1>Hellow Everyone</h1>
//     </div>
//   );
// };
// export default ReactPractice;
// Class Componenet 👇  🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// import React, { Component } from "react";
// export default class ReactPractice extends Component {
//   render() {
//     // In this render method to render some html content
//     return (
//       <div>
//         <h1> Hello !,This is an class componenet </h1>
//       </div>
//     );
//   }
// }
// JSX =Javascript extension 👇 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// import React from "react";
// const ReactPractice = () => {
//   // return (
//   //   <div>
//   //     <h4>Writing html code using jsx</h4>
//   //   </div>
//   // );
//   return React.createElement(
//     "div",
//     { className: "className" }, //second pramater we add class and id
//     "Writing Html code without Jsx",
//     React.createElement("h1", null, "Inside Another Html")
//   ); //Its Take Three Parameter
//   // second attribute is optinal or it is id and class
// };
// export default ReactPractice;
//  Props In React👇  🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// Props are imutable and they cnanot chanage
// import React from "react";
//This is Parent Component
// const ReactPractice = (props) => {
//   console.log("Props Value", props);
//   return (
//     <div>
//       <h1>
//         Hello Everyone, My Name {props.name} and hero name is {props.heroName}
//         {/* access props using Class  :this.props */}

//       </h1>
//       {props.children}
//     </div>
//   );
// };
// export default ReactPractice;
//   Access props Name using this.props name,this keyowrd reserved in class componenet to access props
// import React, { Component } from "react";
// export default class ReactPractice extends Component {
//   render() {
//     return (
//       <div>
//         <h3>
//           My name is {this.props.name} and my hero is {this.props.heroName}
//         </h3>
//       </div>
//     );
//   }
// }
// State 👇  🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// import React, { Component } from "react";
// import { Button } from "reactstrap";
// how to use state in class componenet
// export default class ReactPractice extends Component {
//   constructor() {
//     super();
//     this.state = {
//       message: "Welcome Visiter",
//     };
//   }
//   chnageMessage = () => {
//     this.setState({
//       message: "Thank you for Suscribing",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//         <Button onClick={() => this.chnageMessage()}>Suscribe</Button>
//       </div>
//     );
//   }
// }
// how to use state in functinal componenet
// import React, { useState } from "react";
// import { Button } from "reactstrap";
// const ReactPractice = () => {
//   const [message, setMessage] = useState("Welcome User");y
//   const handleChange = () => {
//     setMessage("Thanks for Suscribing");
//     console.log("Thanks for Suscribing");
//   };
//   return (
//     <div>
//       <h1>{message}</h1>
//       <Button onClick={handleChange}>Suscribed</Button>
//     </div>
//   );
// };
// export default ReactPractice;
// setState 👇  🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
//here i explain using counter
// import React, { Component } from "react";
// import { Button } from "reactstrap";

// class ReactPractice extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }
//   handleIncremenet() {
//     // this.state.count = this.state.count + 1; ❌  <- this ia wrong way
//     // Note 1🗒️=Never modify state directly instead use setstate
//     // Note 2:setSate has two parameter
//     // this.setState(
//     //   {
//     //     count: this.state.count + 1,
//     //   },
//     //   () => {
//     //     console.log("CallBack value", this.state.count); //callback function value statemnet
//     //   }
//     // );
//     // function use preState to calculate previous values
//     this.setState((preState) => ({
//       count: preState.count + 1,
//     }));
//     console.log(this.state.count); //synchronous console value
//   }
//   handleIncremenetFive() {
//     this.handleIncremenet();
//     this.handleIncremenet();
//     this.handleIncremenet();
//     this.handleIncremenet();
//     this.handleIncremenet();
//   }
//   render() {
//     return (
//       <div>
//         <h1>Count = {this.state.count}</h1>
//         <Button onClick={() => this.handleIncremenetFive()}>Incremenet</Button>
//       </div>
//     );
//   }
// }
// export default ReactPractice;
// import React, { useState } from "react";
// import { preconnect } from "react-dom";
// import { Button } from "reactstrap";

// const ReactPractice = () => {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => {
//     setCount((count) => count + 1);
//     // setCount((prevCount) => prevCount + 1);
//     console.log(count);
//   };
//   const handleIncrementByFive = () => {
//     handleIncrement();
//     handleIncrement();
//     handleIncrement();
//     handleIncrement();
//     handleIncrement();
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <Button onClick={handleIncrementByFive}>Incremenet</Button>
//     </div>
//   );
// };

// export default ReactPractice;
// Destrturing props and state 👇  🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// Two Ways od destrturing andin functinal componenet
// First Way
// import React from "react";
// const ReactPractice = ({ name, heroName }) => {
//   return (
//     <div>
//       <h1>
//         hello {name} my hero is {heroName}
//       </h1>
//     </div>
//   );
// };
// export default ReactPractice;
// Second Way
// import React from "react";
// const ReactPractice = (props) => {
//   const { name, heroName } = props;
//   return (
//     <div>
//       <h1>
//         hello {name} my hero is {heroName}
//       </h1>
//     </div>
//   );
// };
// export default ReactPractice;
// Two Ways od destrturing andin Class Componenet
// import React, { Component } from "react";

// export default class ReactPractice extends Component {
//   render() {
//     const { hero, heroName } = this.props;
//     // const { state1, state2 } = this.state;
//     // above is destrturing the state in react
//     return (
//       <div>
//         <h1>
//           hello {name} and my hero is {heroName}
//         </h1>
//       </div>
//     );
//   }
// }
// Event Handling   👇  🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// Event handling in Functinal  Componenet
// import React from "react";
// import { Button } from "reactstrap";

// const ReactPractice = () => {
//   const handleClick = () => {
//     console.log("Button Cliked");
//   };
//   return (
//     <div>
//       {/* if write handleClick() ,handleclik with parenthesis then it is function call not function to to clcik it already done its ffucntion
//       so use without parenthesis
//       in simple word onclcik is and function( ex: handleClick) and not a function call(ex : handleClick() )*/}
//       <Button onClick={handleClick}>Click</Button>
//     </div>
//   );
// };

// export default ReactPractice;
// Event handling in class component
// import React, { Component } from "react";
// import { Button, Form, Input } from "reactstrap";

// export default class ReactPractice extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       touched: false,
//       message: "Touched and background color tuned into blue",
//     };
//   }

//   handleClick = () => {
//     console.log("Button Click");
//   };
//   handleMouseEnter = () => {
//     console.log("Mouse Enter");
//   };
//   handlOnKeydown = (event) => {
//     console.log("key pressed", event.key);
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form Submited");
//   };
//   handleChange = (event) => {
//     console.log("Input Change", event.target.value);
//   };
//   handleFocus = () => {
//     console.log("Input Focus");
//   };
//   handleBlur = () => {
//     console.log("Input Focus");
//   };
//   handleDoubleClick = () => {
//     console.log("Double Click Button");
//   };
//   handleCopy = () => {
//     console.log("Copied!");
//   };
//   handlePaste = () => {
//     console.log("Pasted!");
//   };

//   handleCut = () => {
//     console.log("Cut!");
//   };
//   handleTouchStart = () => {
//     console.log("Touch Start");
//   };

//   handleTouchEnd = () => {
//     console.log("Touch End");
//   };
//   // for Mobile touched event
//   handleTouchStart = () => {
//     this.setState({ touched: true, message: "Touch Start" });
//   };

//   handleTouchEnd = () => {
//     this.setState({ touched: false, message: "Touch End" });
//   };
//   render() {
//     return (
//       <div>
//         {/* In class Acess Using This Keyword */}
//         <Button onClick={this.handleClick}>Click</Button>
//         <Button onMouseEnter={this.handleMouseEnter}>Hover Me </Button>
//         <Form onSubmit={this.handleSubmit}>
//           <Input
//             type="text "
//             placeholder="Type here"
//             onCopy={this.handleCopy}
//             onChange={this.handleChange}
//             onKeyDown={this.handlOnKeydown}
//             onFocus={this.handleFocus}
//             onBlur={this.handleBlur}
//             onPaste={this.handlePaste}
//             onCut={this.handleCut}
//           />
//           <Button type="Submit">Submit</Button>
//         </Form>
//         <Button onDoubleClick={this.handleDoubleClick}>Double Click</Button>
//         {/* foowing event for mobile event / Touch Event */}
//         <div
//           onTouchStart={this.handleTouchStart}
//           onTouchEnd={this.handleTouchEnd}
//           style={{
//             height: "200px",
//             background: this.state.touched ? "blue" : "red",
//             color: "#fff",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontSize: "1.5rem",
//           }}
//         >
//           {this.state.message}
//         </div>
//       </div>
//     );
//   }
// }
// Binding Event Handler  👇  🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// here is we bind function
// import React, { Component } from "react";
// import { Button } from "reactstrap";

// export default class ReactPractice extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message: "Hello",
//     };
//     // this.ClickHandler = this.ClickHandler.bind(this);
//     // this keyword use to bind event click handler
//   }
//   ClickHandler() {
//     this.setState(
//       {
//         message: "Good bye !",
//       },
//       () => {
//         console.log("Message Changed");
//       }
//     );
//   }
//   // To bind function use arrow function , if you noy use then i cause error
//   // and this is called binding event handler
//   ClickHandler = () => {
//     this.setState(
//       {
//         message: "Good bye !",
//       },
//       () => {
//         console.log("Message Changed");
//       }
//     );
//   };

//   render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>
//         <Button onClick={this.ClickHandler}>Click</Button>
//         {/* <Button onClick={this.ClickHandler}>Click</Button> */}
//       </div>
//     );
//   }
// }
//Methods as Props 👇  🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// import React, { Component } from "react";
// import ParentComponet from "./ParentComponet";

// export default class ReactPractice extends Component {
//   render() {
//     return (
//       <div>
//         <ParentComponet />
//       </div>
//     );
//   }
// }
//Conditinal Rendering 👇  🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// 1.if/else 2.Element Variable 3.Ternary conditinal operater 4.Short circuit operater
// import React, { Component } from "react";

// export default class ReactPractice extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoggedin: true,
//     };
//   }

//   render() {
//     //1. if else condition
//     // if (this.state.isLoggedin) {
//     //   return (
//     //     <div>
//     //       {" "}
//     //       <h3>Welcome Vishwas</h3>
//     //     </div>
//     //   );
//     // } else {
//     //   return (
//     //     <div>
//     //       {" "}
//     //       <h3>Welcome Guest</h3>
//     //     </div>
//     //   );
//     // }
//     // 2.Element variable
//     // let message;
//     // if (this.state.isLoggedin) {
//     //   message = <div>Welcome Vishwas</div>;
//     // } else {
//     //   message = <div>Welcome Vishwas</div>;
//     // }
//     // return <div>{message}</div>;
//     // 3.Ternary consitinal operater
//     // return this.state.isLoggedin ? (
//     //   <div>
//     //     <h2>Welcome Vishwas</h2>
//     //   </div>
//     // ) : (
//     //   <div>
//     //     <h2>Welcome Guest</h2>
//     //   </div>
//     // );
//     // short circut operater  //this is useful when we want show or nothing
//     // use conditinal ternary oprater and short circuit operater
//     return (
//       this.state.isLoggedin && (
//         <div>
//           <h2>Welcome Vishwas</h2>
//         </div>
//       )
//     );
//   }
// }
//List Rendering // List and key in React 👇  🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// import React from "react";
// // we can use index in key
// const ReactPractice = () => {
//   const names = ["Sen", "Tom", "Ben", "Tom"];
//   const nameList = names.map((name, index) => (
//     <h2 key={index}>
//       {index + 1} {name}
//     </h2>
//   ));
//   const persons = [
//     {
//       id: 1,
//       age: 22,
//       name: "Doc",
//       skill: "React",
//     },
//     {
//       id: 2,
//       age: 25,
//       name: "Alice",
//       skill: "Vue",
//     },
//     {
//       id: 3,
//       age: 28,
//       name: "Bob",
//       skill: "Angular",
//     },
//     {
//       id: 4,
//       age: 30,
//       name: "Charlie",
//       skill: "Node.js",
//     },
//     {
//       id: 5,
//       age: 26,
//       name: "Eve",
//       skill: "Python",
//     },
//     {
//       id: 6,
//       age: 23,
//       name: "Frank",
//       skill: "Java",
//     },
//     {
//       id: 7,
//       age: 35,
//       name: "Grace",
//       skill: "C#",
//     },
//   ];
//   // const personList = persons.map((person) => (
//   //   <h2>
//   //     <span>{person.id}.</span> I am {person.name} .I am {person.age} years old.
//   //     I know {person.skill}{" "}
//   //   </h2>
//   // ));
//   return (
//     <div>
//       {/* <h2>{names[0]}</h2>
//       <h2>{names[1]}</h2>
//       <h2>{names[2]}</h2> */}
//       {/* {names.map((name) => (
//         <h2 id={name.id}>{name}</h2>
//       ))} */}
//       {/* {nameList} */}
//       {/* {personList} */}
//       {persons.map((person) => (
//         <div key={person.id}>
//           <h2>
//             I am {person.name} .I am {person.age} years old. I know{" "}
//             {person.skill}
//           </h2>
//         </div>
//       ))}
//       {nameList}
//     </div>
//   );
// };

// export default ReactPractice;
//  Why using index as a key can be an anti-pattern👇  🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// import React, { useState } from "react";
// import { Button, Input } from "reactstrap";

// const ReactPractice = () => {
//   const [items, setItems] = useState([
//     { id: 1, name: "Apple" },
//     { id: 2, name: "Banana" },
//     { id: 3, name: "Cherry" },
//   ]);
//   const handleRemove = () => {
//     const newItems = [...items];
//     newItems.shift();
//     setItems(newItems);
//   };
//   return (
//     <div>
//       <h2> Why using index as a key can be an anti-pattern</h2>
//       {/* {items.map((item, index) => (
//         <div key={index}>
//           <Input defaultValue={item} />
//         </div>
//       ))} */}
//       {items.map((item) => (
//         <div key={item.id}>
//           <Input defaultValue={item.name} />
//         </div>
//       ))}
//       <Button onClick={handleRemove}>Remove</Button>
//     </div>
//   );
// };

// export default ReactPractice;
// Style React Components👇  🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// 1.CSS Stylesheets
// 2. Inline Styling
// 3.Css Modules
// import React from "react";
// import "./ReactPractice.scss";
// const ReactPractice = (props) => {
//   let className = props.primary ? "primary" : "";
//   const Heading = {
//     fontSize: "72px",
//     color: "blue",
//   };
//   return (
//     <div>
//       <h4>Style React Components</h4>
//       <h6 className={`${className} font-xl`}>StyleSheet</h6>
//       <h1 style={Heading}>Inline</h1>
//     </div>
//   );
// };

// export default ReactPractice;
//Basic Form Hanldings👇  🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// controlled componenet ->control by react
//
// import React, { Component } from "react";
// import {
//   Button,
//   Form,
//   FormGroup,
//   Input,
//   Label,
//   Modal,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
// } from "reactstrap";

// export default class ReactPractice extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       userName: "",
//       comments: "",
//       topic: "React",
//       modelOpen: false,
//     };
//   }
//   handleUserNameChnage = (event) => {
//     this.setState({
//       userName: event.target.value,
//     });
//   };
//   handleCommentChange = (event) => {
//     this.setState({
//       comments: event.target.value,
//     });
//   };
//   handleTopicChange = (event) => {
//     this.setState({
//       topic: event.target.value,
//     });
//   };
//   handleSubmit = (event) => {
//     // alert(
//     //   `" I am ${this.state.userName}.I said ${this.state.comments} ,I am lerning ${this.state.topic} programming language" `
//     // );
//     this.toggleModal();
//     event.preventDefault();
//   };
//   toggleModal = () => {
//     this.setState({
//       modelOpen: !this.state.modelOpen,
//     });
//   };
//   render() {
//     return (
//       <div>
//         {/* <Form style={{ padding: "30px" }} onSubmit={this.handleSubmit}> */}
//         <Form style={{ padding: "30px" }}>
//           <FormGroup>
//             <Label>UserName</Label>
//             <Input
//               autoComplete="off"
//               type="text"
//               value={this.state.userName}
//               onChange={this.handleUserNameChnage}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label>Comments</Label>
//             <Input
//               type="textarea"
//               autoComplete="off"
//               value={this.state.comments}
//               onChange={this.handleCommentChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label>Topic</Label>
//             <Input
//               type="select"
//               value={this.state.topic}
//               onChange={this.handleTopicChange}
//             >
//               <option value="React">React</option>
//               <option value="Anguler">Anguler</option>
//               <option value="Vue">Vue</option>
//             </Input>
//           </FormGroup>
//           {/* <Button type="submit">Submit</Button> */}
//           <Button onClick={this.handleSubmit}>Submit</Button>
//         </Form>
//         {/* Cutom Modal For Alert */}
//         <Modal isOpen={this.state.modelOpen} toggle={this.toggleModal}>
//           {" "}
//           <ModalHeader toggle={this.toggleModal}>
//             Submission Confirmation
//           </ModalHeader>
//           <ModalBody>
//             <p>
//               <strong>I am {this.state.userName}.</strong>
//               <br />I said: "{this.state.comments}".
//               <br />I am learning <strong>{this.state.topic}</strong>{" "}
//               programming language.
//             </p>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.toggleModal}>
//               OK
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }
// }
//Lifecyle methods in Class Componenets👇 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// Mounting -> Contructor,staticDerivedStateFromProps,render and Componenet DidMount
// Updating -> static getDerivedFromProps,shouldComponenets ,render, getSnapshotBeforeUpdate and ComponenetDidUpdate
// Umounting ->componentWillUnmount
// Error Handling -> static getDerivedFromError and componenetDidCatch
//1. Mounting -> constrtutor(props)  ->initial state ( note : rconst shortcut in vs code)
// ->static getDerivedFromProps(props,state) ->set the state
// -> render() ->this.props  and this.state
//-> componenetDidMuound () -> call only one -> cause side effect ->Fethc Methods
// 2.Updating ->getDerivedProps(props,state)
// ->shouldComponentUpdate(nextProps,nextState)  -> render()  ->getSnapShotBeforeUpdate(prevProps,prevState)
//->componenetDidUpdate(precProps.prevState,snapshot)
//3. Unmounting ->componenetWillUnmount
//4.Error Handling  ->static getDerivedFromError(error)   ->componenetDidcathc(error,info)
// import React, { Component } from "react";
// import LifeCycleB from "./LifecyleB";
// import { Button } from "reactstrap";

// export default class ReactPractice extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "Rushikesh",
//     };
//     console.log("Lifecycle A Constuctor");
//   }

//   static getDerivedStateFromProps(props, state) {
//     //<- 1st method of updating props
//     console.log("Lifecycle A getDerivedFromProps");
//     return null;
//   }
//   componentDidMount() {
//     console.log("LifeCyle A componentDidMount");
//   }
//   shouldComponentUpdate() {
//     console.log("LifeCycle A should Componemt update");
//     return true;
//   }
//   getSnapshotBeforeUpdate(precProps, preState) {
//     console.log("Lifecycle A getSnapShotBeforeUpdate");
//     return null;
//   }
//   componentDidUpdate() {
//     console.log("LifeCycle A componentDidUpdate");
//   }

//   changeState = () => {
//     this.setState({
//       name: "Name Changed",
//     });
//   };
//   render() {
//     console.log("LifeCycle A Render");
//     //   <- above is an 3rd method of updating
//     return (
//       <div>
//         <h6>Mounting LifeCyle Methods</h6>
//         <h5>Lifecycle A</h5>
//         <Button onClick={this.changeState}>Change state</Button>
//         <LifeCycleB />
//       </div>
//     );
//   }
// }
// Fragments 👇 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
// import React from "react";
// import { Fragment } from "react";
// import TableCompo from "./TableCompo";

// const ReactPractice = () => {
//   return (
//     // <Fragment>
//     //   <h2>Fragment Demo</h2>
//     //   <p>Here i used React Fragment to wrap code</p>
//     // </Fragment>
//     <React.Fragment>
//       <h2>Fragment Demo</h2>
//       <p>Here i used React Fragment to wrap code</p>
//       <TableCompo />
//     </React.Fragment>
//   );
// };

// export default ReactPractice;
// Pure Component 👇 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽

// import React, { Component } from "react";
// import RegularCompo from "./RegularCompo";
// import PureCompo from "./PureCompo";
// import MemoComp from "./MemoComp";
// //This is and parent Componenet Here
// export class ReactPractice extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "vishwas",
//     };
//   }
//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         name: "Vishwas",
//       });
//     }, 2000);
//   }
//   render() {
//     console.log("------------Parent Compo Render");

//     return (
//       <div>
//         <h2>Parent Componet </h2>
//         {/* <RegularCompo name={this.state.name}></RegularCompo>
//         <PureCompo name={this.state.name}></PureCompo> */}
//         <MemoComp name={this.state.name} />
//       </div>
//     );
//   }
// }

// export default ReactPractice;
//React ref 🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫🏫
import React, { useEffect, useState } from "react";
//how to use setCallback in this inn render
const ReactPractice = () => {
  const [inputRef] = useState(React.createRef());
  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef);
  });
  const ClickHandler = () => {
    alert(inputRef.current.value);
  };
  return (
    <div>
      <h4>ref Demo is React</h4>
      <input type="text" ref={inputRef} />
      <button onClick={ClickHandler}>Click</button>
    </div>
  );
};

export default ReactPractice;

//class componeent for use eref
// import React, { Component } from "react";

// class ReactPracticeClass extends Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef();
//   }

//   componentDidMount() {
//     this.inputRef.current.focus();
//   }

//   ClickHandler = () => {
//     alert(this.inputRef.current.value);
//   };

//   render() {
//     return (
//       <div>
//         <h4>Ref Demo in Class Component</h4>
//         <input type="text" ref={this.inputRef} />
//         <button onClick={this.ClickHandler}>Click</button>
//       </div>
//     );
//   }
// }

// export default ReactPracticeClass;
