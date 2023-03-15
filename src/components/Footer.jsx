import { Container, Image } from "react-bootstrap";
import { GrFacebookOption } from "react-icons/gr";
import { RiInstagramLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <Container className="section1">
        <Link
          className="icon-footer face-footer"
          to={{ pathname: "https://www.instagram.com/van_re_corriendo/" }}
        >
          <GrFacebookOption size={25} />
        </Link>
        <Image
          className="footer-image"
          onClick={() => goToTop()}
          src="https://res.cloudinary.com/djbmfd9y6/image/upload/c_scale,h_150/v1670534765/Camiontito/logo_t5a3np.png"
        />

        <Link
          className="icon-footer insta-footer"
          to={{ pathname: "https://www.instagram.com/van_re_corriendo/" }}
          target="_blank"
        >
          <RiInstagramLine size={25} />
        </Link>
      </Container>
      {`Copyright © Van Re Corriendo ${year}`}
    </footer>
  );
};

export default Footer;
