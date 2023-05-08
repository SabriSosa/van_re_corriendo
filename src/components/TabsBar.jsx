import { Trans } from "@lingui/macro";
import React, { useState } from "react";
import { Image, Tab, Tabs } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { FaHandsHelping, FaRoute } from "react-icons/fa";
import { IoIosConstruct, IoIosMail, IoIosPeople } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import ContactForm from "../pages/Contact";
import HelpUs from "../pages/HelpUs";
import Home from "../pages/Home";
import ProjectForm from "../pages/Project";
import TravelRoute from "../pages/TravelRoute";
import "./TabsBar.scss";
import { GrFacebookOption } from "react-icons/gr";
import { RiInstagramLine } from "react-icons/ri";
const logo50 = require("../images/logo_50.png");

const menu = [
  {
    title: <Trans>menu.home</Trans>,
    action: "home",
    icon: <Image alt="home-logo" src={logo50} />,
    component: <Home />,
  },
  {
    title: <Trans>menu.about.us</Trans>,
    action: "about-us",
    icon: <IoIosPeople />,
    component: <AboutUs />,
  },
  {
    title: <Trans>menu.contact</Trans>,
    action: "contact",
    icon: <IoIosMail />,
    component: <ContactForm />,
  },
  {
    title: <Trans>menu.help.us</Trans>,
    action: "help-us",
    icon: <FaHandsHelping />,
    component: <HelpUs />,
  },
  {
    title: <Trans>menu.project</Trans>,
    action: "project",
    icon: <IoIosConstruct />,
    component: <ProjectForm />,
  },
  {
    title: <Trans>menu.route</Trans>,
    action: "route",
    icon: <FaRoute />,
    component: <TravelRoute />,
  },
];

function TabsBarMenu() {
  const [key, setKey] = useState("home");
  const navigate = useNavigate();
  return (
    <Container fluid className="tabs-container">
      <nav>
        <Tabs
          activeKey={key}
          onSelect={(k) => {
            setKey(k);
            navigate(k);
          }}
        >
          {menu.map((menu) => (
            <Tab title={menu.icon} key={menu.action} eventKey={menu.action} />
          ))}
        </Tabs>
      </nav>
    </Container>
  );
}

export default TabsBarMenu;
