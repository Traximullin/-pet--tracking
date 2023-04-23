import { type HTMLAttributes } from "react"

export interface IModal extends HTMLAttributes<HTMLDivElement> {
    active: boolean
    title?: string
    handleCloseClick: () => void
}
