import { type FC } from "react"
import "./index.scss"
import { Card, Panel } from ".."
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks"
import { type TCardHeaderType } from "../CardHeader/interface"
import { toggleActive } from "../../store/features/modalSlice"
import { TrackerModal } from "../../dataComponents"

const Content: FC = () => {

    const trackers = useAppSelector(state => state.tracker)
    const dispatch = useAppDispatch()

    const handleOpenModal = (type: TCardHeaderType): void => {
        dispatch(toggleActive(type))
    }

    return (
        <div className="content">
            <TrackerModal/>
            <Panel />
            {
                Object.keys(trackers).map((tracker, index) => (
                    <Card
                        onClick={() => { handleOpenModal(tracker as TCardHeaderType) }}
                        hours={
                            trackers[tracker as TCardHeaderType]
                                .reduce((prev, curr) => Number(prev) + Number(curr.hours), 0)
                        }
                        key={`content-tracker-item-${index}`}
                        type={tracker as TCardHeaderType}
                    />
                ))
            }
        </div>
    )
}

export default Content
