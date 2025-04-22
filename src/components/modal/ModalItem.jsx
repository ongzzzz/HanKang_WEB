import GoButton from "../button/GoButton";
import "../../styles/modal/ModalItem.scss";

const ModalItem = ({ title, image, script, url }) => {

  return (
    <div className="modalitem-container">
      <div className="modalitem-title">{title}</div>
      <div className="modalitem-content">
        <div 
          className="modalitem-img"
          style={{backgroundImage: `url(${image})`}}
        ></div>
        <p className="modalitem-script">{script}</p>
      </div>
      <GoButton ment="작품 보러가기" onClick={() => window.open(url, "_blank")}/>
    </div>
  );
};

export default ModalItem;