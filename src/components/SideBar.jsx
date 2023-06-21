import { t } from "@lingui/macro";
import { BsArrowBarRight } from "@react-icons/all-files/bs/BsArrowBarRight";
import { useEffect, useLayoutEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { isDesktop, isTablet } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../slices/genericSlice";
import { selectSelectedPlace, setSelectedPlace } from "../slices/routeSlice";
import { getDateString, initialDate } from "./auxiliary";
import CustomModal from "./generic/CustomModal";
import "./SideBar.scss";
import SideBarItem from "./SideBarItem";
import SimpleCarrousel from "./SimpleCarrousel";

function SideBar({ routes, setIsSelected, isSelected }) {
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();
  const selectedPlace = useSelector(selectSelectedPlace);

  const handleSelectPlace = (item) => {
    dispatch(setSelectedPlace({ routeId: item.id }));

    if (isDesktop) {
      setModalShow(true);
    } else {
      setIsSelected(true);
    }
    dispatch(setLoading({ loading: true }));
  };


  useLayoutEffect(() => {
   console.log("useLayoutEffect")
  });
  
  useEffect(() => {
    if (selectedPlace) {
      console.log("selectedPlace.id", selectedPlace.id);
      if (selectedPlace.id === 1 && !isSelected) {
        console.log("Esta haciendo scro;ll")

        const initialPlace = document.getElementById(0);
        
        initialPlace?.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "smooth",
        });
      } else {
        const selectedPlaceElem = document.getElementById(selectedPlace.id);
        console.log("Me hace el scroll desde ", selectedPlace.city)
        console.log("Me hace el scroll selectedPlaceElem a ", selectedPlaceElem)

        setTimeout(function () {
          selectedPlaceElem?.scrollIntoView({
            block: "center",
            inline: "center",
            behavior: "smooth",
          });
     }, 200);

       
      }
    }
  }, [selectedPlace, isSelected]);

  const body = (
    <Container fluid className="container-modal-sidebar">
      <SimpleCarrousel
        onLoad={() => dispatch(setLoading({ loading: false }))}
        prefix="Camiontito/Routes"
        images={selectedPlace?.images}
        id="sidebar-carrousel"
        transformation="ar_1:1,c_crop"
      />
    </Container>
  );

  return (
    routes && (
      <Container
        fluid
        className={`sidebar-container ${
          isSelected ? "sidebar-container-selected" : ""
        }`}
      >
        <CustomModal
          size={isDesktop ? "lg" : isTablet ? "md" : "sm"}
          id="travel-map"
          show={modalShow}
          body={body}
          title={`${selectedPlace?.city}, ${selectedPlace?.state}, ${selectedPlace?.country}`}
          onHide={() => setModalShow(false)}
        />
        <Container className="initial-card-container" id={0}>
          <Container className="initial-card">
            <BsArrowBarRight />
            {t`sidebar.start.travel`}
            <span className="">{getDateString(initialDate)}</span>
          </Container>
        </Container>
        {routes.map((item) => (
          <SideBarItem
            isSelected={isSelected}
            id={item.id}
            key={item.id}
            item={item}
            selectSelectedPlace={selectedPlace}
            handleSelectPlace={handleSelectPlace}
          />
        ))}
      </Container>
    )
  );
}

export default SideBar;
