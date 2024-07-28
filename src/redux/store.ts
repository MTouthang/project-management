import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// create the redux store 
export const store = configureStore({
    reducer: {}
})

// setup listeners for refetch behaviors
setupListeners(store.dispatch)

// Define RootState and AppDispatch types  - so that they can reference as needed
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch