import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDateFromDB } from "../components/auxiliary";
import * as FirestoreService from "../services/firestore";

const initialState = {
  posts: [],
  selectedPost: null,
  status: "initial",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await FirestoreService.getPosts();
  return response.map(({ date, location, ...rest }) => {
    return {
      latitude: location._lat,
      longitude: location._long,
      date: getDateFromDB(date),
      ...rest,
    };
  });
});

export const addNewPost = createAsyncThunk(
  "posts/addNewpost",
  async (initialPost) => {
    const response = await FirestoreService.createPost(initialPost);
    return response;
  }
);

export const updatePost = createAsyncThunk("posts/updatePost", async (post) => {
  const response = await FirestoreService.updatePost(post);
  return response;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedPost(state, action) {
      const { postId } = action.payload;
      const existingPost = state.posts.find((post) => post.id == postId);
      if (existingPost) {
        state.selectedPost = existingPost;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

// Actions
export const { setSelectedPost } = postsSlice.actions;

//Selectors
export const selectAllPosts = (state) => state.posts.posts;
export const selectedPost = (state) => state.posts.selectedPost;
export const selectStatusPosts = (state) => state.posts.status;

//Reducer

export default postsSlice.reducer;
