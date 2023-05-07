import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as FirestoreService from "../services/FirestoreService";

const initialState = {
  projects: [],
  status: "initial",
  error: null,
};

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    return await FirestoreService.getProjects();
  }
);

export const addNewProject = createAsyncThunk(
  "projects/addNewproject",
  async (initialProject) => {
    const response = await FirestoreService.createProject(initialProject);
    return response;
  }
);

export const updateProject = createAsyncThunk(
  "projects/updateProject",
  async (project) => {
    const response = await FirestoreService.updateProject(project);
    return response;
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProjects.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.projects = state.projects.concat(action.payload);
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewProject.fulfilled, (state, action) => {
        state.projects.push(action.payload);
      });
  },
});

export default projectsSlice.reducer;

export const selectAllProjects = (state) => state.projects.projects;

export const selectProjectById = (state, projectId) =>
  state.projects.projects.find((project) => project.id === projectId);

export const selectStatusProject = (state) => state.projects.status;
