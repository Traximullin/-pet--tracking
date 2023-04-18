import { type FC } from "react"
import "./index.scss"
import { type IPanel } from "./interface"

const Panel: FC<IPanel> = (props) => {
    const { ...otherProps } = props

    return (
        <div className="panel" {...otherProps}>
            <div className="panel__information">
                <img
                    className="panel__avatar"
                    src="https://cs14.pikabu.ru/post_img/2023/02/25/12/1677358639170418743.jpg"
                    alt="avatar"
                />
                <div className="panel__user-info">
                    <p className="panel__title">Reportor for</p>
                    <p className="panel__username">
                        Tim Cock
                    </p>
                </div>
            </div>
            <div className="panel__control">
                1
            </div>
        </div>
    )
}

export default Panel
