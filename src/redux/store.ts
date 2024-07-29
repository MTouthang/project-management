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


/**
 * Steps for the redux tool setup 
 * 1- installing - npm install @reduxjs/toolkit react-redux
 * 2- creating store - src/redux/store.ts
 * 3- creating type version hooks for useDispatch and useSelector- src/redux/hooks.ts
 * 4- creating provider - src/redux/providers.tsx
 * 5- integrating the redux provider - src/app/layout.tsx
 * 6- ready to create slices
 */