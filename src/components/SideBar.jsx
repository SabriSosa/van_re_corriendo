import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { isDesktop, isTablet } from "react-device-detect";
import "./SideBar.scss";
import SideBarItem from "./SideBarItem";
import SimpleCarrousel from "./SimpleCarrousel";
import CustomModal from "./generic/CustomModal";

function SideBar({ routes, selectedPlace, setSelectedPlace }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const handleSelectItem = (item) => {
    setSelectedPlace(item?.id);
    setSelectedItem(item);
    setModalShow(true);
  };
  useEffect(() => {
    if (selectedPlace) {
      const _selectedPlace = document.getElementById(selectedPlace);
      _selectedPlace?.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
    }
  }, [selectedPlace]);

  const body = (
    <Container fluid className="container-modal-sidebar">
      <SimpleCarrousel
        prefix="Camiontito/Routes"
        images={selectedItem?.images}
        id="sidebar-carrousel"
        transformation="ar_1:1,c_crop"
      />
    </Container>
  );

  return (
    routes && (
      <Container className="sidebar-container">
        <CustomModal
          size={isDesktop ? "lg" : isTablet ? "md" : "sm"}
          id="travel-map"
          show={modalShow}
          body={body}
          onHide={() => setModalShow(false)}
        />
        {routes.map((item) => (
          <SideBarItem
            id={item.id}
            key={item.id}
            item={item}
            selectedPlace={selectedPlace}
            handleSelectItem={handleSelectItem}
          />
        ))}
      </Container>
    )
  );
}

export default SideBar;
