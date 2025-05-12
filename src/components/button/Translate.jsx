import { useState } from "react";
import "../../styles/button/Translate.scss";

const Translate = ({ children }) => {
  const [activeLang, setActiveLang] = useState("kr");
  const content = children[activeLang];

return (
    <div className={`translate-wrapper lang-${activeLang}`}>
      <div className="translate-container">
        <button
          className={`lang-btn ${activeLang === "kr" ? "active" : ""}`}
          onClick={() => setActiveLang("kr")}
        >
          KR
        </button>
        <hr />
        <button
          className={`lang-btn ${activeLang === "cn" ? "active" : ""}`}
          onClick={() => setActiveLang("cn")}
        >
          CN
        </button>
      </div>
      <div className="translate-content">
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Translate;