import { t } from "@lingui/macro";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NotificationManager } from "react-notifications";
import { getDateFromDB } from "../components/auxiliary";
import * as FirestoreService from "../services/FirestoreService";

const initialState = {
  posts: [],
  selectedPost: null,
  status: "initial",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await FirestoreService.getPosts();
  return await Promise.all(
    response.map(async ({ date, location, created, ...rest }) => {
      return {
        latitude: location._lat,
        longitude: location._long,
        date: getDateFromDB(date),
        ...rest,
      };
    })
  );
});

export const getPostById = createAsyncThunk("posts/getPostById", async (id) => {
  const response = await FirestoreService.getPost(id);
  const { date, location, created, ...rest } = response;
  return {
    latitude: location._lat,
    longitude: location._long,
    date: getDateFromDB(date),
    ...rest,
  };
});

export const addNewPost = createAsyncThunk(
  "posts/addNewpost",
  async (initialPost) => {
    const response = await FirestoreService.createPost(initialPost);
    const { date, location, created, ...rest } = response;
    return {
      latitude: location._lat,
      longitude: location._long,
      date: date.toDateString(),
      ...rest,
    };
  }
);

export const updatePost = createAsyncThunk("posts/updatePost", async (post) => {
  const response = await FirestoreService.updatePost(post);
  const { date, location, created, ...rest } = response;
  return {
    latitude: location._lat,
    longitude: location._long,
    date: date.toDateString(),
    ...rest,
  };
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
    resetState(state, action) {
      state.status = "succeeded";
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
        state.status = "succeeded-item";
        state.posts.push(action.payload);
        NotificationManager.success(
          t`new.post.success.title`,
          t`new.item.success.message`
        );
      })
      .addCase(addNewPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addNewPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        NotificationManager.error(
          t`new.post.error.title`,
          action.error.message
        );
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        NotificationManager.success(
          t`new.post.success.title`,
          t`update.item.success.message`
        );
        state.posts[
          state.posts.findIndex((el) => el.id === action.payload.id)
        ] = action.payload;
      })
      .addCase(updatePost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        NotificationManager.error(
          t`update.post.error.title`,
          action.error.message
        );
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.posts = state.posts.concat(action.payload);
        state.status = "success";
      })
      .addCase(getPostById.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPostById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        NotificationManager.error(
          t`update.post.error.title`,
          action.error.message
        );
      });
  },
});

// Actions
export const { setSelectedPost, resetState } = postsSlice.actions;

//Selectors
export const selectAllPosts = (state) => state.posts.posts;
export const selectSelectedPost = (state) => state.posts.selectedPost;
export const selectStatusPosts = (state) => state.posts.status;

export const selectPostById = (state, postId) => {
  return state.posts.posts.find((project) => project.id == postId);
};

//Reducer

export default postsSlice.reducer;
