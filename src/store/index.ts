import { configureStore } from "@reduxjs/toolkit"
import trackerReducer from "./features/trackerSlice"

export const store = configureStore({
    reducer: {
        tracker: trackerReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
