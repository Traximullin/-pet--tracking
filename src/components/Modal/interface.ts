import { type Dispatch, type DetailedHTMLProps, type HTMLAttributes, type SetStateAction } from "react"

export interface IModal extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
}
