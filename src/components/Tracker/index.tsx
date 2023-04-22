import { useState, type FC } from "react"
import { Button, TimeTracker } from ".."
import "./index.scss"

const Tracker: FC = () => {
    const [time, setTime] = useState(1)

    const handleTimeIncrement = (): void => {
        time < 12 && setTime(prev => prev + 1)
    }

    const handleTimeDecrement = (): void => {
        time > 1 && setTime(prev => prev - 1)
    }

    return (
        <div className="tracker">
            <div className="tracker__control">
                <Button
                    size="small"
                    onClick={handleTimeDecrement}
                >
                    -1
                </Button>
                <TimeTracker
                    value={time}
                    min={1}
                    max={12}
                />
                <Button
                    size="small"
                    onClick={handleTimeIncrement}
                >
                    +1
                </Button>
            </div>
            <Button size="big">Record</Button>
        </div>
    )
}

export default Tracker
