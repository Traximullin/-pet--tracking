import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { type TrackerStateModel } from "../model/tracker.model"

const initialState: TrackerStateModel = {
    work: [],
    play: [],
    styde: [],
    exercise: [],
    social: [],
    "self-care": [],
}

export const trackerSlice = createSlice({
    name: "tracker",
    initialState,
    reducers: {
        test: (state, action: PayloadAction<string>) => {
            state.work = []
        },
    },
})

export const { test, } = trackerSlice.actions

export default trackerSlice.reducer
