import GoButton from "../button/GoButton";
import useTranslateStore from "../../store/translate/useTraslateStore";
import "../../styles/modal/ModalItem.scss";

const ModalItem = ({ title, image, script, url }) => {
  const { lang } = useTranslateStore();

  return (
    <div className="modalitem-container">
      <div className={`modalitem-title lang-${lang}`}>{title[lang]}</div>
      <div className="modalitem-content">
        <div 
          className="modalitem-img"
          style={{backgroundImage: `url(${image})`}}
        ></div>
        <p className={`modalitem-script lang-${lang}`}>{script[lang]}</p>
      </div>
      <GoButton 
        ment={lang === "kr" ? "작품 보러가기" : "去看作品"} 
        onClick={() => window.open(url, "_blank")}/>
    </div>
  );
};

export default ModalItem;