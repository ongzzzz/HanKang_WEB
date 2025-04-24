import { useState } from "react";
import { motion } from "framer-motion";
import GoButton from "../../button/GoButton";
import Modal from "../../modal/Modal";
import "../../../styles/about_books/Vegetarian/VegetarianAni.scss";

const vegetarianModalData = [
  {
    title: "受活 -阎连科",
    image: "../../images/about-books/vegetarian-book-1.png",
    script: "이 소설은 중국의 한 가상의 마을 '수화촌(受活村)'을 배경으로, 주민들이 신체 일부를 희생하고 보상으로 돈을 받는 기이한 실험에 참여하는 이야기를 그린다. 이를 통해 사회적 억압, 인간의 욕망과 본성, 그리고 개인의 자유에 대한 깊은 성찰을 담고 있다.",
    url: "https://mzhu8.com/book/1451/index.html",
  },
  {
    title: "去洞庭 -郑小驴",
    image: "../../images/about-books/vegetarian-book-2.png",
    script: "이 작품은 농촌 청년 샤오겅(小耿)이 도시로 와서 택배 일을 하며 병든 아버지의 치료비를 마련하는 과정을 그린다. 그는 배달 중 정신적으로 불안정한 여성 장거(张舸)를 만나게 되고, 두 사람은 함께 도피하는 여정을 떠난다. 이 과정에서 그들은 사회적 억압과 개인의 자유 사이에서 갈등하며, 자신의 내면과 마주하게 된다. 이는 『채식주의자』에서 영혜가 사회적 기대와 개인의 욕망 사이에서 갈등하는 모습과 상응한다.",
    url: "https://baijiahao.baidu.com/s?id=1771624430917415402&wfr=spider&for=pc",
  },
];

const messages = [
  "나는 나무가 되고싶어.",
  "나 고기가 너무 역겨워.",
  "피가 싫어.",
  "나는 나를 잃고 있다.",
  "나는 존재하는가?",
  "가지가 흔들린다.",
  "나는 거부할 수 없는가?",
  "내 안에 이상한 것이 자라.",
  "몸이 사라지면 마음도 사라질까?",
  "고요해지고 싶어, 나뭇잎처럼.",
];

const VegetarianAni = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ani-container">
      <div className="message-bubbles">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            className={`bubble bubble-${idx + 1}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.8, duration: 1.5, ease: "easeOut" }}
          >
            {msg}
          </motion.div>
        ))}
      </div>
      <GoButton ment="비슷한 중국 작품" onClick={() => setIsOpen(true)} />

      {isOpen && (
        <Modal data={vegetarianModalData} onClose={() => setIsOpen(false)}/>
      )}
    </div>
  );
};

export default VegetarianAni;
