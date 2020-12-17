import './index.css';

const onClickHandler = (onClick) => {
    onClick && onClick();
}

const Button = (props) => {
    const { onClick, buttonText } = props;
    return (
        <div className="lading-button" onClick={() => onClickHandler(onClick)}>
            {buttonText}
        </div>
    );
}

export default Button;
