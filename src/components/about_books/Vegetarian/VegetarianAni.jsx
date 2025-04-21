import { motion } from "framer-motion";
import "../../../styles/about_books/Vegetarian/VegetarianAni.scss";

const messages = [
  "나는 나무가 되고싶어.",
  "나 고기가 너무 역겨워.",
  "피가 싫어.",
  "나는 나를 잃고 있다.",
  "나는 존재하는가?",
  "거지가 흔들린다.",
  "나는 거부할 수 없는가?"
];

const VegetarianAni = () => {
  return (
    <div className="ani-container">
      <div className="message-bubbles">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            className={`bubble bubble-${idx + 1}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.4, duration: 0.8, ease: "easeOut" }}
          >
            {msg}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VegetarianAni;
