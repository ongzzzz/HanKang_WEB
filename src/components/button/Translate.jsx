import { useState } from "react";
import useTranslateStore from "../../store/translate/useTraslateStore";
import "../../styles/button/Translate.scss";

const Translate = () => {
  const { lang, setLang } = useTranslateStore();

  return (
    <div className={`translate-wrapper lang-${lang}`}>
      <div className="translate-container">
        <button
          className={`lang-btn ${lang === "kr" ? "active" : ""}`}
          onClick={() => setLang("kr")}
        >
          KR
        </button>
        <hr />
        <button
          className={`lang-btn ${lang === "cn" ? "active" : ""}`}
          onClick={() => setLang("cn")}
        >
          CN
        </button>
      </div>
    </div>
  );
};

export default Translate;