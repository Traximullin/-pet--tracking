import { type FC } from "react"
import "./index.scss"
import { type IModal } from "./interface"
import { closeSvg } from "../../assets/svg"

const Modal: FC<IModal> = (props) => {
    const { children, active, setActive, ...otherProps } = props

    const currentClasses = ["modal"]

    if (active) {
        currentClasses.push("modal_active")
    }

    const handleCloseClick = (): void => {
        setActive(false)
    }

    return (
        <div
            className={currentClasses.join(" ")}
            onClick={handleCloseClick}
            tabIndex={-1}
            {...otherProps}
        >
            <div
                className="modal__content"
                onClick={(e) => { e.stopPropagation() }} //! закрытие не работало на саму модалку
            >
                <span
                    className="modal__close"
                    onClick={handleCloseClick}
                >
                    <img src={closeSvg}/>
                </span>
                {children}
            </div>
        </div>
    )
}

export default Modal
