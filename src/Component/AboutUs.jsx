import React, { Fragment } from "react";
import "./AboutUs.scss";
const AboutUs = () => {
  return (
    <Fragment>
      <div className="header">
        <div className="header-left">
          <img
            src="https://th.bing.com/th/id/OIP.f2CSJjl-fhjwCTjLpTj2FwHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
      <div className="about-container">
        {/* Notification in header */}

        {/* About Us Section */}
        <div className="about-us">
          <h2>About Us</h2>
          <img
            src="https://www.boxcast.com/hubfs/Blog%20Images/B185%20-%2016-9%20Ratio/Blog_B185_Featured%20Image_1200x628.jpg#keepProtocol"
            alt="About Us"
            className="about-img"
          />
          <p>
            We are a team of dedicated professionals driven by creativity,
            innovation, and a passion for exceptional design. With years of
            expertise in mobile application and website design, we specialize in
            transforming ideas into captivating digital experiences that
            seamlessly combine functionality and aesthetics. Our approach is
            centered on understanding the unique needs of each client, ensuring
            every project we undertake not only aligns with their vision but
            also elevates their brand in the digital space.
          </p>
          <p>
            At the core of our work is our mastery of modern design tools like
            Figma, which allows us to bring concepts to life with precision and
            style. We take pride in crafting user-centric designs that are
            intuitive, visually appealing, and optimized.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
