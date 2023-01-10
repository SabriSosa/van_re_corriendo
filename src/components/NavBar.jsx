import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./NavBar.scss";

import { RiInstagramLine } from "react-icons/ri";
import { GrFacebookOption } from "react-icons/gr";

const menu1 = [
  { title: "NOSOTROS", action: "about-us" },
  {
    title: "DESTINOS",
    action: "places",
    submenu: [
      { title: "ARGENTINA", action: "argentina" },
      { title: "CHILE", action: "chile" },
    ],
  },
  { title: "PROYECTO MOTORHOME", action: "project-motorhome" },
];
const menu2 = [
  { title: "AYUDANOS", action: "help-us" },
  { title: "RECORRIDO", action: "route" },
  { title: "CONTACTO", action: "contact" },
];

function NavBarMenu() {
  return (
    <Container fluid className="navbar-container">
      <Navbar key="navbar" bg="ligth" expand="lg" className="mb-3 nav-bar">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Van Re Corriendo</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center align-items-center  flex-grow-1 pe-3">
                {menu1.map((menu) =>
                  menu.submenu ? (
                    <NavDropdown id={menu.title} title={menu.title}>
                      {menu.submenu.map((sub) => (
                        <NavDropdown.Item id={sub.title} href={sub.action}>
                          {sub.title}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ) : (
                    <Nav.Link id={menu.title} href={menu.action}>
                      {menu.title}
                    </Nav.Link>
                  )
                )}
                <Nav.Link href="/home">
                  <Image src="https://res.cloudinary.com/djbmfd9y6/image/upload/c_scale,h_150/v1670534765/Camiontito/logo_t5a3np.png" />
                </Nav.Link>

                {menu2.map((menu) => (
                  <Nav.Link id={menu.title} href={menu.action}>
                    {menu.title}
                  </Nav.Link>
                ))}

                <Nav.Link href="#">
                  <GrFacebookOption />
                </Nav.Link>
                <Nav.Link href="#">
                  <RiInstagramLine />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <svg
        id="wave"
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
          //d="M0,62L80,67.2C160,72,320,83,480,118.8C640,155,800,217,960,211.8C1120,207,1280,134,1440,103.3C1600,72,1760,83,1920,108.5C2080,134,2240,176,2400,175.7C2560,176,2720,134,2880,103.3C3040,72,3200,52,3360,56.8C3520,62,3680,93,3840,87.8C4000,83,4160,41,4320,36.2C4480,31,4640,62,4800,82.7C4960,103,5120,114,5280,139.5C5440,165,5600,207,5760,227.3C5920,248,6080,248,6240,248C6400,248,6560,248,6720,253.2C6880,258,7040,269,7200,248C7360,227,7520,176,7680,134.3C7840,93,8000,62,8160,72.3C8320,83,8480,134,8640,149.8C8800,165,8960,145,9120,118.8C9280,93,9440,62,9600,87.8C9760,114,9920,196,10080,222.2C10240,248,10400,217,10560,175.7C10720,134,10880,83,11040,67.2C11200,52,11360,72,11440,82.7L11520,93L11520,310L11440,310C11360,310,11200,310,11040,310C10880,310,10720,310,10560,310C10400,310,10240,310,10080,310C9920,310,9760,310,9600,310C9440,310,9280,310,9120,310C8960,310,8800,310,8640,310C8480,310,8320,310,8160,310C8000,310,7840,310,7680,310C7520,310,7360,310,7200,310C7040,310,6880,310,6720,310C6560,310,6400,310,6240,310C6080,310,5920,310,5760,310C5600,310,5440,310,5280,310C5120,310,4960,310,4800,310C4640,310,4480,310,4320,310C4160,310,4000,310,3840,310C3680,310,3520,310,3360,310C3200,310,3040,310,2880,310C2720,310,2560,310,2400,310C2240,310,2080,310,1920,310C1760,310,1600,310,1440,310C1280,310,1120,310,960,310C800,310,640,310,480,310C320,310,160,310,80,310L0,310Z"
          d="M0,72L120,92C240,112,480,152,720,144C960,136,1200,80,1440,84C1680,88,1920,152,2160,180C2400,208,2640,200,2880,172C3120,144,3360,96,3600,76C3840,56,4080,64,4320,76C4560,88,4800,104,5040,96C5280,88,5520,56,5760,56C6000,56,6240,88,6480,104C6720,120,6960,120,7200,128C7440,136,7680,152,7920,144C8160,136,8400,104,8640,88C8880,72,9120,72,9360,64C9600,56,9840,40,10080,48C10320,56,10560,88,10800,96C11040,104,11280,88,11520,76C11760,64,12000,56,12240,76C12480,96,12720,144,12960,140C13200,136,13440,80,13680,52C13920,24,14160,24,14400,44C14640,64,14880,104,15120,108C15360,112,15600,80,15840,76C16080,72,16320,96,16560,120C16800,144,17040,168,17160,180L17280,192L17280,240L17160,240C17040,240,16800,240,16560,240C16320,240,16080,240,15840,240C15600,240,15360,240,15120,240C14880,240,14640,240,14400,240C14160,240,13920,240,13680,240C13440,240,13200,240,12960,240C12720,240,12480,240,12240,240C12000,240,11760,240,11520,240C11280,240,11040,240,10800,240C10560,240,10320,240,10080,240C9840,240,9600,240,9360,240C9120,240,8880,240,8640,240C8400,240,8160,240,7920,240C7680,240,7440,240,7200,240C6960,240,6720,240,6480,240C6240,240,6000,240,5760,240C5520,240,5280,240,5040,240C4800,240,4560,240,4320,240C4080,240,3840,240,3600,240C3360,240,3120,240,2880,240C2640,240,2400,240,2160,240C1920,240,1680,240,1440,240C1200,240,960,240,720,240C480,240,240,240,120,240L0,240Z"
        ></path>
      </svg>
      
    </Container>
  );
}

export default NavBarMenu;
