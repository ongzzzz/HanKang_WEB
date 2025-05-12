import { useEffect, useRef } from "react";

import useTranslateStore from "../../store/translate/useTraslateStore";
import Translate from "../button/Translate";
import "../../styles/home/HomeMemo.scss";

const HomeMemo = ({onClose}) => {
  const { lang } = useTranslateStore();
  const audioRef = useRef(null);

  const contentKR = `여덟 살 때의 어느 날을 기억합니다.<br />주산학원의 오후 수업을 마치고 나오자마자 소나기가 퍼붓기 시작했습니다.<br />맹렬한 기세여서, 이십여 명의 아이들이 현관 처마 아래 모여 서서 비가 그치길 기다렸습니다. 도로 맞은 편에도 비슷한 건물이 있었는데, 마치 거울을 보는 듯 그 처마 아래에서도 수십 명의 사람들이 나오지 못하고 서 있는 모습이 보였습니다. 쏟아지는 빗발을 보며, 팔과 종아리를 적시는 습기를 느끼며 기다리던 찰나 갑자기 깨달았습니다. 나와 어깨를 맞대고 선 사람들과 건너편의 저 모든 사람들이 ‘나' 로 살고 있다는 사실을. 내가 저 비를 보듯 저 사람들 하나하나가 비를 보고 있다. 내가 얼굴에 느끼는 습기를 저들도 감각하고 있다. 그건 수많은 일인칭들을 경험한 경이의 순간이었습니다.<br /><br />돌아보면 제가 문학을 읽고 써온 모든 시간 동안 이 경이의 순간을 되풀이 해 경험하고 있었던 것 같습니다. 언어라는 실을 통해 타인들의 폐부까지 흘러들어가 내면을 만나는 경험. 내 중요하고 절실한 질문들을 꺼내 그 실에 실어, 타인들을 향해 전류처럼 흘려 내보내는 경험.<br /><br />어렸을 때부터 궁금했습니다. 우리는 왜 태어났는지. 왜 고통과 사랑이 존재하는 지. 그것들은 수천 년 동안 문학이 던졌고, 지금도 던지고 있는 질문들입니다. 우리가 이 세게에 잠시 머무는 의미는 무엇일까요? 이 세계에서 우리가 끝끝내 인간으로 남는다는 건 얼마나 어려운 일일까요? 가장 어두운 밤에 우리의 본성에 대해 질문하는, 이 행성에 깃들인 사람들과 생명체들의 일인칭을 끈질기게 상상하는, 끝끝내 우리를 연결하는 언어를 다루는 문학에는 필연적으로 체온이 깃들어 있습니다. 그렇게 필연적으로, 문학을 읽고 쓰는 일은 생명을 파괴하는 행위들의 반대편에 서 있습니다. 폭력의 반대편인 이 자리에 함께 서 있는 여러분과 함께, 문학을 위한 이 상의 의미를 나누고 싶습니다. 감사합니다.<br /><br />-노벨문학상 수상 소감 원문 中
  `;

  const contentCN = `
    我记得八岁那年的某一天。<br />那天下午, 珠算补习班的课程刚结束，骤雨便倾泻而下。<br />雨势猛烈, 二十多个孩子聚集在门廊下，等待雨停。<br />马路对面也有一座相似的建筑, 屋檐下同样挤满了无法出门的人们，宛如一面镜子，映照出彼此的景象。<br />望着倾泻的雨帘,感受着湿气沾染手臂与小腿的瞬间，我突然意识到了一件事<br />站在我身旁的每个人,以及对面那些陌生人,都以“我”之身份在活着。<br />就如同我在看这场雨,他们每个人也在看着雨。<br />就如同我能感受到脸颊上的湿润,他们同样感受到那股潮气。<br />那是我第一次体验到“无数个第一人称”的奇迹般的瞬间。回顾自己阅读和书写文学的岁月, 我想, 我一直在重复着这份奇迹般的体验。<br />通过语言这根细线, 我渗透进他人的肺腑，与他们的内心相遇。<br />我将自己最重要、最迫切的疑问系在这根线索上, 像电流一样传向远方的他人。<br /><br />从小时候开始, 我便对这些问题感到好奇——我们为何而生？<br />为何世界上存在痛苦与爱?<br />这些问题, 是文学在千百年来不断提出, 并仍在提出的命题。<br />我们短暂停留在这个世界的意义何在?<br />在这个世界里, 终究作为人类生存下去, 究竟有多么艰难? 在最黑暗的夜晚，我们不断追问自身的本质，<br />执着地想象这个星球上的人类与生灵的第一人称, <br />坚守那种终究将我们彼此连接起来的语言。
  `;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Auto-play was prevented:", err);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="memo-back" onClick={onClose}>
      <div className="memo-container" onClick={(e) => e.stopPropagation()}>
        <audio ref={audioRef} src="/audio/rain.m4a" loop />
        <div className="memo-content">
          <Translate />
          <div 
            className={`memo-script lang-${lang}`}
            dangerouslySetInnerHTML={{ __html: lang === "kr" ? contentKR : contentCN }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeMemo;