import { useState } from "react";
import { motion } from "framer-motion";
import GoButton from "../../button/GoButton";
import Modal from "../../modal/Modal";

import useTranslateStore from "../../../store/translate/useTraslateStore";
import "../../../styles/about_books/Vegetarian/VegetarianAni.scss";

const vegetarianModalData = [
  {
    title: {
      kr: "광인일기 -루신",
      cn: "狂人日记 -鲁迅",
    },
    image: "../../images/about-books/vegetarian-book-1.png",
    script: {
      kr: "정신병자로 오인된 한 남자의 일기 형식으로 쓰여졌다. 주인공은 주변 사람들이 모두 '인육을 먹는' 광인이라고 생각하며, 사회의 가학성과 전통의 잔인함을 고발한다. 『채식주의자』의 주인공 영혜가 사회적 규범에 저항하는 모습과 유사하게, 이 작품도 사회적 폭력성과 정신적 고립을 날카롭게 묘사한다.",
      cn: "这部作品以被误认为精神病患者的男子的日记形式写成。主人公认为周围的人都是'吃人肉的'狂人，借此揭露了社会的虐待本质与传统的残酷。正如《素食者》中的主人公英惠反抗社会规范一样，本作同样尖锐地描绘了社会的暴力性与精神上的孤立。"
    },
    url: "https://book.douban.com/subject/1398395/",
  },
  {
    title: {
      kr: "서유보 -동수",
      cn: "西游补 -董说",
    },
    image: "../../images/about-books/vegetarian-book-2.png",
    script: {
      kr: "이 작품은 오래된 전통 서사 『서유기』의 패러디이자 심리적 탐구 소설이다. 손오공이 환상과 악몽 속에서 정체성을 혼란스러워하는 내용으로, 현실과 환상의 경계가 무너지는 느낌을 준다. 『채식주의자』의 초현실적이고 몽환적인 분위기, 그리고 주인공의 정신적 붕괴와 대비되는 사회적 억압을 연상시킨다.",
      cn: "这部作品既是对传统叙事《西游记》的戏仿，也是一次心理层面的探索小说。讲述了孙悟空在幻想与噩梦中陷入身份混乱的故事，营造出现实与幻觉边界崩塌的感觉。它让人联想到《素食者》中那种超现实、梦幻般的氛围，以及主人公精神崩溃与社会压迫之间的强烈对比。"
    },
    url: "https://book.douban.com/subject/35783854/",
  },
];
const messagesKR = [
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

const messagesCN = [
  "我想变成一棵树。",
  "我觉得肉太恶心了。",
  "我讨厌血。",
  "我正在失去自己。",
  "我存在吗？",
  "树枝在摇晃。",
  "我无法拒绝吗？",
  "我体内有什么奇怪的东西在生长。",
  "如果身体消失，心灵也会随之消失吗？",
  "我想安静下来，像树叶一样。",
];

const VegetarianAni = () => {
  const {lang} = useTranslateStore();
  const [isOpen, setIsOpen] = useState(false);
  const mentText = lang === "kr" ? "비슷한 중국 작품" : "相似的中国作品";

  return (
    <div className="ani-container">
      <div className="message-bubbles">
        {(lang === "kr" ? messagesKR : messagesCN).map((msg, idx) => (
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
      <GoButton ment={mentText} onClick={() => setIsOpen(true)} />

      {isOpen && (
        <Modal data={vegetarianModalData} onClose={() => setIsOpen(false)}/>
      )}
    </div>
  );
};

export default VegetarianAni;
