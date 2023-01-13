import { Image } from "react-bootstrap";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Image src="https://res.cloudinary.com/djbmfd9y6/image/upload/c_scale,h_150/v1670534765/Camiontito/logo_t5a3np.png" />
      {`Copyright © Van Re Corriendo ${year}`}
    </footer>
  );
};

export default Footer;
