import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Loading from "../../components/loading/Loading";
import GoButton from "../../components/button/GoButton";
import HomeMemo from "../../components/home/HomeMemo";

import "../../styles/home/Home.scss";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (loading) return <Loading fadeOut={fadeOut} />;

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="home-images">
          <img className="memo" src="../../images/home/memo.png" onClick={() => setIsOpen(true)} />
          <motion.img className="snow" src="../../images/home/photo_snow.png" drag />
          <motion.img className="mayof" src="../../images/home/photo_mayof.png" drag />
          <motion.img className="flower" src="../../images/home/photo_flower.png" drag />
          <motion.img className="sea" src="../../images/home/photo_sea.png" drag />
          <motion.img className="hankang" src="../../images/home/photo_hankang.png" drag />
          <motion.img className="navi" src="../../images/home/sticky_navi.png" drag />
          <motion.img className="tree" src="../../images/home/sticky_tree.png" drag />
          <motion.img className="tape" src="../../images/home/sticky_tape.png" drag />
          <motion.img className="fire" src="../../images/home/sticky_fire.png" drag />
          <motion.img className="letter" src="../../images/home/sticky_letter.png" drag />
        </div>
        <div className="home-texts">
          <p className="text text-1">어느 곳 하나 고향이 아니었어요</p>
          <p className="text text-2">我决定不再吃肉了</p>
          <p className="text text-3">我去找你吧。</p>
          <p className="text text-4">촛불의 가장자리만 흔들게 할까.</p>
          <p className="text text-5">现在让我把纯白的东西交给你吧。</p>
        </div>
      </div>
      <div className="home-title">
        <p>: 한강의 공책</p>
        <h1>韩江的 <br /> 笔记</h1>
        <GoButton ment="GET STARTED" onClick={() => nav("/abouther")}/>
      </div>

      {isOpen && (
        <HomeMemo onClose={() => setIsOpen(false)}/>
      )}
    </div>
  );
};

export default Home;