import React from "react";
// import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// import firebaseConfig from "./firebaseConfig"; //Este es el archivo que creaste con anterioridad que contiene las credenciales de Firebase
import { FirestoreProvider, useFirebaseApp } from "reactfire";
import NavBarMenu from "./components/NavBar";
import "./App.scss";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

// export default (props) => {
//   const [posts, setPosts] = React. ([]);

//   const getPosts = async () => {
//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);

//     // Initialize Cloud Firestore and get a reference to the service
//     const db = getFirestore(app);
//     const querySnapshot = await getDocs(collection(db, "post"));

//     // reset the todo items value
//     setPosts([]);

//     // map through the query result and assign the value to the todoItems state
//     querySnapshot.forEach((doc) => {
//       const data = doc.data();
//       console.log(
//         "data", data
//       )
//       setPosts((prev) => [
//         ...prev,
//         {
//          ...data
//         },
//       ]);
//     });

//   };

//   React.useEffect(() => {
//     getPosts();
//   }, []);

//   console.log("posts", posts);

//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}- {post.description}</li>
//       ))}
//     </ul>
//   );
// };

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <BrowserRouter>

    <FirestoreProvider sdk={firestoreInstance}>
      <NavBarMenu />
      <Router />
      <Footer/>
    </FirestoreProvider>
    </BrowserRouter>

  );
}

export default App;
