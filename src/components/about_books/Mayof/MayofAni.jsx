import { motion } from "framer-motion";
import useTranslateStore from "../../../store/translate/useTraslateStore";

import GoButton from "../../button/GoButton";
import "../../../styles/about_books/Mayof/MayofAni.scss";
import Modal from "../../modal/Modal";

const mayofModalData = [
  {
    title: {
      kr: "형제 -유화",
      cn: "兄弟 -余华",
    },
    image: "../../images/about-books/mayof-book-1.png",
    script: {
      kr: "중국 현대사의 파란 속에서 두 형제가 겪는 성장, 상처, 그리고 사회 변화에 따른 인간성의 일그러짐을 그려낸다. 폭력과 생존, 인간의 존엄성이라는 면에서 『소년이 온다』 와 맞닿는다. 잔혹하면서도 유머가 있고, 시대와 인간의 본성을 동시에 비추는 다층적 구조이다.",
      cn: "这部作品描绘了在中国现代史的动荡中, 两兄弟所经历的成长、创伤, 以及随着社会变迁而出现的人性扭曲。在暴力与生存、人类尊严等层面上, 它与《少年来了》有着相似之处。作品残酷中带有幽默, 结构多层次, 既映照了时代, 也揭示了人性的本质。"
    },
    url: "https://book.douban.com/subject/20441957/",
  },
  {
    title: {
      kr: "주국 -모옌",
      cn: "酒国 -莫言",
    },
    image: "../../images/about-books/mayof-book-2.png",
    script: {
      kr: "특급 검사관 딩거월은 아동 식용 의혹을 조사하기 위해 '주국'을로 파견된다. 그러나 현지 관료들의 접대와 부패에 휘말리며, 진실을 파헤치려는 노력은 좌절되고, 결국 그는 음주로 인해 비극적인 결말을 맞이한다. 『소년이 온다』 와 마찬가지로, 이 작품은 국가 권력과 사회적 억압 속에서 개인이 겪는 고통과 상실을 풍자적이고 상징적인 방식으로 그려낸다.",
      cn: "特级检察官丁戈尔被派往“酒国”, 调查有关食用儿童的嫌疑案件。然而, 他被当地官员的应酬与腐败所牵连, 揭示真相的努力最终落空, 最终因酗酒走向悲剧性的结局。与《少年来了》相似, 本作同样通过讽刺与象征的方式, 描绘了在国家权力与社会压迫之下, 个人所经历的痛苦与失落。"
    },
    url: "https://book.douban.com/subject/26904516/",
  },
];

const MayofAni = ({isOpen, setIsOpen}) => {
  const {lang} = useTranslateStore();
  const mentText = lang === "kr" ? "비슷한 중국 작품" : "相似的中国作品";

  const mayofbookKR = `그러니까 형, 영혼이란 건 아무것도 아닌 건가.<br /> 
          아니, 그건 무슨 유리 같은 건가.<br />
          유리는 투명하고 깨지기 쉽지. 그게 유리의 본성이지. 그러니까 유리로 만든 물건은 조심해서 다뤄야 하는 거지. 금이 가거나 부서지면 못 쓰게 되니까. 버려야 하니까. 예전에 우린 깨지지 않은 유리를 갖고 있었지. 그게 유린지 뭔지 확인도 안 해본, 단단하고 투명한 진짜였지. 그러니까 우린, 부서지면서 우리가 영혼을 갖고 있었단 걸 보여준 거지. 진짜 유리로 만들어진 인간이었단 걸 증명한 거야.`;

  const mayofbookCN = `那么, 哥, 灵魂就是一无所有的东西吗？<br /> 
          不, 那到底是像玻璃一样的东西吗？<br />
          玻璃是透明的, 而且容易破碎。这就是玻璃的本性。所以用玻璃制成的东西必须小心对待。因为一旦有了裂痕或者碎了, 就无法再使用了, 只能丢弃。以前我们拥有没有裂痕的玻璃, 那是未经确认却坚固透明的真正的玻璃。所以我们——正是在破碎的过程中, 才向世人展示了我们拥有灵魂, 证明了我们是由真正玻璃制成的人类。`;

  return (
    <div className="mayof-ani-container">
      <div className="ani-book-wrapper">
        <div className="left-section">
          <p 
            className={`book-text lang-${lang}`} 
            dangerouslySetInnerHTML={{__html: lang === "kr" ? mayofbookKR : mayofbookCN }}
          />
          <GoButton ment={mentText} onClick={() => setIsOpen(true)}/>
        </div>
        <img className="mayof-player" src="../../images/about-books/mayof-player.png" />
      </div>
      <motion.img 
        className="picture1" 
        src="../../images/about-books/mayof-picture1.png" 
        whileHover={{
          scale: 1.1,
          y: -10,
          transition: { type: "spring", stiffness: 200, damping: 20 }
        }}
      />
      <motion.img 
        className="picture2" 
        src="../../images/about-books/mayof-picture2.png" 
        whileHover={{
          scale: 1.1,
          y: -10,
          transition: { type: "spring", stiffness: 200, damping: 20 }
        }}
      />
      <motion.img 
        className="paper" 
        src="../../images/about-books/mayof-paper.png" 
        whileHover={{
          scale: 1.1,
          y: -10,
          transition: { type: "spring", stiffness: 200, damping: 20 }
        }}
      />

      {isOpen && (
        <Modal data={mayofModalData} onClose={() => setIsOpen(false)}/>
      )}
    </div>
  );
};

export default MayofAni;