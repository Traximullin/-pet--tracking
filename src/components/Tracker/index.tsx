import { useState, type FC } from "react"
import { Button, TimeTracker } from ".."
import "./index.scss"
import { type ITracker } from "./interface"
import { useAppDispatch } from "./../../store/hooks/hooks"
import { fixTime } from "../../store/features/trackerSlice"
import { toggleActive } from "../../store/features/modalSlice"

const Tracker: FC<ITracker> = (props) => {
    const { type, ...othersProps } = props

    const dispatch = useAppDispatch()
    const [hours, setHours] = useState(1)

    const handleTimeIncrement = (): void => {
        hours < 12 && setHours(prev => prev + 1)
    }

    const handleTimeDecrement = (): void => {
        hours > 1 && setHours(prev => prev - 1)
    }

    const handleFixTimeClick = (): void => {
        dispatch(fixTime({ hours, type, }))
        dispatch(toggleActive())
        setHours(1)
    }

    return (
        <div className="tracker" {...othersProps}>
            <div className="tracker__control">
                <Button
                    size="small"
                    onClick={handleTimeDecrement}
                >
                    -1
                </Button>
                <TimeTracker
                    value={hours}
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
            <Button
                onClick={handleFixTimeClick}
                size="big"
            >Record</Button>
        </div>
    )
}

export default Tracker
