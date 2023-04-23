import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux"
import { type RootState, type AppDispatch } from ".."

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
