import { useState } from "react";

import GoButton from "../../button/GoButton";
import "../../../styles/about_books/Mayof/MayofAni.scss";
import Modal from "../../modal/Modal";

const mayofModalData = [
  {
    title: "活着 -余华",
    image: "../../images/about-books/yeosu-book-1.png",
    script: "이 소설은 주인공 푸구이가 중국의 현대사를 배경으로 수많은 개인적 비극과 가족의 상실을 겪으면서도 삶을 이어가는 이야기를 그린다. 삶의 고통과 상실을 다루면서도 인간의 회복력과 희망을 강조하는 점에서 『여수의 사랑』과 유사한 정서를 담고 있다.",
    url: "https://mzhu8.com/book/1451/index.html",
  },
  {
    title: "长恨歌 -王安忆",
    image: "../../images/about-books/white-book-2.png",
    script: "이 작품은 농촌 청년 샤오겅(小耿)이 도시로 와서 택배 일을 하며 병든 아버지의 치료비를 마련하는 과정을 그린다. 그는 배달 중 정신적으로 불안정한 여성 장거(张舸)를 만나게 되고, 두 사람은 함께 도피하는 여정을 떠난다. 이 과정에서 그들은 사회적 억압과 개인의 자유 사이에서 갈등하며, 자신의 내면과 마주하게 된다. 이는 『채식주의자』에서 영혜가 사회적 기대와 개인의 욕망 사이에서 갈등하는 모습과 상응한다.",
    url: "https://baijiahao.baidu.com/s?id=1771624430917415402&wfr=spider&for=pc",
  },
];

const MayofAni = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="mayof-ani-container">
      <div className="ani-book-wrapper">
        <div className="left-section">
          <p className="book-text">
          그러니까 형, 영혼이란 건 아무것도 아닌 건가. 
          <br /> 
          아니, 그건 무슨 유리 같은 건가.
          <br />
          유리는 투명하고 깨지기 쉽지. 그게 유리의 본성이지. 그러니까 유리로 만든 물건은 조심해서 다뤄야 하는 거지. 금이 가거나 부서지면 못 쓰게 되니까. 버려야 하니까. 예전에 우린 깨지지 않은 유리를 갖고 있었지. 그게 유린지 뭔지 확인도 안 해본, 단단하고 투명한 진짜였지. 그러니까 우린, 부서지면서 우리가 영혼을 갖고 있었단 걸 보여준 거지. 진짜 유리로 만들어진 인간이었단 걸 증명한 거야.
          </p>
          <GoButton ment="비슷한 중국 작품" onClick={() => setIsOpen(true)}/>
        </div>
        <img className="mayof-player" src="../../images/about-books/mayof-player.png" />
      </div>
      <img className="picture1" src="../../images/about-books/mayof-picture1.png" />
      <img className="picture2" src="../../images/about-books/mayof-picture2.png" />
      <img className="paper" src="../../images/about-books/mayof-paper.png" />

      {isOpen && (
        <Modal data={mayofModalData} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default MayofAni;