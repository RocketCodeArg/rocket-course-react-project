import './index.css';

const onCloseHandler = (onClose) => {
    onClose && onClose();
}

const Modal = (props) => {
    const { children, visible, onClose } = props;

    return visible ? (
        <div className="landing-modal-container">
            <div className="landing-modal">
                <div className="landing-modal--close-icon" onClick={() => onCloseHandler(onClose)}></div>
                {children}
            </div>
            <div className="landing-modal--overlay"></div>
        </div>
    ) : null;
}

export default Modal;
