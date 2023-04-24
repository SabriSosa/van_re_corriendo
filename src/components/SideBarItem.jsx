import Card from "react-bootstrap/Card";
import { getDateString, initialDate } from "./auxiliary";
import "./SideBarItem.scss";

function SideBarItem({ item, selectedPlace, handleSelectItem }) {
  const days = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  };

  const handelOnClick = () => {
    handleSelectItem(item);
  };

  const dayOfTravel = days(new Date(1000 * item.date.seconds), initialDate);
  return (
    <Card
      id={item.id}
      className={`sidebar-card ${
        selectedPlace === item.id ? "card-active" : ""
      }`}
      onClick={handelOnClick}
    >
      <Card.Img
        src={`https://res.cloudinary.com/djbmfd9y6/image/upload/c_fill,h_200,w_200/Camiontito/Routes/${item.id}_1.jpg`}
        alt="Card image"
      />
      <Card.ImgOverlay className="img-overlay-sidebar">
        <Card.Title className="title-sidebar">{item.city}</Card.Title>
        <h6 className="title-sidebar-day">DIA {dayOfTravel}</h6>
      </Card.ImgOverlay>
      <Card.Body className="sidebar-body">
        <Card.Text className="sub-title-sidebar sidebar-text">
          {item?.state}, {item?.country}
        </Card.Text>
        <Card.Text className="sub-title-sidebar sidebar-date">
          {getDateString(item?.date)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SideBarItem;
