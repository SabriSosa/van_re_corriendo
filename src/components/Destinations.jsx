import React from "react";
import { Button, Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import "./Destinations.scss";

import TitleComp from "./Title";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import Post from "./Post";

export default function Destinations() {
  const [posts, setPosts] = React.useState([]);

  const getPosts = async () => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "post"));

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

  console.log("posts", posts);

  return (
    <Container className="container-destinations">
      <TitleComp title1="Destinos" />
      <Row xs={1} md={3} className="g-4 destinations">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </Row>
    </Container>
  );
}
