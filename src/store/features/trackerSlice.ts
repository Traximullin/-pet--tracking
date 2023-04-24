import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { type ActionFixTime, type TrackerStateModel } from "../model/tracker.model"

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
        fixTime: (state, action: PayloadAction<ActionFixTime>) => {
            state[action.payload.type] = [
                ...state[action.payload.type],
                {
                    date: new Date().getTime(),
                    hours: action.payload.hours,
                }
            ]
        },
    },
})

export const { fixTime, } = trackerSlice.actions

export default trackerSlice.reducer
