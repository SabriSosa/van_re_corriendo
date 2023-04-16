import { Container } from "react-bootstrap";
import SideBarItem from "./SideBarItem";

import "./SideBar.scss";
import { useEffect } from "react";

function SideBar({ routes, selectedPlace , setSelectedPlace}) {
  useEffect(() => {
    if (selectedPlace) {
      const _selectedPlace = document.getElementById(selectedPlace);
      _selectedPlace.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedPlace]);

  return (
    routes && (
      <Container className="side-bar-container">
        {routes.map((item) => (
          <SideBarItem
            key={item.id}
            item={item}
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}

          />
        ))}
      </Container>
    )
  );
}

export default SideBar;
