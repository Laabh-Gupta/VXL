// import React from 'react'
import LogoWhite from "../assets/LogoWhite.png";
import "../Styles/Footer.css";
//import TransalateButton from "./TransalateButton";

const Footer = () => {
  return (
    <>
      <hr></hr>
      <footer>
        <div className="left-footer">
          <div className="left-footer-element">
            <h3>Company</h3>
            <a href="#">• FAQs</a>
            <br />
            <a href="#">• About us</a>
            <br />
            <a href="#">• Contact us</a>
            <br />
          </div>
          <div className="left-footer-element">
            <h3>Services</h3>
            <a href="#">• Home</a>
            <br />
            <a href="#">• Faculty</a>
            <br />
            <a href="#">• Student</a>
            <br />
          </div>
          <div className="left-footer-element">
            <h3>Legal</h3>
            <a href="#">• Terms and conditions</a>
            <br />
            <a href="#">• Privacy policy</a>
            <br />
          </div>
        </div>
        <img className="right-footer" src={LogoWhite}></img>
      </footer>
    </>
  );
};

export default Footer;
