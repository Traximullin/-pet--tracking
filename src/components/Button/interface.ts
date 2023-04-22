import { type ButtonHTMLAttributes } from "react"

type TButtonSize = "big" | "small"

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: TButtonSize
}
