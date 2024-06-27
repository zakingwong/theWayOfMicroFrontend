import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const fetchData = createAsyncThunk("configJson/fetch", async () => {
  const response = await fetch("http://10.0.57.197:3000/micro-config");
  const data = await response.json();
  return data;
});

const dataSlice = createSlice({
  name: "configJson",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});
export { fetchData };
export default store;
