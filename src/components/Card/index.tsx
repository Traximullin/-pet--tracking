import { type FC } from "react"
import "./index.scss"

const Card: FC = () => {
    return (
        <article className="card">
            <div className="card__header"/>
            <div className="card__content">
                <div className="card__heading">
                    <p>Work</p>
                    <div className="card__dots"/>
                </div>
                <div className="card__information">
                    <p className="card__title">32hrs</p>
                    <p className="card__sub-title">Last Week - 36hrs</p>
                </div>
            </div>
        </article>
    )
}

export default Card
