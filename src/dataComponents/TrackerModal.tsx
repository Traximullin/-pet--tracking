import { type FC } from "react"
import { Modal, Tracker } from "../components"
import { type TCardHeaderType } from "../components/CardHeader/interface"
import { toggleActive } from "../store/features/modalSlice"
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks"

const TrackerModal: FC = () => {
    const { active, title, } = useAppSelector(state => state.modal)
    const dispatch = useAppDispatch()

    const handleCloseClick = (): void => {
        dispatch(toggleActive())
    }

    return (
        <Modal active={active} title={title} handleCloseClick={handleCloseClick}>
            <Tracker type={title as TCardHeaderType}/>
        </Modal>
    )
}

export default TrackerModal
