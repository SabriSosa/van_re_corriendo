import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { getDateString } from "./auxiliary";
import "./SideBarItem.scss";

function SideBarItem({ item , selectedPlace}) {
  return (
    <Card id={item.id} className={`side-bar-card ${selectedPlace === item.id ? "card-active":""}`}>
      <Card.Img
        src="https://res.cloudinary.com/djbmfd9y6/image/upload/v1681332652/Camiontito/Posts/02-01-23_7.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title className="title-side-bar">{item.city}</Card.Title>      
      </Card.ImgOverlay>
      <Card.Body className="side-bar-body">
        <Card.Text className="sub-title-side-bar side-bar-text">
          {item?.state},  {item?.country}
        </Card.Text>
        <Card.Text className="sub-title-side-bar side-bar-date">
          {getDateString(item?.date)}
        </Card.Text>
        </Card.Body>
    </Card>
  );


}

export default SideBarItem;
