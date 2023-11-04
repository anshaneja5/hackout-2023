import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getLinks = createAsyncThunk(
  "/getLinks",
  async (body, thunkAPI) => {
    try {
      console.log("redux", body);
      thunkAPI.dispatch(setLoader(true));

      const response = await axios.post(
        "http://localhost:8000/api/getLink",
        body
      );

      console.log(response.data);
      return response.data.result;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoader(false));
    }
  }
);

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLinks.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default appConfigSlice.reducer;
export const { setLoader } = appConfigSlice.actions;
