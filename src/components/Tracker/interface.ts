import { type HTMLAttributes } from "react"
import { type TCardHeaderType } from "../CardHeader/interface"

export interface ITracker extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    type: TCardHeaderType
}
