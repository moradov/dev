import React from "react";
import "../../style/footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">moradelazyzy@gmail.com</div>
        <div className="footer-center">
          <a href="https://github.com/moradov" target="_blank">
            <i className="fa fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/morad-elazyzy-8b12401a6/"
            target="_blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.behance.net/moradelazyzy" target="_blank">
            <i className="fa fa-behance-square"></i>
          </a>
        </div>
        <div className="footer-left">
          <p>&copy; 2022 Morad Elazyzy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
