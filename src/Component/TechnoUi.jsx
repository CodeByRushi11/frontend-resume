import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import "./TechnoUi.scss";

const TechnoUi = () => {
  return (
    <div className="ui-container">
      {/* Notification in header */}
      <div className="header">
        <div className="header-left">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
            alt="Profile"
            className="profile-pic"
          />
          <div>
            <span>Hello, Welcome 🎉</span> <br />
            <strong className="username">John Weak</strong>
          </div>
        </div>
        <div className="header-right">
          <span className="notification">
            <i class="fa-solid fa-bell"></i>
          </span>
        </div>
      </div>
      <div className="contactForm">
        {/* contact information */}
        <h2>Contact Us</h2>
        <p>
          <span className="icon">
            <i class="fa-solid fa-envelope"></i>
          </span>{" "}
          <span>Email</span>
          <br />
          <span className="padd-left">workforeign@gmail.com</span>
        </p>
        <p>
          <span className="icon">
            <i class="fa-solid fa-phone"></i>
          </span>{" "}
          <span>Phone No.</span>
          <br />
          <span className="padd-left">+44 (0) xxxx xxx xxx</span>
        </p>
        {/* contact form */}

        <FormGroup>
          <Label>Name</Label>
          <Input placeholder="Enter a name" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input placeholder="Enter a email" />
        </FormGroup>
        <FormGroup>
          <Label>Message</Label>
          <Input placeholder="Enter your query.." />
        </FormGroup>
      </div>
      {/* Bottom navigationss */}
      <nav className="bottom-nav">
        <div className="nav-item">
          <span className="nav-icon">
            <i class="fa-solid fa-house"></i>
          </span>
          <span className="nav-text">Home</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">
            <i class="fa-solid fa-file"></i>
          </span>
          <span className="nav-text">Compliance</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">
            <i class="fa-solid fa-circle-check"></i>
          </span>
          <span className="nav-text">Eligibility</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">
            <i class="fa-solid fa-book"></i>
          </span>
          <span className="nav-text">Resource</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">
            <i class="fa-solid fa-bell"></i>
          </span>
          <span className="nav-text">Reminder</span>
        </div>
      </nav>
    </div>
  );
};

export default TechnoUi;
