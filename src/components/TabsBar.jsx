import { Trans } from "@lingui/macro";
import { FaHandsHelping } from "@react-icons/all-files/fa/FaHandsHelping";
import { FaRoute } from "@react-icons/all-files/fa/FaRoute";
import { IoIosConstruct } from "@react-icons/all-files/io/IoIosConstruct";
import { IoIosMail } from "@react-icons/all-files/io/IoIosMail";
import { IoIosPeople } from "@react-icons/all-files/io/IoIosPeople";
import React, { useEffect, useState } from "react";
import { Image, Tab, Tabs } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useLocation, useNavigate } from "react-router-dom";
import "./TabsBar.scss";
const logo50 = require("../images/logo_50.png");

const menu = [
  {
    title: <Trans>menu.home</Trans>,
    action: "home",
    icon: <Image className="home-logo" alt="home-logo" src={logo50} />,
  },
  {
    title: <Trans>menu.about.us</Trans>,
    action: "about-us",
    icon: <IoIosPeople />,
  },
  {
    title: <Trans>menu.contact</Trans>,
    action: "contact",
    icon: <IoIosMail />,
  },
  {
    title: <Trans>menu.help.us</Trans>,
    action: "help-us",
    icon: <FaHandsHelping />,
  },
  {
    title: <Trans>menu.project</Trans>,
    action: "project",
    icon: <IoIosConstruct />,
  },
  {
    title: <Trans>menu.route</Trans>,
    action: "route",
    icon: <FaRoute />,
  },
];

function TabsBarMenu() {
  const [key, setKey] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/")[1];

    if (key !== path) {
      setKey(path);
    }
  }, [location]);

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
            <Tab
              tabAttrs={{ "aria-label": menu.action }}
              title={menu.icon}
              key={menu.action}
              eventKey={menu.action}
            />
          ))}
        </Tabs>
      </nav>
    </Container>
  );
}

export default TabsBarMenu;
