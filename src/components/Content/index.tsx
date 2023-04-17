import { type FC } from "react"
import "./index.scss"
import Card from "../Card"
import Panel from "../Panel"

const Content: FC = () => {
    return (
        <div className="content">
            <Panel />
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
