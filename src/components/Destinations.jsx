import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import * as FirestoreService from "../services/firestore";
import "./Destinations.scss";
import PaginationPost from "./Pagination";
import Post from "./Post";
import PostModal from "./PostModal";
import TitleComp from "./generic/Title";

export default function Destinations() {
  const [posts, setPosts] = React.useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedPost, setSelectedPost] = React.useState();

  const getPosts = async () => {
    const querySnapshot = await FirestoreService.getPosts();

    // reset the todo items value
    setPosts([]);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setPosts((prev) => [
        ...prev,
        {
          ...data,
        },
      ]);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (posts.length < 1) {
    return (
      <Container className="text-center">
        <Spinner animation="border" style={{ width: "4rem", height: "4rem" }} />
      </Container>
    );
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

  return (
    <Container className="container-destinations">
      <TitleComp title1="Destinos" />
      <PostModal selectedPost={selectedPost} show={modalShow} onHide={onHide} />
      <PaginationPost
        data={postComponents}
        rowsPerPage={rowsPerPage}
        totalPages={totalPages}
      />
    </Container>
  );
}
