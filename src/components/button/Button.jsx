import "../../styles/button/Button.scss";

const Button = ({onClick}) => {
  return (
    <button className="exit-btn" onClick={onClick}></button>
  );
};

export default Button;