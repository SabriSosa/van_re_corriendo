import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import {
  GeoPoint,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  serverTimestamp,
  where,
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

const _getDocs = async (q) => {
  const querySnapshot = await getDocs(q);

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};

export const getPosts = async () => {
  const sectionsCollectionRef = collection(db, "post");
  const q = query(sectionsCollectionRef, orderBy("id", "asc"));
  return _getDocs(q);
};

export const getRoutes = async () => {
  const sectionsCollectionRef = collection(db, "route");
  const q = query(sectionsCollectionRef, orderBy("id", "asc"));
  return _getDocs(q);
};

export const getProjects = async () => {
  const sectionsCollectionRef = collection(db, "project");
  const q = query(sectionsCollectionRef, orderBy("id", "asc"));
  return _getDocs(q);
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

export const createProject = async (values) => {
  const postsColRef = collection(db, "project");
  return addDoc(postsColRef, {
    created: serverTimestamp(),
    ...values,
  });
};

export const getMaxId = async (id) => {
  const colRef = collection(db, id);
  const q = query(colRef, orderBy("id", "desc"), limit(1));
  const querySnapshot = await getDocs(q);
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data[0].id + 1;
};

export const getText = async (id) => {
  const d = await getDoc(doc(db, "text", id));
  return d.data();

};

export const getTexts = async (ids) => {
  const textCollection = collection(db, "text");
  const q = query(textCollection, where("id", "in", ids));
  return _getDocs(q);
};

export const getPost = async (id) => {
  const d = await getDoc(doc(db, "post", id));
  return d.data();
};

//https://github.com/Tammibriggs/firebase-with-react-hooks
