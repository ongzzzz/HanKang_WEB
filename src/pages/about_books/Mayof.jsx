import MayofWriter from "../../components/about_books/Mayof/MayofWriter";
import MayofAni from "../../components/about_books/Mayof/MayofAni";
import Button from "../../components/button/Button";

import "../../styles/about_books/Mayof/Mayof.scss";

const Mayof = () => {
  return (
    <div className="mayof-container">
      <Button />
      <MayofWriter />
      <MayofAni />
    </div>
  );
};

export default Mayof;