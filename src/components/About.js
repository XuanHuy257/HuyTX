import React from "react";
import Header from "./Header";
// import Footer from "./Footer";
const About = () => {
  return (
    <div className="contact">
      <Header />
      <h1>About Us</h1>
      <div className="container avc">
        <div className="row">
          <div className="left-contents col-md-6">
            <h2>Welcome To Our Website</h2>
            <p>
              Discover the latest trends and innovation in technology , design,
              and more.Our team of experts brings you the best contents and
              insights to help you stay of the curve
            </p>
            <p>Thank you for using company's services</p>
          </div>
          <div className="right-contents col-md-6">
            <img src="../../images/ip2.png" alt="img" />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default About;
