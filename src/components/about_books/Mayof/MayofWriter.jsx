import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import "../../../styles/about_books/Mayof/MayofWriter.scss";

const mayofTextMap = [
  "『소년이 온다』 는 1980년 5월 한국 광주에서 벌어진 5.18 광주 민주화운동 당시 열흘간의 참상과 그 이후의 여파를 다룬 한강의 장편소설이다. 이야기의 중심에 있는 소년 동호(중학교 3학년, 15세) 는 계엄군의 총격으로 친구 정대가 목숨을 잃는 장면을 목격한 뒤, 광주 전남도청 부속 상무관에 마련된 임시 분향소에서 시신 수습을 돕게 된다. 어린 동호가 쏟아져 들어오는 주검들 사이에서 촛불을 밝히며 넋을 기리는 동안, 그의 친구 정대와 공장 노동자였던 정대의 누나 정미는 그 해 5월 행방불명되어 비극을 맞는다. 소설은 동호의 죽음을 둘러싼 숨은 이야기들과 5.18 이후 살아남은 사람들이 겪는 삶의 변화를 다층적으로 그려내며, 평범했던 일상이 한 순간에 파괴된 비극을 보여준다.",
  "이 소설의 독특한 점은 여러 인물의 시선이 교차하며 전개된다는 것이다. 각 장마다 화자가 달라지면서 사건을 다양한 각도에서 비추는데, 이를 통해 독자는 5.18의 경험을 입체적으로 체험하게 된다. 이야기의 시작을 이끄는 동호를 비롯해, 상무관에서 함께 시신을 수습하던 청년들이 차례로 화자가 된다. 동호, 은숙, 선주, 진수 등 각 인물의 관점이 교챃핳며 사건 전후의 삶이 펼쳐지는데, 독자는 피해자, 생존자, 목격자의 다양한 눈을 통해 시간의 경과에 따른 관점의 변화와 심리적 흔적을 따라가게 된다. 심지어 목숨을 잃은 이의 목소리까지 소설에 등장하여, 죽음 이후에도 끝나지 않은 이야기를 들려주는 서술 기법을 취하고 있다. 이러한 다중 시점 구성은 한 사건을 둘러싼 다층적 서술을 가능하게 함으로써, 역사적 비극의 영향을 전체적이고도 섬세하게 조망하도록 돕는다. ",
  "한강은 이 소설에서 특유의 서정적 문체와 밀도 높은 묘사로 잔혹한 한국의 역사를 담아낸다. 비극적인 상황을 그리면서도 절제된 시적 언어와 감각적인 이미지로 서정을 잃지 않는 문장은, 읽는 이의 마음에 깊은 울림을 남긴다. 예컨대 죽은 이들의 넋을 ‘어린 새 한마리가 빠져나간 듯한 주검’ 에 비유하거나, 광장의 군중을 ‘양심의 혈관’ 으로 형상화하는 대목 등은 한강 문장의 서정성과 상징성이 두드러지는 부분이다. 또한 인물 중심의 다층적 서술 기법이 돋보이는데, 여러 인물들의 1인칭/3인칭 시점이 교차하는 구성은 사건을 입체적으로 재구성한다. 요컨대 『소년이 온다』의 문체와 서술은 서정성과 다성적 구조, 그리고 폭력의 묘사에 대한 도덕적 성찰이 어우러져, 읽는 이를 정서적으로 몰입시키면서도 역사적 비극을 엄숙하게 마주하게 만드는 힘을 지니고 있다.",
];

const MayofWriter = () => {

  const [rootEl, setRootEl] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      setRootEl(scrollRef.current);
    }
  }, []);

  return (
    <div className="mayof-writer-container">
      <div className="mayof-writer-title">
        <span>소년이 온다</span>
        <motion.img 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          src="../../images/about-books/mayof-flower.png" 
        />
      </div>
      <div className="mayof-writer-content" ref={scrollRef}>
        {mayofTextMap.map((item, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            {item}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default MayofWriter;