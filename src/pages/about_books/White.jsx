import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import WhiteAni from "../../components/about_books/White/WhiteAni";
import Button from "../../components/button/Button";
import GoButton from "../../components/button/GoButton";
import Modal from "../../components/modal/Modal";
import "../../styles/about_books/White/White.scss";

const mentData = [
  {id: 0, ment: "『흰』은 전통적인 이야기 구조를 뛰어넘어, 문학이 어떻게 존재를 기록하고 기억하는가를 탐구하는 작품이다."},
  {id: 1, ment: "‘흰색’이라는 상징을 통해 출생과 죽음, 부재와 존재의 경계를 허물고, 사라진 것들을 언어로 되살리는 과정이다."},
  {id: 2, ment: "소설은 기억을 통해 사라진 존재를 회복하는 동시에, 상실의 의미를 새롭게 정의하는 문학적 실험이기도 하다."},
  {id: 3, ment: "한강은 이 작품을 통해 문학이 애도의 역할을 할 수 있으며, 존재하지 않는 것조차 언어로 기록될 수 있음을 보여준다."},
];

const whiteModalData = [
  {
    title: "白鹿原 -陈忠实",
    image: "../../images/about-books/white-book-1.png",
    script: "이 작품은 중국의 역사와 문화를 배경으로, 한 가문의 흥망성쇠를 통해 삶과 죽음, 전통과 변화 등을 깊이 있게 탐구한다. '흰 사슴의 들판'이라는 제목처럼, 흰색은 순수함과 동시에 비극을 상징하며, 작품 전반에 걸쳐 중요한 모티프로 사용된다.",
    url: "https://mzhu8.com/book/1451/index.html",
  },
  {
    title: "白马啸西风 -金庸",
    image: "../../images/about-books/white-book-2.png",
    script: "무협 소설의 대가 김용의 작품으로, 흰 말을 타고 서풍을 가르는 주인공의 이야기를 담고 있다. 사랑과 이별, 삶의 무상함 등을 주제로 하며, 흰색은 주인공의 순수한 마음과 이상을 상징한다.",
    url: "https://baijiahao.baidu.com/s?id=1771624430917415402&wfr=spider&for=pc",
  },
];

const White = () => {
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
          {mentData.map((item) => {
            return (
              <span key={item.id} className={`ment-${item.id}`}>{item.ment}</span>
            )
          })}
        </div>
        <GoButton ment="비슷한 중국 작품" onClick={() => setIsOpen(true)} />
      </div>

      {isOpen && (
        <Modal data={whiteModalData} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default White;
