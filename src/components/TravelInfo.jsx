import { t } from "@lingui/macro";
import { BiCalendarAlt } from "@react-icons/all-files/bi/BiCalendarAlt";
import { BiMap } from "@react-icons/all-files/bi/BiMap";
import { BiWorld } from "@react-icons/all-files/bi/BiWorld";
import { GiPathDistance } from "@react-icons/all-files/gi/GiPathDistance";
import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getGenericById, selectTravelInfo } from "../slices/genericSlice";
import "./TravelInfo.scss";
import Wave from "./Wave";

function TravelInfo() {
  const dispatch = useDispatch();
  const travelInfo = useSelector(selectTravelInfo);

  useEffect(() => {
    dispatch(getGenericById("travel-info"));
  }, [dispatch]);

  const difference = Math.round(
    (new Date() - new Date("10/08/2022")) / (1000 * 60 * 60 * 24)
  ).toFixed(0);

  const info = (
    <Container fluid className="container-travel">
      <Row className="travel-information">
        <Col>
          <Card>
            <Card.Title>
              <BiMap size={35} />
            </Card.Title>
            <Card.Subtitle as="h3" className="">
              {t`travel.info.country`}
            </Card.Subtitle>
            <Container className="divider" />
            <Card.Text as="h3">{travelInfo?.country}</Card.Text>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Title>
              <BiCalendarAlt size={35} />
            </Card.Title>
            <Card.Subtitle as="h3" className="">
              {t`travel.info.days`}
            </Card.Subtitle>
            <Container className="divider" />
            <Card.Text as="h3">{difference}</Card.Text>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Title>
              <GiPathDistance size={35} />
            </Card.Title>
            <Card.Subtitle as="h3" className="">
              {t`travel.info.kms`}
            </Card.Subtitle>
            <Container className="divider" />
            <Card.Text as="h3">{travelInfo?.kms}</Card.Text>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Title>
              <BiWorld size={35} />
            </Card.Title>
            <Card.Subtitle as="h3" className="">
              {t`travel.info.countries`}
            </Card.Subtitle>
            <Container className="divider" />
            <Card.Text as="h3">{travelInfo?.countries}</Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );

  return <Wave children={info} wave1={false} />;
}

export default TravelInfo;
