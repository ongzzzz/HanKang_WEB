import VegetarianWriter from "../../components/about_books/Vegetarian/VegetarianWriter";
import Button from "../../components/button/Button";
import VegetarianAni from "../../components/about_books/Vegetarian/VegetarianAni";

import "../../styles/about_books/Vegetarian/Vegetarian.scss";

const Vegetarian = () => {
  return (
    <div className="vegetarian-container">
      <Button />
      <VegetarianWriter />
      <VegetarianAni />
    </div>
  );
};

export default Vegetarian;
