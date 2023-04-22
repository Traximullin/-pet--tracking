import { type FC } from "react"
import "./index.scss"
import { type ITimeTracker } from "./interface"

const TimeTracker: FC<ITimeTracker> = (props) => {
    const { ...othersProps } = props

    return (
        <input
            className="time-tracker"
            type="number"
            disabled
            {...othersProps}
        />
    )
}

export default TimeTracker
