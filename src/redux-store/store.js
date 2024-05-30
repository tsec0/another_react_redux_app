import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./service/dummyData";

// import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
