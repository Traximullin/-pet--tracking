import { type FC } from "react"
import "./index.scss"
import { type IButton } from "./interface"

const Button: FC<IButton> = (props) => {
    const { children, ...othersProps } = props

    return (
        <button className="button" {...othersProps}>
            {children}
        </button>
    )
}

export default Button
