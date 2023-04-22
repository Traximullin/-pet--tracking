import { type Dispatch, type HTMLAttributes, type SetStateAction } from "react"

export interface IModal extends HTMLAttributes<HTMLDivElement> {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
}
