import { type FC } from "react"
import "./index.scss"
import { Card, Panel } from ".."
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks"
import { type TCardHeaderType } from "../CardHeader/interface"
import { toggleActive } from "../../store/features/modalSlice"

const Content: FC = () => {

    const trackers = useAppSelector(state => state.tracker)
    const dispatch = useAppDispatch()

    const handleOpenModal = (type: TCardHeaderType): void => {
        dispatch(toggleActive(type))
    }

    return (
        <div className="content">
            <Panel />
            {
                Object.keys(trackers).map((tracker, index) => (
                    <Card
                        onClick={() => { handleOpenModal(tracker as TCardHeaderType) }}
                        key={`content-tracker-item-${index}`}
                        type={tracker as TCardHeaderType}
                    />
                ))
            }
        </div>
    )
}

export default Content
