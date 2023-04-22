import { useState, type FC } from "react"
import { Button, Container, Modal, TimeTracker } from "./components"
import Content from "./components/Content"

const App: FC = () => {
    const [state, setState] = useState(false)

    return (
        <Container>
            <button onClick={() => { setState(prev => !prev) }}>RSDASD</button>
            <Modal active={state} setActive={setState}>
                <TimeTracker/>
                <Button>Привет</Button>
            </Modal>
            <Content />
        </Container>
    )
}

export default App
