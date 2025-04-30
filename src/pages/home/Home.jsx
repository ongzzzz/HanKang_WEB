import { useState, useEffect } from "react";
import Loading from "../../components/loading/Loading";
// import "../../styles/";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

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
    <div className="home">
      {/* 중앙 텍스트 */}
      <div className="home__title">
        <p>: 한강의 문책</p>
        <h1>韩江的笔记</h1>
        <button>GET STARTED</button>
      </div>

      {/* 배치된 이미지들 */}
      <div className="home__images">
        <div className="img img--snow" />
        <div className="img img--tree" />
        <div className="img img--letter" />
        <div className="img img--photo1" />
        <div className="img img--photo2" />
        <div className="img img--photo3" />
        <div className="img img--vhs" />
        <div className="img img--candle" />
        <div className="img img--butterfly" />
        <div className="img img--wave" />
      </div>

      {/* 문구들 */}
      <div className="home__texts">
        <p className="text text--1">어느 곳 하나 고향이 아니었어요</p>
        <p className="text text--2">我决定不再吃肉了</p>
        <p className="text text--3">我去找你吧。</p>
        <p className="text text--4">촛불의 가장자리만 흔들게 할까.</p>
        <p className="text text--5">现在让我把纯白的东西交给你吧。</p>
      </div>
    </div>
  );
};

export default Home;