import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import CustomTable from "../components/generic/CustomTable";
import {
  fetchPosts,
  selectAllPosts,
  selectStatusPosts,
} from "../slices/postSlice";
import "./NewItem.scss";

function ListPosts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector(selectAllPosts);
  const statusPosts = useSelector(selectStatusPosts);

  useEffect(() => {
    if (statusPosts === "initial" || statusPosts === "succeeded-item") {
      dispatch(fetchPosts());
    }
  }, [statusPosts, dispatch]);

  const schema = {
    id: "",
    date: "",
    title: "",
    country: "",
    state: "",
    city: "",
    edit: "",
  };

  const onClick = (postId) => {
    navigate(`/edit-post/${postId}`);
  };
  return (
    <Container fluid id="edit-post">
      <Row>
        <Col>
          <CustomTable
            headers={Object.keys(schema)}
            rows={posts}
            onClick={onClick}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ListPosts;
