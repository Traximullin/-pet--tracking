import { type InputHTMLAttributes } from "react"

// contained in the logic of the component
type ForbiddenProps = "type" | "disabled"

export interface ITimeTracker extends Omit<InputHTMLAttributes<HTMLInputElement>, ForbiddenProps> {

}
