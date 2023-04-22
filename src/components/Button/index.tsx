import { type FC } from "react"
import "./index.scss"
import { type IButton } from "./interface"

const Button: FC<IButton> = (props) => {
    const { children, size, ...othersProps } = props

    const currentClasses = ["button"]

    if (size) {
        currentClasses.push("button_size_".concat(size))
    }

    return (
        <button className={currentClasses.join(" ")} {...othersProps}>
            {children}
        </button>
    )
}

export default Button
