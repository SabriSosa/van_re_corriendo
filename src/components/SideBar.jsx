import { t } from "@lingui/macro";
import { BsArrowBarRight } from "@react-icons/all-files/bs/BsArrowBarRight";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { isDesktop, isTablet } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../slices/genericSlice";
import { selectSelectedPlace, setSelectedPlace } from "../slices/routeSlice";
import "./SideBar.scss";
import SideBarItem from "./SideBarItem";
import SimpleCarrousel from "./SimpleCarrousel";
import { getDateString, initialDate } from "./auxiliary";
import CustomModal from "./generic/CustomModal";

function SideBar({ routes }) {
  const [modalShow, setModalShow] = useState(false);

  const [selectedItem, setSelectedItem] = useState();
  const dispatch = useDispatch();
  const selectedPlace = useSelector(selectSelectedPlace);

  const handleSelectItem = (item) => {
    dispatch(setSelectedPlace({ routeId: item.id }));
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
        onLoad={() => dispatch(setLoading({ loading: false }))}
        prefix="Camiontito/Routes"
        images={selectedItem?.images}
        id="sidebar-carrousel"
        transformation="ar_1:1,c_crop"
      />
    </Container>
  );

  return (
    routes && (
      <Container fluid className="sidebar-container">
        <CustomModal
          size={isDesktop ? "lg" : isTablet ? "md" : "sm"}
          id="travel-map"
          show={modalShow}
          body={body}
          title={`${selectedItem?.city}, ${selectedItem?.state}, ${selectedItem?.country}`}
          onHide={() => setModalShow(false)}
        />
        <Container className="initial-card-container">
          <Container className="initial-card">
            <BsArrowBarRight />
            {t`sidebar.start.travel`}
            <span className="">
              {getDateString(initialDate)}
            </span>
          </Container>
        </Container>
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
