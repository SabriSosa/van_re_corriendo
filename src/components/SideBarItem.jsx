import Card from "react-bootstrap/Card";
import "./SideBarItem.scss";
import { getDateString, initialDate } from "./auxiliary";

function SideBarItem({ item, selectedPlace, handleSelectItem }) {
  const days = (date_1, date_2) => {
    const diffTime = Math.abs(date_2 - date_1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const handelOnClick = () => {
    handleSelectItem(item);
  };

  const dayOfTravel = days(new Date(item.date), initialDate);
  return (
    <Card
      id={item.id}
      className={`sidebar-card ${
        selectedPlace === item.id ? "card-active" : ""
      }`}
      onClick={handelOnClick}
    >
      <Card.Img src={item.imageRoute} alt="Card image" className="img-sidebar" />
      <Card.ImgOverlay className="img-overlay-sidebar">
        <Card.Title className="title-sidebar">{item.city}</Card.Title>
        <h6 className="title-sidebar-day">DIA {dayOfTravel}</h6>
      </Card.ImgOverlay>
      <Card.Body className="sidebar-body">
        <Card.Text className="sub-title-sidebar sidebar-text">
          {item?.state}, {item?.country}
        </Card.Text>
        <Card.Text className="sub-title-sidebar sidebar-date">
          {getDateString(item.date)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SideBarItem;
