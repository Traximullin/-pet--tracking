import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type TCardHeaderType } from "../../components/CardHeader/interface"
import { type ModalStateModel } from "../model/modal.model"

const initialState: ModalStateModel = {
    active: false,
    title: "",
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleActive: (state, action: PayloadAction<TCardHeaderType | undefined>) => {
            state.active = !state.active
            state.title = action.payload
        },
    },
})

export const { toggleActive, } = modalSlice.actions

export default modalSlice.reducer
