import useTranslateStore from "../../store/translate/useTraslateStore";
// import FadeIn from "./FadeIn";
import Items from "./Items";
import "../../styles/about-her/HerItem.scss";

const HerItem = () => {
  return (
    <div className="herr-container">
      <img className="good" src="../../images/about-her/items/st-good.png" />
      <div className="title">수상경력</div>
      <img className="downpoint" src="../../images/about-her/items/st-downpoint.png" />
      <img className="foot-1" src="../../images/about-her/foot-1.png" />
      <img className="book-1" src="../../images/about-her/books/item-1.png" />
      <img className="st-point1" src="../../images/about-her/items/st-point1.png" />
      <img className="st-up-1" src="../../images/about-her/items/st-uppoint.png" />
      <Items className="item-1" year="1994" title="서울신문 신춘문예 소설부문 <붉은 닻>"/>

      <img className="st-point2" src="../../images/about-her/items/st-point2.png" />
      <Items className="item-2" year="2000" title="오늘의 젊은 예술가상 수상 (문학부문)"/>

      <img className="book-2" src="../../images/about-her/books/item-2.png" />
      <img className="st-point3" src="../../images/about-her/items/st-point3.png" />
      <Items className="item-3" year="2005" title="제 29회 이상문학상 <몽고반점>"/>

      <img className="book-3" src="../../images/about-her/books/item-8.png" />
      <img className="st-point4" src="../../images/about-her/items/st-point4.png" />
      <Items className="item-4" year="2010" title="제 13회 동리문학상 <바람이 분다, 가라>"/>

      <img className="foot-2" src="../../images/about-her/foot-1.png" />
      <img className="book-4" src="../../images/about-her/books/item-4.png" />
      <img className="st-flower" src="../../images/about-her/items/st-flower.png" />
      <img className="st-up-2" src="../../images/about-her/items/st-uppoint-2.png" />
      <img className="st-point5" src="../../images/about-her/items/st-point5.png" />
      <Items className="item-5" year="2014" title="만해문학상 <소년이 온다>"/>

      <img className="book-5" src="../../images/about-her/books/item-3.png" />
      <img className="st-snow" src="../../images/about-her/items/st-snow.png" />
      <img className="st-point6" src="../../images/about-her/items/st-point6.png" />
      <Items className="item-6" year="2015" title="황순원문학상 <눈 한 송이가 녹는 동안>"/>

      <img className="book-6" src="../../images/about-her/books/item-7.png" />
      <img className="st-point7" src="../../images/about-her/items/st-point7.png" />
      <Items className="item-7" year="2016" title="맨 부커 국제상 <채식주의자>"/>

      <img className="st-point8" src="../../images/about-her/items/st-point8.png" />
      <Items className="item-8" year="2017" title="말라파르테 문학상"/>

      <img className="foot-3" src="../../images/about-her/foot-1.png" />
      <img className="book-7" src="../../images/about-her/books/item-5.png" />
      <img className="st-up-3" src="../../images/about-her/items/st-uppoint-3.png" />
      <img className="st-point9" src="../../images/about-her/items/st-point9.png" />
      <Items className="item-9" year="2018" title="김유정문학상 <작별>"/>

      <img className="st-point10" src="../../images/about-her/items/st-point10.png" />
      <Items className="item-10" year="2019" title="인촌상 언론문화부문"/>

      <img className="book-8" src="../../images/about-her/books/item-6.png" />
      <img className="st-up-4" src="../../images/about-her/items/st-uppoint-4.png" />
      <img className="st-point11" src="../../images/about-her/items/st-point11.png" />
      <Items 
        className="item-11" 
        year="2022" 
        title={
          <>
            2회 용아문화대상<br />
            제13회 김만중문학상 소설부문 대상 &lt;작별하지 않는다&gt;
          </>
        }/>

      <img className="st-point12" src="../../images/about-her/items/st-point12.png" />
      <Items className="item-12" year="2023" title="메디치 외국문학상 <작별하지 않는다>"/>

      <img className="st-point13" src="../../images/about-her/items/st-point13.png" />
      <Items className="item-13" year="2024" title="노벨문학상"/>
      <img className="st-up-5" src="../../images/about-her/items/st-uppoint-5.png" />
    </div>
  );
};

export default HerItem;