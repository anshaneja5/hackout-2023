import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getLinks = createAsyncThunk(
  "/getLinks",
  async (body, thunkAPI) => {
    try {
      console.log("redux",body);

      const response = await axios.post(
        "http://localhost:8000/api/getLink",
        body
      );

      console.log(response.data);
      return response.data.result;
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    data: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getLinks.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default appConfigSlice.reducer;
// export const { setSpinner,setSearching,setLoader,showToast,setCreatingPost } = appConfigSlice.actions;
