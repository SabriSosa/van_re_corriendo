import Card from "react-bootstrap/Card";
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
        <Card.Text className="sub-title-side-bar">
          {item?.state}
        </Card.Text>
        <Card.Text className="sub-title-side-bar">
          {item?.country}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default SideBarItem;
