import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import CustomTable from "../components/generic/CustomTable";
import { selectStatusPosts } from "../slices/postSlice";
import { fetchRoutes, selectAllRoutes } from "../slices/routeSlice";
import "./NewItem.scss";

function ListRoutes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const routes = useSelector(selectAllRoutes);
  const statusPosts = useSelector(selectStatusPosts);

  useEffect(() => {
    if (statusPosts === "initial") {
      dispatch(fetchRoutes());
    }
  }, [statusPosts, dispatch]);

  const schema = {
    id: "",
    date: "",
    country: "",
    state: "",
    city: "",
    edit: "",
  };

  const onClick = (postId) => {
    navigate(`/add-edit/${postId}`);
  };
  return (
    <Container fluid id="list-routes">
      <Row>
        <Col>
          <CustomTable
            headers={Object.keys(schema)}
            rows={routes}
            onClick={onClick}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ListRoutes;
