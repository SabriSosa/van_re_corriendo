import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import * as FirestoreService from "../services/firestore";
import "./Destinations.scss";
import PaginationPost from "./Pagination";
import Post from "./Post";
import PostModal from "./PostModal";
import CustomSpinner from "./generic/CustomSpinner";
import TitleComp from "./generic/Title";

export default function Destinations() {
  const [posts, setPosts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedPost, setSelectedPost] = useState();
  const [waiting, setWaiting] = useState(false);

  const getPosts = async () => {
    const _posts = await FirestoreService.getPosts();
    setPosts(_posts);
    setWaiting(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (posts.length < 1) {
    return <CustomSpinner />;
  }

  const onHide = () => {
    setModalShow(false);
    setSelectedPost(undefined);
  };

  let postComponents = [];

  posts.map((post) =>
    postComponents.push(
      <Post
        key={post.title}
        setSelectedPost={setSelectedPost}
        setModalShow={setModalShow}
        post={post}
      />
    )
  );

  const totalRows = postComponents.length;
  const rowsPerPage = 6;

  const totalPages = Math.ceil(totalRows / rowsPerPage);

  if (waiting) {
    return <CustomSpinner />;
  }

  return (
    <Container fluid className="container-destinations" id="destinos">
      <TitleComp title1="Destinos"/>
      <PostModal selectedPost={selectedPost} show={modalShow} onHide={onHide} />
      <PaginationPost
        data={postComponents}
        rowsPerPage={rowsPerPage}
        totalPages={totalPages}
      />
    </Container>
  );
}
