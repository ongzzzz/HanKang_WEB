import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import WhiteAni from "../../components/about_books/White/WhiteAni";
import Button from "../../components/button/Button";
import GoButton from "../../components/button/GoButton";
import Modal from "../../components/modal/Modal";

import Translate from "../../components/button/Translate";
import useTranslateStore from "../../store/translate/useTraslateStore";

import "../../styles/about_books/White/White.scss";

const mentDataKR = [
  {id: 0, ment: "『흰』은 전통적인 이야기 구조를 뛰어넘어, 문학이 어떻게 존재를 기록하고 기억하는가를 탐구하는 작품이다."},
  {id: 1, ment: "‘흰색’이라는 상징을 통해 출생과 죽음, 부재와 존재의 경계를 허물고, 사라진 것들을 언어로 되살리는 과정이다."},
  {id: 2, ment: "소설은 기억을 통해 사라진 존재를 회복하는 동시에, 상실의 의미를 새롭게 정의하는 문학적 실험이기도 하다."},
  {id: 3, ment: "한강은 이 작품을 통해 문학이 애도의 역할을 할 수 있으며, 존재하지 않는 것조차 언어로 기록될 수 있음을 보여준다."},
];

const mentDataCN = [
  {id: 0, ment: "《白》是一部超越传统叙事结构，探讨文学如何记录并铭记存在的作品。"},
  {id: 1, ment: "通过“白色”这一象征，打破出生与死亡、缺席与存在之间的界限，将消逝之物以语言重新唤回的过程。"},
  {id: 2, ment: "这部小说既是通过记忆唤回逝去存在的尝试，也是对“失去”这一概念进行重新定义的文学实验。"},
  {id: 3, ment: "韩江通过这部作品展现了文学可以承担哀悼的功能，甚至能够将不存在的事物也用语言加以记录。"},
];

const whiteModalData = [
  {
    title: {
      kr: "황혼 속의 남자 -유화",
      cn: "黄昏里的男孩 -余华",
    },
    image: "../../images/about-books/white-book-1.png",
    script: {
      kr: "중국 현대 문학의 대표작가인 위화의 단편집으로, 삶의 비극적 순간과 인간의 외로움을 담백하면서도 강렬하게 그린다. 특히 표제작 <황혼 속의 등불>은 버려진 아이와 한 노인의 만남을 통해 인간의 고독과 연민을 묘사하는데, <흰>의 애도와 상실감과 닮은 분위기가 있다.",
      cn: "这是中国当代文学代表作家余华的短篇小说集，朴实却深刻地描绘了人生的悲剧时刻与人类的孤独感。通过一位被遗弃的孩子与一位老人的相遇，展现了人类的孤独与怜悯，营造出一种与《白》中哀悼与失落情感相似的氛围。"
    },
    url: "https://book.douban.com/subject/20397280/",
  },
  {
    title: {
      kr: "동장 -이진",
      cn: "冬牧场 -李娟",
    },
    image: "../../images/about-books/white-book-2.png",
    script: {
      kr: "신장(新疆)유목민의 겨울 생활을 기록한 에세이이다. 작가가 카자흐족 가족과 함께 얼어붙은 초원에서 보낸 4개월 간의 체험을 담백하면서도 시적으로 묘사한다. <흰>처럼 '추운 겨울'과 '고독'을 배경으로 생명의 존엄성과 인간과 자연의 관계를 성찰한다.",
      cn: "这是一篇记录新疆游牧民冬季生活的随笔。作者与一户哈萨克族家庭一同在冰封的草原上度过四个月，将这段经历以朴实而富有诗意的笔触描绘出来。如同《白》一样，以“寒冷的冬天”和“孤独”为背景，反思生命的尊严以及人与自然之间的关系。"
    },
    url: "https://book.douban.com/subject/10522856/",
  },
];

const White = () => {
  const {lang} = useTranslateStore();
  const mentText = lang === "kr" ? "비슷한 중국 작품" : "相似的中国作品";
  const [isOpen, setIsOpen] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.8 }
    );

    const mentEls = document.querySelectorAll(".ments span");
    mentEls.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="white-container">
      <Translate />
      <div className="main-wrapper">
        <div className="left-section">
          <Button className="exit-btn" onClick={() => nav("/aboutbooks")}/>
          <WhiteAni />
        </div>
        <div className="right-section">
          <img src="../../images/about-books/paint.png"/>
        </div>
      </div>
      <div className="scroll-wrapper">
        <div className="ments">
          {(lang === "kr" ? mentDataKR : mentDataCN).map((item) => {
            return (
              <span key={item.id} className={`ment-${item.id}`}>{item.ment}</span>
            )
          })}
        </div>
        <GoButton ment={mentText} onClick={() => setIsOpen(true)} />
      </div>

      {isOpen && (
        <Modal data={whiteModalData} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default White;
