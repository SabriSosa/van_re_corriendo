import { Container, Image } from "react-bootstrap";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

import "./Footer.scss";

const logo = require('../images/logo_150.png');

const Footer = () => {
  const year = new Date().getFullYear();

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <Container className="footer-container">
        <div>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100085509656617"
            rel="noreferrer"
          >
            <FaFacebookSquare className="face-footer icon-footer " size={35} />
          </a>
        </div>
        <Image
          className="footer-image"
          onClick={() => goToTop()}
          src={logo}
        />
        <div>
          <a
            target="_blank"
            href="https://www.instagram.com/van_re_corriendo/"
            rel="noreferrer"
          >
            <FaInstagram className="insta-footer icon-footer" size={35} />
          </a>
        </div>
      </Container>
      {`Copyright © Van Re Corriendo ${year}`}
    </footer>
  );
};

export default Footer;
