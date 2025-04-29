import { useState } from "react";
import "../../styles/button/Translate.scss";

const Translate = () => {
  const [activeLang, setActiveLang] = useState("kr");
  return (
    <div className="translate-container">
      <button className={`lang-btn ${activeLang === "kr" ? "active" : ""}`} onClick={() => setActiveLang("kr")}>KR</button>
      <hr />
      <button className={`lang-btn ${activeLang === "cn" ? "active" : ""}`} onClick={() => setActiveLang("cn")}>CN</button>
    </div>
  );
};

export default Translate;