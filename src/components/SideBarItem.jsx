import { t } from "@lingui/macro";

import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { isMobileOnly, useMobileOrientation } from "react-device-detect";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedPlace, setSelectedPlace } from "../slices/routeSlice";
import "./SideBarItem.scss";
import { getDateString, initialDate } from "./auxiliary";
import "./SideBarItem.scss";

function SideBarItem({ item, handleSelectItem , isSelected}) {
  const dispatch = useDispatch();

  const days = (date_1, date_2) => {
    const diffTime = Math.abs(date_2 - date_1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const selectedPlace = useSelector(selectSelectedPlace);

  const handelOnClick = () => {
    handleSelectItem(item);
  };
  const { isLandscape } = useMobileOrientation();

  const options = isMobileOnly
    ? {
        threshold: 1,
      }
    : {
      rootMargin: isLandscape? '-50% 0px -50% 0px' : '0px -50% 0px -50%'
    };

  const { ref, inView, entry } = useInView(options);

  useEffect(() => {
    if (inView && selectedPlace.id !== item.id) {
      console.log("inView", inView);
      console.log("item", item.city);
      dispatch(setSelectedPlace({ routeId: item.id }));
    }
  }, [inView]);

  const dayOfTravel = days(new Date(item.date), initialDate);
  return (
    <Card
      ref={ref}
      id={item.id}
      className={`sidebar-card 
      ${selectedPlace?.id === item.id ? "card-active" : ""} `}
      onClick={handelOnClick}
    >
      <Card.Body className="sidebar-body">
        <Card.Text className="sub-title-sidebar sidebar-text">
          {item?.state}, {item?.country}
        </Card.Text>
        <Card.Text className="sub-title-sidebar sidebar-date">
          {getDateString(item.date)}
        </Card.Text>
      </Card.Body>
      <Card.ImgOverlay className="img-overlay-sidebar">
        <Card.Title className="title-sidebar">{item.city}</Card.Title>
        <h6 className="title-sidebar-day"> {t`side.bar.day`} {dayOfTravel}</h6>
      </Card.ImgOverlay>
      <Card.Img
        src={item.imageRoute}
        alt="Card image"
        className={`${isSelected ? "img-sidebar-selected" : "img-sidebar"}`}
      />
    </Card>
  );
}

export default SideBarItem;
