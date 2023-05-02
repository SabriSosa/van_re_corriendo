import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { setSelectedPost } from "../slices/postSlice";
import "./Post.scss";
import SimpleCarrousel from "./SimpleCarrousel";
import SocialMedia from "./SocialMedia";
import HtmlContainer from "./generic/HtmlContainer";

export default function Post({ post, setModalShow }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedPost({ postId: post.id }));
    setModalShow(true);
  };

  const body = (id) => {
    return (
      <Card.Body className={`post-${id}`}>
        <Card.Title className="title-destination-post">{post.title}</Card.Title>
        <Container fluid className="description-destination">
          <HtmlContainer
            text={post?.description}
            className="text-description-post"
          />
          <Button
            variant="primary"
            onClick={handleClick}
            className="see-more-button"
          >
            Ver Mas
          </Button>
        </Container>
      </Card.Body>
    );
  };

  return (
    <Col lg={4} md={6} sm={6} xs={12} id={post.title}>
      <Card className="card-post">
        <SocialMedia post={post} />
        <div className="img-hover-zoom img-hover-zoom--basic">
          <SimpleCarrousel
            prefix="Camiontito/Posts"
            id="post-carrousel"
            key={post.title}
            images={post.images}
            isVideo={post.isVideo}
            transformation="ar_3:4,c_fill"
          />
          {body("pc")}
        </div>
      </Card>
      {body("mobile")}
    </Col>
  );
}
