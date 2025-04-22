import "../../styles/button/GoButton.scss";
const GoButton = ({ ment, onClick }) => {
  return (
    <button className="goto-btn" onClick={onClick}>{ment}</button>
  );
};

export default GoButton;