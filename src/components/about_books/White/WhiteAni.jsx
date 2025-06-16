import { useEffect, useRef, useMemo } from "react"
import { animate, hover } from "motion"
import { splitText } from "motion-plus"
import { useMotionValue } from "motion/react"
import useTranslateStore from "../../../store/translate/useTraslateStore"

import "../../../styles/about_books/White/WhiteAni.scss"

const WhiteAni = () => {
  const {lang} = useTranslateStore();
  const contentRef = useRef(null)
  const velocityX = useMotionValue(0)
  const velocityY = useMotionValue(0)
  const prevEvent = useRef(0)

  const whitecontentKR = `『흰』은 흰색을 주제로 한 열여덟 개의 짧은 이야기로 구성되어 있으며, 각 이야기에서는 강보, 배내옷, 소금, 눈, 얼음, 달, 백발, 수의 등 다양한 흰색 사물을 다루고 있습니다. 작가는 겨울이 긴 북유럽의 한 도시에서, 태어나자마자 세상을 떠난 언니를 떠올리며, 흰색을 통해 죽음과 상실, 그리고 그 안에서 발견하는 평온함과 고요함을 섬세하게 그려냅니다. 이 작품은 한강 작가 특유의 서정적인 문체로, 흰색을 매개로 한 삶과 죽음, 존재의 의미를 깊이 있게 탐구하고 있습니다.`;
  const whitecontentCN = `《白》由十八个以“白色”为主题的短篇组成，每一篇都围绕襁褓、婴儿衣、盐、雪、冰、月亮、白发、寿衣等各种白色事物展开。作家在北欧一个冬季漫长的城市中，回忆起出生后不久便离世的姐姐，通过"白色"这一意象，细腻地描绘了死亡与失落，以及在其中所发现的平静与宁静。这部作品以韩江特有的抒情文笔，深刻探讨了借由“白色”这一媒介，对生命与死亡、存在意义的沉思。`;

  const text = lang === "kr" ? whitecontentKR : whitecontentCN;
  const letters = useMemo(() => text.split(""), [text])

  useEffect(() => {
    if (!contentRef.current) return;

    const { chars } = splitText(contentRef.current)

    const handlePointerMove = (event) => {
      const now = performance.now()
      const timeSinceLastEvent = (now - prevEvent.current) / 1000
      prevEvent.current = now
      velocityX.set(event.movementX / timeSinceLastEvent)
      velocityY.set(event.movementY / timeSinceLastEvent)
    }

    document.addEventListener("pointermove", handlePointerMove)

    hover(chars, (element) => {
      const speed = Math.sqrt(
        velocityX.get() * velocityX.get() + velocityY.get() * velocityY.get()
      )
      const angle = Math.atan2(velocityY.get(), velocityX.get())
      const distance = speed * 0.1

      animate(
        element,
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        },
        { type: "spring", stiffness: 100, damping: 50 }
      )
    })

    return () => {
      document.removeEventListener("pointermove", handlePointerMove)
    }
  }, [lang]);

  return (
    <div className="white-ani-container">
      <div className="white-ani-title">
        <span className="en">WHITE</span>
        <span className={`kr lang-${lang}`}>{lang === "kr" ? "흰" : "白"}</span>
      </div>
      <div className="white-ani-content">
      <p
        className={`white-text lang-${lang}`}
        ref={contentRef}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      </div>
    </div>
  )
}

export default WhiteAni
