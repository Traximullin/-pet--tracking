import { type FC } from "react"
import "./index.scss"

const TimeTracker: FC = () => {
    return (
        <input
            className="time-tracker"
            type="number"
            max={12}
            min={1}
            value={4}
            disabled
        />
    )
}

export default TimeTracker
