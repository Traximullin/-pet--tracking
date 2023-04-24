import { type FC } from "react"
import CardHeader from "../CardHeader"
import "./index.scss"
import { type ICard } from "./interface"

const Card: FC<ICard> = (props) => {
    const { type, hours = 0, ...othersProps } = props

    return (
        <article className="card" {...othersProps}>
            <CardHeader type={type} />
            <div className="card__content">
                <div className="card__heading">
                    <p className="card__type">{type}</p>
                    <div className="card__dots"/>
                </div>
                <div className="card__information">
                    <p className="card__title">{hours}hrs</p>
                    <p className="card__sub-title">Last Week - 36hrs</p>
                </div>
            </div>
        </article>
    )
}

export default Card
