import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
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
  extraReducers() {},
});


export const { setLoading } = genericSlice.actions;

export default genericSlice.reducer;

export const selectLoading = (state) => state.generic.loading;
