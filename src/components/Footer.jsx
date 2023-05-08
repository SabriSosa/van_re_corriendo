import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { Container, Image } from "react-bootstrap";
import "./Footer.scss";

const logo = require("../images/logo_150.png");

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
            aria-label="Facebook link"
          >
            <FaFacebookSquare className="face-footer icon-footer " size={35} />
          </a>
        </div>
        <Image
          className="footer-image"
          onClick={() => goToTop()}
          src={logo}
          alt="footer-logo"
        />
        <div>
          <a
            target="_blank"
            href="https://www.instagram.com/van_re_corriendo/"
            rel="noreferrer"
            aria-label="Intagram link"
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
