import { type DetailedHTMLProps, type HTMLAttributes } from "react"
import { type TCardHeaderType } from "../CardHeader/interface"

export interface ICard extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    type: TCardHeaderType
    hours: number
}
