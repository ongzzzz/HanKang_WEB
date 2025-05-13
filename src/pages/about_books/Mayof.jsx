import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Translate from "../../components/button/Translate";
import useTranslateStore from "../../store/translate/useTraslateStore";

import MayofWriter from "../../components/about_books/Mayof/MayofWriter";
import MayofAni from "../../components/about_books/Mayof/MayofAni";
import Button from "../../components/button/Button";

import "../../styles/about_books/Mayof/Mayof.scss";

const Mayof = () => {
  const { lang } = useTranslateStore();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="mayof-container"
      style={{
        cursor: isOpen ? "default" : "none",
      }}
    >
      <Translate />
      <Button onClick={() => nav("/aboutbooks")} />
      <MayofWriter />
      <MayofAni isOpen={isOpen} setIsOpen={setIsOpen} />

      {!isOpen && (
        <motion.div 
          className="mouse-fire"
          animate={{ x: mousePos.x, y: mousePos.y }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </div>
  );
};

export default Mayof;