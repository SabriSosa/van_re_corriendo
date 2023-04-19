import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  query,
  orderBy,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  GeoPoint,
  limit,
} from "firebase/firestore";
  
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const auth = getAuth(app);

export const getPosts = () => {
  const sectionsCollectionRef = collection(db, "post");
  const q = query(sectionsCollectionRef, orderBy("id", "desc"));
  return getDocs(q);
};



export const getRoutes = () => {
  const sectionsCollectionRef = collection(db, "route");
  const q = query(sectionsCollectionRef, orderBy("id", "asc"));
  return getDocs(q);
};

export const getProjects = () => {
  const sectionsCollectionRef = collection(db, "project");
  const q = query(sectionsCollectionRef, orderBy("order", "asc"));
  return getDocs(q);
};

export const createRoute = async ({ lon, lat, ...rest }) => {
  const routesColRef = collection(db, "route");

  return addDoc(routesColRef, {
    created: serverTimestamp(),
    location: new GeoPoint(lat, lon),
    ...rest,
  });
};
export const createPost = async ({ lon, lat, ...rest }) => {
  const postsColRef = collection(db, "post");
  return addDoc(postsColRef, {
    created: serverTimestamp(),
    location: new GeoPoint(lat, lon),
    ...rest,
  });
};

export const getMaxId = (id) => {
  const colRef = collection(db, id);
  const q = query(colRef, orderBy("id", "desc"), limit(1));
  return getDocs(q);
};

//https://github.com/Tammibriggs/firebase-with-react-hooks
