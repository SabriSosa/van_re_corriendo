import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/postSlice";
import genericReducer from "./slices/genericSlice";
// import projectReducer from "./slices/projectSlice";
import routeReducer from "./slices/routeSlice";

export default configureStore({
  reducer: {
    routes: routeReducer,
    posts: postReducer,
    generic: genericReducer,
    // projects: projectReducer,
  },
});
