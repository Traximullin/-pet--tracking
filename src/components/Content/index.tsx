import { type FC } from "react"
import "./index.scss"
import Card from "../Card"

const Content: FC = () => {
    return (
        <div className="content">
            <div style={{ gridArea: "a", background: "red", }}>
                123
            </div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Content
