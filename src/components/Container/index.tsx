import { type FC } from "react"
import { type IContainer } from "./interface"
import "./index.scss"

const Container: FC<IContainer> = (props) => {
    const { children, ...otherProps } = props

    return (
        <main
            className="container"
            {...otherProps}
        >
            {children}
        </main>
    )
}

export default Container
