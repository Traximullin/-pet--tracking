import { type HTMLAttributes } from "react"

export type TCardHeaderType = "work" | "play" | "styde" | "exercise" | "social" | "self-care"

export interface ICardHeader extends HTMLAttributes<HTMLDivElement> {
    type: TCardHeaderType
}
