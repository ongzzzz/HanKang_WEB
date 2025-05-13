import { useNavigate } from "react-router-dom";
import VegetarianWriter from "../../components/about_books/Vegetarian/VegetarianWriter";
import Button from "../../components/button/Button";
import VegetarianAni from "../../components/about_books/Vegetarian/VegetarianAni";

import Translate from "../../components/button/Translate";

import "../../styles/about_books/Vegetarian/Vegetarian.scss";

const Vegetarian = () => {
  const nav = useNavigate();
  
  return (
    <div className="vegetarian-container">
      <Translate />
      <Button onClick={() => nav("/aboutbooks")}/>
      <VegetarianWriter />
      <VegetarianAni />
    </div>
  );
};

export default Vegetarian;
