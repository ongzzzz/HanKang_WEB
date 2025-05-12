import useTranslateStore from '../../store/translate/useTraslateStore';

import Nav from '../../components/nav/Nav';
import Translate from '../../components/button/Translate';
import "../../styles/about-her/AboutHer.scss";

const AboutHer = () => {
  const { lang } = useTranslateStore();

  return (
    <div className="abouther-container">
      <Nav />
      <Translate />
      <div className="writer-wrapper">
        <div className="photos">
          <p className={`name-hankang lang-${lang}`}>
            {lang === "kr" ? "한강" : "韩江"}
          </p>
          <img className="line-1" src="../../images/about-her/line1.png" />
          <img className="star" src="../../images/about-her/sticker-star.png" />
          <p className={`ment1 lang-${lang}`}>
            {lang === "kr" ? (
              <>
                아버지 소설가 <b>한승원</b>.
                <br /> 오빠 동화작가 <b>한규호</b>.
                <br /> 문학가 집안의 딸
              </>
            ): (
              <>
                父亲是小说家 <b>韩胜源</b>.
                <br />哥哥是童话作家 <b>韩奎浩</b>.
                <br />出生于文学世家
              </>
            )}
          </p>
          <img className="photo-hankang" src="../../images/about-her/hankang.png" />
          <img className="line-2" src="../../images/about-her/line2.png" />
          <img className="music" src="../../images/about-her/sticker-music.png" />
          <p className={`ment2 lang-${lang}`}>
            {lang === "kr" ? (
              <>
                어떻게 이별까지 사랑하겠어, 
                <br /> 널 사랑하는 거지 - <b>악뮤</b>
                <br /> 월량대표아적심 - <b>오혁.ver</b>
                <br /> 나의 노래 - <b>김광석</b>
              </>
            ) : (
              <>
                怎么会爱上离别呢,
                <br />只是爱着你 - <b>乐童音乐家</b>
                <br />月亮代表我的心 - <b>吴赫.ver</b>
                <br />我的歌 - <b>金光石</b>
              </>
            )}
          </p>
          <img className="line-3" src="../../images/about-her/line3.png" />
          <p className={`let-go-btn lang-${lang}`}>
            {lang === "kr" ? (
              <>
                <b className='her-blue'>수상경력</b> 보러가기
              </>
            ) : (
              <>
                查看<b className='her-blue'>获奖经历</b>
              </>
            )}
            
            </p>
        </div>
        <div className={`ments lang-${lang}`}>
            {lang === "kr" ? (
              <>
                <p className='bold-ments'>“ 내 작품은 항상 불완전하다. 그것이 나의 정체성이다.”</p>
                <span>
                대한민국의 시인이자 소설가. 대한민국 최초이자 아시아 여성 최초의 노벨문학상 수상자이다. <br />그녀의 문학은 삶과 죽음, 침묵과 말, 고통과 회복의 경계에 끊임없이 질문을 던진다. <br />서울에서 태어난 그녀는 연세대학교 국문학과를 졸업한 후, 1994년 『문학과 사회』 신인문학상을 통해 등단하였으며, <br />이후 시와 소설, 산문을 넘나들며 꾸준히 작품 활동을 이어왔다. <br />한강의 문체는 서정적이고 절제되어 있으며, 그 안에서 반복되는 고요한 이미지들은 폭력과 상처의 실체를 은유적으로 드러낸다. <br />그녀는 자연과 인간의 연결성, 존재의 경이로움에 대해 탐색하며, 작품을 통해 생명과 죽음의 순환 속에서 피어나는 인간의 연약함과 아름다움을 담아내고자 한다. <br />문학적 성취에 대한 찬사에도 불구하고, 한강은 자신이 받은 상과 인정을 <br />‘문학을 위한 작은 기여’로만 여길 뿐, 예술이 인간의 상처에 닿을 수 있기를 바라는 마음으로 글을 쓴다. <br />그녀의 작품은 독자에게 위로보다는 조용한 동행이 되기를 바라며, 세상의 고요한 진실을 바라보는 창으로서 존재한다.
                </span>
              </>
            ): (
              <>
                <p className='bold-ments'>“ 我的作品始终是不完美的。这就是我的身份认同。”</p>
                <span>
                她是大韩民国的诗人兼小说家, 亦是韩国首位、亚洲首位获得诺贝尔文学奖的女性作家。<br />她的文学不断对生命与死亡, 沉默与言语、痛苦与修复之间的界限发问。<br />出生于首尔的她, 毕业于延世大学国文系, 1994年通过《文学与社会》新人文学奖正式出道,<br />此后在诗歌, 小说与散文领域持续开展创作活动。<br />韩江的文体抒情而克制, 其中反复出现的静谧意象隐喻了暴力与创伤的本质。<br />她探索自然与人类之间的联结, 试图通过作品描绘出生命与死亡循环中绽放的人类脆弱与美丽。<br />尽管获得了文学成就与赞誉, 韩江仍将自己所获奖项与认可仅视为 <br />“对文学的一点小小贡献”, 并以希望艺术能够触及人类伤痕的心意, 继续写作。<br />她的作品并不试图安慰读者, 而更像是沉静的同行者, 作为一扇凝望世界静默真相的窗, 静静地存在着。
                </span>
              </>
            )}

          
          

        </div>
      </div>
    </div>
  );
};

export default AboutHer;