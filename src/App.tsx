import { useState, type FC } from "react"
import { Container, Modal } from "./components"
import Content from "./components/Content"

const App: FC = () => {
    const [state, setState] = useState(false)

    return (
        <Container>
            <button onClick={() => { setState(prev => !prev) }}>RSDASD</button>
            <Modal active={state} setActive={setState} />
            <Content />
        </Container>
    )
}

export default App
