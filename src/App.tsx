import { useState, type FC } from "react"
import { Container, Content, Modal, Tracker } from "./components"

const App: FC = () => {
    const [state, setState] = useState(false)

    return (
        <Container>
            <button onClick={() => { setState(prev => !prev) }}>RSDASD</button>
            <Modal active={state} setActive={setState}>
                <Tracker />
            </Modal>
            <Content />
        </Container>
    )
}

export default App
