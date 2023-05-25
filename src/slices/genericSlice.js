import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as FirestoreService from "../services/FirestoreService";

const initialState = {
  loading: false,
  travelInfo: null,
};
export const genericSlice = createSlice({
  name: "generic",
  initialState,
  reducers: {
    setLoading(state, action) {
      const { loading } = action.payload;
      state.loading = loading;
    },
  },
  extraReducers(builder) {
    builder.addCase(getGenericById.fulfilled, (state, action) => {
      state.travelInfo = action.payload;
    });
  },
});

export const getGenericById = createAsyncThunk(
  "generic/getGenericById",
  async (id) => {
    return await FirestoreService.getGeneric(id);
  }
);

export const { setLoading } = genericSlice.actions;

export default genericSlice.reducer;

export const selectLoading = (state) => state.generic.loading;
export const selectTravelInfo = (state) => state.generic.travelInfo;
