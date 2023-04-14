import { Container } from "react-bootstrap";
import SideBarItem from "./SideBarItem";

import "./SideBar.scss";

function SideBar({ routes, selectedPlace }) {
  
  return (
    routes && (
      <Container className="side-bar-container">
        {routes.map((item) => (
          <SideBarItem key={item.id} item={item}             selectedPlace={selectedPlace}
          />
        ))}
      </Container>
    )
  );
}

export default SideBar;
