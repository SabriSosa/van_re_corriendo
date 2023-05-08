import { Trans } from "@lingui/macro";
import { GrFacebookOption } from "@react-icons/all-files/gr/GrFacebookOption";
import { RiInstagramLine } from "@react-icons/all-files/ri/RiInstagramLine";
import { useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const logo150 = require("../images/logo_150.png");

const menu1 = [
  { title: <Trans>menu.home</Trans>, action: "home" },
  { title: <Trans>menu.about.us</Trans>, action: "about-us" },
  { title: <Trans>menu.contact</Trans>, action: "contact" },
  { title: <Trans>menu.help.us</Trans>, action: "help-us" },
];
const menu2 = [
  { title: <Trans>menu.project</Trans>, action: "project" },
  { title: <Trans>menu.route</Trans>, action: "route" },
];

function NavBarMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClose = () => setMenuOpen(false);

  return (
    <Container fluid className="navbar-container">
      <Navbar
        key="navbar"
        bg="ligth"
        variant="dark"
        expand="lg"
        className="mb-3 nav-bar"
      >
        <Container>
          <Navbar.Collapse id="desktop-navbar">
            <Nav className="navbar-body justify-content-center flex-grow-1 pe-3">
              {menu1.map((menu) => (
                <Link className="nav-link" key={menu.action} to={menu.action}>
                  {menu.title}
                </Link>
              ))}
              <Link to="/home" className="logo-link-menu nav-link">
                <Image alt="desktop-logo" src={logo150} />
              </Link>
              {menu2.map((menu) => (
                <Link className="nav-link" key={menu.action} to={menu.action}>
                  {menu.title}
                </Link>
              ))}
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100085509656617"
                className="social-media-menu nav-link fb"
                rel="noreferrer"
                aria-label="Facebook link"
              >
                <GrFacebookOption />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/van_re_corriendo"
                className="social-media-menu nav-link ig"
                rel="noreferrer"
                aria-label="Intagram link"
              >
                <RiInstagramLine />
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <svg
        id="wave-menu"
        viewBox="0 0 1440 210"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(255, 255, 255, 1)" offset="0%"></stop>
            <stop stopColor="rgba(255, 255, 255, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>

        <path
          fill="url(#sw-gradient-0)"
          d="M0,72L120,92C240,112,480,152,720,144C960,136,1200,80,1440,84C1680,88,1920,152,2160,180C2400,208,2640,200,2880,172C3120,144,3360,96,3600,76C3840,56,4080,64,4320,76C4560,88,4800,104,5040,96C5280,88,5520,56,5760,56C6000,56,6240,88,6480,104C6720,120,6960,120,7200,128C7440,136,7680,152,7920,144C8160,136,8400,104,8640,88C8880,72,9120,72,9360,64C9600,56,9840,40,10080,48C10320,56,10560,88,10800,96C11040,104,11280,88,11520,76C11760,64,12000,56,12240,76C12480,96,12720,144,12960,140C13200,136,13440,80,13680,52C13920,24,14160,24,14400,44C14640,64,14880,104,15120,108C15360,112,15600,80,15840,76C16080,72,16320,96,16560,120C16800,144,17040,168,17160,180L17280,192L17280,240L17160,240C17040,240,16800,240,16560,240C16320,240,16080,240,15840,240C15600,240,15360,240,15120,240C14880,240,14640,240,14400,240C14160,240,13920,240,13680,240C13440,240,13200,240,12960,240C12720,240,12480,240,12240,240C12000,240,11760,240,11520,240C11280,240,11040,240,10800,240C10560,240,10320,240,10080,240C9840,240,9600,240,9360,240C9120,240,8880,240,8640,240C8400,240,8160,240,7920,240C7680,240,7440,240,7200,240C6960,240,6720,240,6480,240C6240,240,6000,240,5760,240C5520,240,5280,240,5040,240C4800,240,4560,240,4320,240C4080,240,3840,240,3600,240C3360,240,3120,240,2880,240C2640,240,2400,240,2160,240C1920,240,1680,240,1440,240C1200,240,960,240,720,240C480,240,240,240,120,240L0,240Z"
        ></path>
      </svg>
    </Container>
  );
}

export default NavBarMenu;
