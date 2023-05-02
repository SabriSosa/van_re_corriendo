import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { isDesktop, isTablet } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../slices/genericSlice";
import { selectSelectedPlace, setselectedPlace } from "../slices/routeSlice";
import "./SideBar.scss";
import SideBarItem from "./SideBarItem";
import SimpleCarrousel from "./SimpleCarrousel";
import CustomModal from "./generic/CustomModal";

function SideBar({ routes }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const dispatch = useDispatch();
  const selectedPlace = useSelector(selectSelectedPlace);

  const handleSelectItem = (item) => {
    dispatch(setselectedPlace({ routeId: item.id }));
    setSelectedItem(item);
    setModalShow(true);
    dispatch(setLoading({ loading: true }));
  };
  useEffect(() => {
    if (selectedPlace) {
      const selectedPlaceElem = document.getElementById(selectedPlace.id);
      selectedPlaceElem?.scrollIntoView({
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
          title={`${selectedItem?.city}, ${selectedItem?.state}, ${selectedItem?.country}`}
          onHide={() => setModalShow(false)}
        />
        {routes.map((item) => (
          <SideBarItem
            id={item.id}
            key={item.id}
            item={item}
            selectSelectedPlace={selectedPlace}
            handleSelectItem={handleSelectItem}
          />
        ))}
      </Container>
    )
  );
}

export default SideBar;
