import React from "react";
import "../../style/footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">moradelazyzy@gmail.com</div>
        <div className="footer-center">
          <i className="fa fa-github-square"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-twitter-square"></i>
        </div>
        <div className="footer-left">
          <p>&copy; 2021 Morad Elazyzy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
