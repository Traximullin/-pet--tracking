import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { type TrackerStateModel } from "../model/tracker.model"

const initialState: TrackerStateModel = {
    data: [],
}

export const trackerSlice = createSlice({
    name: "tracker",
    initialState,
    reducers: {
        test: (state, action: PayloadAction<string>) => {
            state.data = []
        },
    },
})

export const { test, } = trackerSlice.actions

export default trackerSlice.reducer
