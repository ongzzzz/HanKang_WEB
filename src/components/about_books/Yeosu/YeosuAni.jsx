// "use client"

import { motion } from "framer-motion";
import "../../../styles/about_books/Yeosu/YeosuAni.scss";

const YeosuAni = () => {
  return (
    <div className="yeosu-ani-container">
      <motion.img 
        className="yeosu-ticket" 
        src="../../images/about-books/yeosu-ticket.png" 
        drag
      />
      <motion.img 
        className="yeosu-paper" 
        src="../../images/about-books/yeosu-paper.png" 
        drag
      />
      <motion.img 
        className="yeosu-picture" 
        src="../../images/about-books/yeosu-picture.png" 
        drag
      />
    </div>
  );
};

export default YeosuAni;