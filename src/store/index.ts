import { configureStore } from "@reduxjs/toolkit"
import trackerReducer from "./features/trackerSlice"
import modalReducer from "./features/modalSlice"

export const store = configureStore({
    reducer: {
        tracker: trackerReducer,
        modal: modalReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
