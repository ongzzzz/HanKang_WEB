import VegetarianWriter from "../../components/about_books/VegetarianWriter";
import Button from "../../components/button/Button";
import GoButton from "../../components/button/GoButton";
import VegetarianAni from "../../components/about_books/VegetarianAni";

import "../../styles/about_books/Vegetarian.scss";

const Vegetarian = () => {
  return (
    <div className="vegetarian-container">
      <div className="writer-wrapper">
        <VegetarianWriter />
      </div>

      <div className="exit-btn-wrapper">
        <Button />
      </div>

      <div className="animation-wrapper">
        <VegetarianAni />
      </div>
    
      <div className="goto-btn-wrapper">
        <GoButton ment="비슷한 중국 작품" />
      </div>
    </div>
  );
};

export default Vegetarian;
