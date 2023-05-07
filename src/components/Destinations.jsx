import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPosts,
  selectAllPosts,
  selectStatusPosts,
  setSelectedPost,
} from "../slices/postSlice";
import "./Destinations.scss";
import PaginationPost from "./Pagination";
import Post from "./Post";
import PostModal from "./PostModal";
import TitleSpinner from "./generic/TitleSpinner";
import TitleComp from "./generic/Title";

export default function Destinations() {
  const [modalShow, setModalShow] = useState(false);

  const { postId } = useParams();

  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const statusPosts = useSelector(selectStatusPosts);

  useEffect(() => {
    if (statusPosts === "initial") {
      dispatch(fetchPosts());
    }
  }, [statusPosts, dispatch]);

  useEffect(() => {
    if (postId && statusPosts === "succeeded") {      
      dispatch(setSelectedPost({ postId: postId }));
      setModalShow(true);
    }
  }, [postId, statusPosts]);

  if (statusPosts === "loading") {
    return <TitleSpinner title='publicaciones' />;
  }

  const onHide = () => {
    setModalShow(false);
  };

  let postComponents = [];

  posts.map((post) =>
    postComponents.push(
      <Post key={post.id} setModalShow={setModalShow} post={post} />
    )
  );

  const totalRows = postComponents.length;
  const rowsPerPage = 6;

  const totalPages = Math.ceil(totalRows / rowsPerPage);

  return (
    <Container fluid className="container-destinations" id="destinos">
      <TitleComp title1="Publicaciones" />
      <PostModal show={modalShow} onHide={onHide} />
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          minWidth: "100px",
          maxWidth: "100px",
          width: "100%",
          height: "90px",
        }}
        data-ad-format="fluid"
        data-ad-layout-key="-7r+eg+14-4t+7k"
        data-ad-client="ca-pub-1162077696260246"
        data-ad-slot="1245238601"
      ></ins>
      <PaginationPost
        data={postComponents}
        rowsPerPage={rowsPerPage}
        totalPages={totalPages}
      />
    </Container>
  );
}
