import { type FC } from "react"
import "./index.scss"
import { type IPanel } from "./interface"

const Panel: FC<IPanel> = (props) => {
    const { ...otherProps } = props

    return (
        <div className="panel" {...otherProps}>
            <div className="panel__information">
                1
            </div>
            <div className="panel__control">
                1
            </div>
        </div>
    )
}

export default Panel
