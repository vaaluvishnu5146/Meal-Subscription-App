import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// First, create the thunk
export const fetchServicesFromServer = createAsyncThunk(
    'services/fetchServicesFromServer',
    async () => {
      try {
        const response = await fetch('http://localhost:5173/ourservices.json')
        const services = await response.json();
        return services;
      } catch (error) {
        return error;
      }
    },
  )

export const ServicesSlice = createSlice({
  name: "services",
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {
    setServicesLoading: (state, action) => {
        state.loading = action.payload;
    },
    setServicesFetchingError: (state, action) => {
        state.error = action.payload;
    },
    saveServicesFetchedFromServer: (state, action) => {
      if (action.payload) {
        state.data = [...action.payload];
      }
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchServicesFromServer.pending, (state, action) => {
        // Add user to the state array
        state.loading = true;
      });
    builder.addCase(fetchServicesFromServer.fulfilled, (state, action) => {
      // Add user to the state array
      state.data = [...action.payload.services];
      state.loading = false;
    });
    builder.addCase(fetchServicesFromServer.rejected, (state, action) => {
        // Add user to the state array
        state.loading = false;
        console.log(action.payload);
        state.error = action.payload.error;
      })
  },
});

// Export the reducer to create ROOT REDUCER in STORE
export default ServicesSlice.reducer;

// Action creators are generated for each case reducer function
export const { setServicesFetchingError, setServicesLoading, saveServicesFetchedFromServer } = ServicesSlice.actions;