import { useState, type FC } from "react"
import { Container, Content, Modal, Tracker } from "./components"
import { toggleActive } from "./store/features/modalSlice"
import { useAppDispatch, useAppSelector } from "./store/hooks/hooks"

const App: FC = () => {

    const { active, title, } = useAppSelector(state => state.modal)
    const dispatch = useAppDispatch()

    const handleCloseClick = (): void => {
        dispatch(toggleActive())
    }

    return (
        <Container>
            <Modal active={active} title={title} handleCloseClick={handleCloseClick}>
                <Tracker />
            </Modal>
            <Content />
        </Container>
    )
}

export default App
