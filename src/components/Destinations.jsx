import React from "react";
import { Container, Spinner } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import "./Destinations.scss";

import TitleComp from "./Title";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import Post from "./Post";
import PostModal from "./PostModal";

export default function Destinations() {
  const [posts, setPosts] = React.useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedPost, setSelectedPost] = React.useState();

  const getPosts = async () => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

    const sectionsCollectionRef = collection(db, "post");
    const q = query(sectionsCollectionRef, orderBy("id", "asc"));
    const querySnapshot = await getDocs(q);


    // reset the todo items value
    setPosts([]);

    // map through the query result and assign the value to the todoItems state
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

  React.useEffect(() => {
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
  return (
    <Container className="container-destinations">
      <TitleComp title1="Destinos" />
      <PostModal selectedPost={selectedPost} show={modalShow} onHide={onHide} />
      <Row xs={1} md={3} className="g-4 destinations">
        {posts.map((post) => (
          <Post
            key={post.title}
            setSelectedPost={setSelectedPost}
            setModalShow={setModalShow}
            post={post}
          />
        ))}
      </Row>
    </Container>
  );
}
