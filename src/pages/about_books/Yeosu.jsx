import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import GoButton from "../../components/button/GoButton";
import Modal from "../../components/modal/Modal";
import YeosuAni from "../../components/about_books/Yeosu/YeosuAni";
import "../../styles/about_books/Yeosu/Yeosu.scss";

const yeosuModalData = [
  {
    title: "活着 -余华",
    image: "../../images/about-books/yeosu-book-1.png",
    script: "이 소설은 주인공 푸구이가 중국의 현대사를 배경으로 수많은 개인적 비극과 가족의 상실을 겪으면서도 삶을 이어가는 이야기를 그린다. 삶의 고통과 상실을 다루면서도 인간의 회복력과 희망을 강조하는 점에서 『여수의 사랑』과 유사한 정서를 담고 있다.",
    url: "https://mzhu8.com/book/1451/index.html",
  },
  {
    title: "长恨歌 -王安忆",
    image: "../../images/about-books/white-book-2.png",
    script: "이 작품은 농촌 청년 샤오겅(小耿)이 도시로 와서 택배 일을 하며 병든 아버지의 치료비를 마련하는 과정을 그린다. 그는 배달 중 정신적으로 불안정한 여성 장거(张舸)를 만나게 되고, 두 사람은 함께 도피하는 여정을 떠난다. 이 과정에서 그들은 사회적 억압과 개인의 자유 사이에서 갈등하며, 자신의 내면과 마주하게 된다. 이는 『채식주의자』에서 영혜가 사회적 기대와 개인의 욕망 사이에서 갈등하는 모습과 상응한다.",
    url: "https://baijiahao.baidu.com/s?id=1771624430917415402&wfr=spider&for=pc",
  },
];

const yeosuTextMap = [
  <>
    한강의 첫 소설집인 『여수의 사랑』은 1995년에 출간되었으며, 삶의 본질적인 외로움과 고단함을 섬세하게 살피며 존재의 상실과 방황을 그려낸 작품이다. 이 소설집에는 여수발 기차에 실려와 서울역에 버려진 자흔과 아내를 잃은 아버지가 자신과 동생을 데리고 동반자살을 시도했던 정선의 이야기를 담은 표제작 <b>「여수의 사랑」</b>을 비롯하여, 동생의 죽음을 목격한 인규의 이야기인 <b>「질주」</b>, 식물인간이 된 쌍둥이 동생의 삶까지 살아내야 하는 동걸의 이야기인 <b>「야간열차」</b>, 백치 같은 여동생을 버리고 고향에서 도망친 정환의 이야기인 <b>「진달래 능선」</b>, 그리고 집과 고향을 버리고 고아처럼 떠돌며 자신을 찾으려 애쓰는 영진과 인숙의 이야기인 <b>「어둠의 사육제」</b> 등 총 여섯 편의 단편이 수록되어 있다. 이들 작품에서 <b className="yeosu-blue">여수</b>는 상처 입고 병든 이들이 마침내 다다를 서러운 마음의 이름으로 그려지며, 운명과 죽음에 대한 진지한 시선이 녹아 있는 이야기들을 통해 고독하고 고립된 등장인물들의 떠남, 버림, 방황, 추락을 담아낸다.
  </>,
  <>
    한강의 『여수의 사랑』 은 서정성이 두드러지는 문체와 풍부한 이미지가 특징이다. 작품 전편에 걸쳐 시적인 언어와 감각적인 묘사가 사용되어, 읽는 이는 마치 한 편의 서정시를 접하는 듯한 인상을 받는다. 실제로 평단에서는 “풍부한 이미지와 감각적인 문체는 한강 소설의 큰 특징” 이라고 평가하며, 아름답고 서정적인 문체가 작품의 비극적 내용을 더욱 돋보이게 만든다고 말한다. 잔혹하고 슬픈 서사가 담긴 정선과 자흔의 이야기도 한강의 절제된 표현을 통해 고요하고도 아릿한 울림을 준다. 한강은 폭력과 고통을 직접적으로 쏟아내기 보다는, 이미지를 통해 정서적 파장을 일으키는 방식으로 이야기를 이끌어 간다. 예컨대 여수의 바다, 흐릿한 노을, 어스름한 기차역 같은 상징적 장면들이 말없이 등장하여 인물들의 내면을 대변한다. 이러한 이미지 중심의 서술은 독자로 하여금 행간의 감정을 느끼게 하고, 이야기가 끝난 뒤에도 차가우면서도 뜨거운 여운을 남긴다.
  </>,
  <>
    또한 한강의 문체는 절제되어 있으면서도 매우 섬세하다. 대단히 극적인 사건들을 다루면서도 과장이나 신파를 배제하고, 차분한 어조로 인물들의 내면을 파고드는 것이 특징이다. 이에 대해 평론가들은 “스토리와 소재는 매우 강렬하지만, 서정적이고 절제된 문체로 표현됨으로써 오히려 이야기가 더 증폭되고 독자를 몰입시킨다”고 평한다. 실제로 한강의 섬세한 문장은 고통마저도 아름답게 느껴지게 할 정도로 독특한 미감을 지니고 있으며, 이러한 문학적 미학은 『여수의 사랑』 에서도 잘 드러난다. 작품 전반의 분위기는 고요한 비애와 그리움, 그리고 깊은 연민으로 요약될 수 있다. 정선과 자흔의 상처 입은 마음을 따라가다 보면, 독자는 쓸쓸하면서도 따뜻한 정서를 느끼게 된다. 한강 작가 특유의 잔잔한 서정성은 이야기 속 절망과 희망을 모두 감싸 안으며, 비극 속에서도 한 줄기 인간미와 연민의 빛을 발견하게 한다.
  </>,
];

const Yeosu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);
  const [rootEl, setRootEl] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    if (scrollRef.current) {
      setRootEl(scrollRef.current);
    }
  }, []);

  return(
    <>
      <div className="yeosu-back"></div>
      <div className="yeosu-container">
        <div className="yeosu-title">
          <Button onClick={() => nav("/aboutbooks")}/>
          <span>여수의 사랑</span>
        </div>
        <div className="yeosu-content" ref={scrollRef}>
          {yeosuTextMap.map((item, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3, root: rootEl }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="yeoosu-paragraph"
            >
              {item}
            </motion.p>
          ))}
        </div>
        <YeosuAni />
        <GoButton ment="비슷한 중국 작품" onClick={() => setIsOpen(true)}/>
      </div>

      {isOpen && (
        <Modal data={yeosuModalData} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default Yeosu;