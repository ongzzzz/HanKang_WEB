import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../../styles/about_books/VegetarianWriter.scss";

const textMap = [
  "한강의 소설 『채식주의자』는 주인공 영혜가 갑작스럽게 육식을 거부하고 채식을 선택하면서 벌어지는 이야기를 다루고 있다. 이 작품은 채식이라는 행위를 통해 개인의 내면과 사회적 억압, 그리고 인간의 본성에 대한 깊은 탐구를 시도한다.",
  "소설에서 채식은 단순한 식습관의 변화가 아니라, 주인공 영혜가 사회적 규범과 억압에 저항하고 자신의 정체성을 찾아가는 과정을 상징한다. 그녀의 채식 선언은 가족과 사회의 기대에 반하는 행위로, 이는 개인의 자유와 선택에 대한 갈등을 부각시킨다.",
  "또한, 작품은 '몽고반점'과 '나무' 등의 소재를 통해 인간의 내면 깊숙한 곳에 자리한 원초적 욕망과 본능을 드러낸다. 특히, 영혜의 몸에 나타나는 몽고반점은 그녀의 억눌린 욕망과 감정을 상징하며, 나무가 되고자 하는 그녀의 열망은 순수하고 비폭력적인 존재로의 변화를 갈망하는 모습을 보여준다.",
  "이러한 소재들을 통해 『채식주의자』는 인간의 본성, 사회적 억압, 그리고 개인의 자유와 정체성에 대한 깊은 질문을 던지는 작품으로 평가받고 있다.",
  "이러한 소재들을 통해 『채식주의자』는 인간의 본성, 사회적 억압, 그리고 개인의 자유와 정체성에 대한 깊은 질문을 던지는 작품으로 평가받고 있다.",
  "이러한 소재들을 통해 『채식주의자』는 인간의 본성, 사회적 억압, 그리고 개인의 자유와 정체성에 대한 깊은 질문을 던지는 작품으로 평가받고 있다.",
  "이러한 소재들을 통해 『채식주의자』는 인간의 본성, 사회적 억압, 그리고 개인의 자유와 정체성에 대한 깊은 질문을 던지는 작품으로 평가받고 있다.",
  "이러한 소재들을 통해 『채식주의자』는 인간의 본성, 사회적 억압, 그리고 개인의 자유와 정체성에 대한 깊은 질문을 던지는 작품으로 평가받고 있다.",
  "이러한 소재들을 통해 『채식주의자』는 인간의 본성, 사회적 억압, 그리고 개인의 자유와 정체성에 대한 깊은 질문을 던지는 작품으로 평가받고 있다.",
  "이러한 소재들을 통해 『채식주의자』는 인간의 본성, 사회적 억압, 그리고 개인의 자유와 정체성에 대한 깊은 질문을 던지는 작품으로 평가받고 있다.",
  "이러한 소재들을 통해 『채식주의자』는 인간의 본성, 사회적 억압, 그리고 개인의 자유와 정체성에 대한 깊은 질문을 던지는 작품으로 평가받고 있다.",
];

const VegetarianWriter = () => {
  const [rootEl, setRootEl] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      setRootEl(scrollRef.current);
    }
  }, []);

  return (
    <div className="writer-container">
      <div className="writer-title">
        <p>2024 Nobel Prize in Literature Winner</p>
        <span>채식주의자</span>
      </div>
      <div className="writer-content" ref={scrollRef}>
        {textMap.map((text, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ 
              once: false,
              amount: 0.4,
              root: rootEl,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.8,
              delay: idx * 0.05,
            }}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default VegetarianWriter;