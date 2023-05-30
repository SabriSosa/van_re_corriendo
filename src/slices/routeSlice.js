import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDateFromDB } from "../components/auxiliary";
import * as FirestoreService from "../services/FirestoreService";

const initialState = {
  routes: [],
  coordinates: [],
  selectedPlace: null,
  status: "initial",
  error: null,
};

export const fetchRoutes = createAsyncThunk("routes/fetchRoutes", async () => {
  const response = await FirestoreService.getRoutes();

  const routesWithImages = await Promise.all(
    response.map(async ({ date, location, images, ...rest }) => {
      return {
        latitude: location._lat,
        longitude: location._long,
        date: getDateFromDB(date),
        //imageRoute: `https://res.cloudinary.com/djbmfd9y6/image/upload/c_fill,h_150,w_200/Camiontito/Routes/${images[0]}`,
        imageRoute: `https://res.cloudinary.com/djbmfd9y6/image/upload/ar_1:1,c_crop/Camiontito/Routes/${images[0]}`,
        images: images,

        ...rest,
      };
    })
  );

  return routesWithImages;
});

export const addNewRoute = createAsyncThunk(
  "routes/addNewroute",
  async (initialRoute) => {
    const response = await FirestoreService.createRoute(initialRoute);
    return response;
  }
);

export const updateRoute = createAsyncThunk(
  "routes/updateRoute",
  async (route) => {
    const response = await FirestoreService.updateRoute(route);
    return response;
  }
);

export const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    setSelectedPlace(state, action) {
      const { routeId } = action.payload;
      const existingRoute = state.routes.find((route) => route.id == routeId);
      if (existingRoute) {
        state.selectedPlace = existingRoute;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRoutes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchRoutes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.routes = state.routes.concat(action.payload);
        state.coordinates = action.payload.map((r) => [
          r.longitude,
          r.latitude,
        ]);

        state.selectedPlace = state.routes[0];
      })
      .addCase(fetchRoutes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewRoute.fulfilled, (state, action) => {
        state.routes.push(action.payload);
        state.coordinates.push([
          action.payload.location._long,
          action.payload.location._lat,
        ]);
      });
  },
});

// Actions
export const { setSelectedPlace } = routesSlice.actions;
export const { routeAdded, routeUpdated, reactionAdded } = routesSlice.actions;

//Selectors
export const selectSelectedPlace = (state) => state.routes.selectedPlace;

export const selectAllRoutes = (state) => state.routes.routes;
export const selectAllCoordinates = (state) => state.routes.coordinates;

export const selectRouteById = (state, routeId) =>
  state.routes.routes.find((route) => route.id == routeId);

export default routesSlice.reducer;
