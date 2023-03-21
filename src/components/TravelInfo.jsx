import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import { BiMap, BiCalendarAlt, BiWorld } from "react-icons/bi";
import { GiPathDistance } from "react-icons/gi";

import "./TravelInfo.scss";
import Wave from "./Wave";

function TravelInfo() {
  const difference = Math.round(
    (new Date() - new Date("10/08/2022")) / (1000 * 60 * 60 * 24)
  ).toFixed(0);
  const country = "URUGUAY";
  const kms = 9000;
  const countries = 3;

  const info = (
    <Container fluid className="container-travel">
      <Row className="travel-information">
        <Col>
          <Card>
            <Card.Title>
              <BiMap size={50} />
            </Card.Title>
            <Card.Subtitle as="h3" className="">
              Donde estamos
            </Card.Subtitle>
            <Container className="divider"/>
            <Card.Text as="h1">{country}</Card.Text>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Title>
              <BiCalendarAlt size={50} />
            </Card.Title>
            <Card.Subtitle as="h3" className="">
              Dias de viaje
            </Card.Subtitle>
            <Container className="divider"/>
            <Card.Text as="h1">{difference}</Card.Text>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Title>
              <GiPathDistance size={50} />
            </Card.Title>
            <Card.Subtitle as="h3" className="">
              KMS Recorridos
            </Card.Subtitle>
            <Container className="divider"/>
            <Card.Text as="h1">{kms}</Card.Text>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Title>
              <BiWorld size={50} />
            </Card.Title>
            <Card.Subtitle as="h3" className="">
              Paises visitados
            </Card.Subtitle>
            <Container className="divider"/>
            <Card.Text as="h1">{countries}</Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );

  return <Wave children={info} />;
}

export default TravelInfo;
