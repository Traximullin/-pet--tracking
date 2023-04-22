import { type FC } from "react"
import "./index.scss"
import Card from "../Card"
import Panel from "../Panel"

const Content: FC = () => {
    return (
        <div className="content">
            <Panel />
            <Card type="work" />
            <Card type="play" />
            <Card type="styde" />
            <Card type="exercise" />
            <Card type="social" />
            <Card type="self-care" />
        </div>
    )
}

export default Content
