import Nav from '../../components/nav/Nav';
import Translate from '../../components/button/Translate';
import "../../styles/about-her/AboutHer.scss";

const AboutHer = () => {
  return (
    <div className="abouther-container">
      <Nav />
      <Translate />
      <div className="writer-wrapper">
        <div className="photos">
          <p className="name-hankang">한강</p>
          <img className="line-1" src="../../images/about-her/line1.png" />
          <img className="star" src="../../images/about-her/sticker-star.png" />
          <p className="ment1">아버지 소설가 <b>한승원</b>.
            <br /> 오빠 동화작가 <b>한규호</b>.
            <br /> 문학가 집안의 딸</p>
          <img className="photo-hankang" src="../../images/about-her/hankang.png" />
          <img className="line-2" src="../../images/about-her/line2.png" />
          <img className="music" src="../../images/about-her/sticker-music.png" />
          <p className="ment2">어떻게 이별까지 사랑하겠어, 
            <br /> 널 사랑하는 거지 - <b>악뮤</b>
            <br /> 월량대표아적심 - <b>오혁.ver</b>
            <br /> 나의 노래 - <b>김광석</b></p>
          <img className="line-3" src="../../images/about-her/line3.png" />
          <p className="let-go-btn"><b className="her-blue">수상경력</b> 보러가기</p>
        </div>
        <div className="ments">
          <p className='bold-ments'>“ 내 작품은 항상 불완전하다. 그것이 나의 정체성이다.”</p>
          <span>
            대한민국의 시인이자 소설가. 대한민국 최초이자 아시아 여성 최초의 노벨문학상 수상자이다. <br />
            그녀의 문학은 삶과 죽음, 침묵과 말, 고통과 회복의 경계에 끊임없이 질문을 던진다. <br />
            서울에서 태어난 그녀는 연세대학교 국문학과를 졸업한 후, 1994년 『문학과 사회』 신인문학상을 통해 등단하였으며, <br />이후 시와 소설, 산문을 넘나들며 꾸준히 작품 활동을 이어왔다. <br />
            한강의 문체는 서정적이고 절제되어 있으며, 그 안에서 반복되는 고요한 이미지들은 폭력과 상처의 실체를 은유적으로 드러낸다. <br />
            그녀는 자연과 인간의 연결성, 존재의 경이로움에 대해 탐색하며, 작품을 통해 생명과 죽음의 순환 속에서 피어나는 인간의 연약함과 아름다움을 담아내고자 한다. <br />
            문학적 성취에 대한 찬사에도 불구하고, 한강은 자신이 받은 상과 인정을 <br />‘문학을 위한 작은 기여’로만 여길 뿐, 예술이 인간의 상처에 닿을 수 있기를 바라는 마음으로 글을 쓴다. <br />
            그녀의 작품은 독자에게 위로보다는 조용한 동행이 되기를 바라며, 세상의 고요한 진실을 바라보는 창으로서 존재한다.
          </span>

        </div>
      </div>
    </div>
  );
};

export default AboutHer;