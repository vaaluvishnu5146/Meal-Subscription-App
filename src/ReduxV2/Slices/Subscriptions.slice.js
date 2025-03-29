import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// First, create the thunk
export const fetchSubscriptionsFromServer = createAsyncThunk(
    'services/fetchSubscriptionsFromServer',
    async () => {
        try {
            const response = await fetch('http://localhost:5173/subscriptions.json')
            const subscriptions = await response.json();
            return subscriptions;
        } catch (error) {
            return error;
        }
    },
)

export const SubscriptionSlice = createSlice({
    name: "subscriptions",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        setSubscriptionsLoading: (state, action) => {
            state.loading = action.payload;
        },
        setSubscriptionsFetchingError: (state, action) => {
            state.error = action.payload;
        },
        saveSubscriptionsFetchedFromServer: (state, action) => {
            if (action.payload) {
                state.data = [...action.payload];
            }
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchSubscriptionsFromServer.fulfilled, (state, action) => {
            // Add user to the state array
            state.loading = false;
            state.data = [...action.payload.subscriptions]
        })
        builder.addCase(fetchSubscriptionsFromServer.pending, (state, action) => {
            // Add user to the state array
            state.loading = true;
        });
        builder.addCase(fetchSubscriptionsFromServer.rejected, (state, action) => {
            // Add user to the state array
            state.loading = false;
            console.log(action.payload);
            state.error = action.payload.error;
        })
    },
});

// Export the reducer to create ROOT REDUCER in STORE
export default SubscriptionSlice.reducer;

// Action creators are generated for each case reducer function
export const { setSubscriptionsFetchingError, setSubscriptionsLoading, saveSubscriptionsFetchedFromServer } = SubscriptionSlice.actions;