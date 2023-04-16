import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { getDateString, initialDate } from "./auxiliary";
import "./SideBarItem.scss";

function SideBarItem({ item, selectedPlace, setSelectedPlace }) {
  const days = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays ;
  };

  const dayOfTravel = days(new Date(1000 * item.date.seconds), initialDate) ;
  return (
    <Card
      id={item.id}
      className={`side-bar-card ${
        selectedPlace === item.id ? "card-active" : ""
      }`}
      onClick={() => setSelectedPlace(item.id)}
    >
      <Card.Img
        src={`https://res.cloudinary.com/djbmfd9y6/image/upload/c_fill,h_250,w_250/Camiontito/Routes/${item.id}_1.jpg`}
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title className="title-side-bar">{item.city}</Card.Title>
        <h6 className="title-side-bar-day">
          DIA {dayOfTravel} 
        </h6>
      </Card.ImgOverlay>
      <Card.Body className="side-bar-body">
        <Card.Text className="sub-title-side-bar side-bar-text">
          {item?.state}, {item?.country}
        </Card.Text>
        <Card.Text className="sub-title-side-bar side-bar-date">
          {getDateString(item?.date)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SideBarItem;
