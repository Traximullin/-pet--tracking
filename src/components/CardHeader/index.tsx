import { type FC } from "react"
import "./index.scss"
import { type TCardHeaderType, type ICardHeader } from "./interface"
import { exerciseSvg, playSvg, selfCareSvg, socialSvg, stydeSvg, workSvg } from "../../assets/svg"

const iconStruct: Record<TCardHeaderType, string> = {
    work: workSvg,
    play: playSvg,
    styde: stydeSvg,
    exercise: exerciseSvg,
    social: socialSvg,
    "self-care": selfCareSvg,
}

const CardHeader: FC<ICardHeader> = (props) => {
    const { type, ...othersProps } = props

    const currentClasses = ["card-header"]

    if (type) {
        currentClasses.push("card-header_type_".concat(type))
    }

    return (
        <div className={currentClasses.join(" ")} {...othersProps}>
            <img
                className="card-header__icon"
                src={iconStruct[type]}
                alt={type}
            />
        </div>
    )
}

export default CardHeader
