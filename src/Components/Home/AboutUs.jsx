import React from "react";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 py-3">
            <div className="subhead">About Us</div>
            <h2 className="title-section">
              We are <span className="fg-primary">Professional Teams</span> to
              Growth your Business
            </h2>
            <p>
            MonkDevs is a dynamic and innovative IT consultancy firm that specializes in delivering cutting-edge solutions tailored to your unique business needs. 
            Our team of seasoned professionals brings together a wealth of experience, creativity, and technical prowess to craft solutions that drive your business forward.
            </p>
            <p>
            At MonkDevs, we're not just a team of IT experts. we're your strategic partners in unleashing the true potential of technology for your business. 
            Our journey began with a vision to revolutionize the IT consultancy and app development landscape, and today, we stand proud as a leading provider of comprehensive IT solutions.
            </p>
            <Link to="/about" className="btn btn-primary mt-4">
              Read More
            </Link>
          </div>
          <div className="col-lg-6 py-3">
            <div className="about-img">
              <img src="../assets/img/about.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
