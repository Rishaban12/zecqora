import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

// Five fixed stops along the path — 2 on the top bar, 1 on the diagonal,
// 2 on the bottom bar. Each is "stamped" in place once the drawing line
// reaches it and then stays put; none of them travel with the line. Each
// dot also gets a light box next to it: above for the top-bar dots, to the
// right for the diagonal dot, below for the bottom-bar dots.
const DOT_POINTS: { cx: number; cy: number; box: 'above' | 'right' | 'below'; boxColor: string }[] = [
  { cx: 25, cy: 25, box: 'above', boxColor: 'bg-yellow-100' },
  { cx: 1380, cy: 25, box: 'above', boxColor: 'bg-pink-100' },
  { cx: 800, cy: 600, box: 'right', boxColor: 'bg-cyan-100' },
  { cx: 200, cy: 1175, box: 'below', boxColor: 'bg-emerald-100' },
  { cx: 1575, cy: 1175, box: 'below', boxColor: 'bg-violet-100' },
]

const VIEW_WIDTH = 1600
const VIEW_HEIGHT = 1200

// A dot's reveal point is resolved from the REAL rendered path (by sampling
// getPointAtLength), not a hand-estimated length — hand-estimating the arc
// length of the curved segments was drifting out of sync with the actual
// geometry, which is what caused dots to pop in before the line reached them.
function findLengthAtPoint(path: SVGPathElement, x: number, y: number, totalLength: number) {
  const samples = 1000
  let bestLength = 0
  let bestDist = Infinity
  for (let i = 0; i <= samples; i++) {
    const len = (totalLength * i) / samples
    const point = path.getPointAtLength(len)
    const dist = (point.x - x) ** 2 + (point.y - y) ** 2
    if (dist < bestDist) {
      bestDist = dist
      bestLength = len
    }
  }
  return bestLength
}

const REVEAL_BUFFER = 30

const ZLineDrawSection = forwardRef<HTMLDivElement>((_props, forwardedRef) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const svgWrapperRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const dotRefs = useRef<(SVGCircleElement | null)[]>([])
  const boxRefs = useRef<(HTMLDivElement | null)[]>([])

  useImperativeHandle(forwardedRef, () => sectionRef.current as HTMLDivElement)

  useEffect(() => {
    const trigger = svgWrapperRef.current
    const path = pathRef.current
    if (!trigger || !path) return

    const length = path.getTotalLength()
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
    gsap.set(dotRefs.current, { opacity: 0 })
    gsap.set(boxRefs.current, { opacity: 0 })

    const dotThresholds = DOT_POINTS.map((dot, i) => {
      if (i === 0) return 0
      const atLength = findLengthAtPoint(path, dot.cx, dot.cy, length)
      return Math.min(atLength + REVEAL_BUFFER, length)
    })

    // No pin/sticky: the section scrolls normally, the draw is scrubbed across
    // its transit through the viewport. Ending at "center top" instead of
    // "bottom top" finishes the draw comfortably before the section scrolls
    // out, so it never gets cut off mid-way when the next section arrives.
    const st = ScrollTrigger.create({
      trigger,
      start: 'top bottom',
      end: 'center top',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress
        const offset = length * (1 - progress)
        path.style.strokeDashoffset = String(offset)

        const drawnLength = length * progress
        dotThresholds.forEach((atLength, i) => {
          const dot = dotRefs.current[i]
          const box = boxRefs.current[i]
          const visible = drawnLength >= atLength
          if (dot) gsap.set(dot, { opacity: visible ? 1 : 0 })
          if (box) gsap.set(box, { opacity: visible ? 1 : 0 })
        })
      },
    })

    return () => {
      st.kill()
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative flex h-[220vh] w-full items-center justify-center pt-[40vh] pb-[40vh] pl-[15vw] pr-[15vw]"
      style={{ backgroundColor: '#102A24' }}
    >
      <div ref={svgWrapperRef} className="relative h-full w-full">
        <svg viewBox="0 0 1600 1200" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path
            ref={pathRef}
            d="M25,25
       L1400,25
       Q1600,25 1550,150
       L50,1050
       Q0,1175 200,1175
       L1575,1175"
            fill="none"
            stroke="#FAF9F5"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {DOT_POINTS.map((dot, i) => (
            <circle
              key={i}
              ref={(el) => {
                dotRefs.current[i] = el
              }}
              cx={dot.cx}
              cy={dot.cy}
              r="12"
              fill="#FAF9F5"
            />
          ))}
        </svg>

        {DOT_POINTS.map((dot, i) => {
          const transform =
            dot.box === 'above'
              ? 'translate(-50%, calc(-100% - 56px))'
              : dot.box === 'right'
                ? 'translate(140px, -50%)'
                : 'translate(-50%, 56px)'
          return (
            <div
              key={i}
              ref={(el) => {
                boxRefs.current[i] = el
              }}
              className={`absolute h-40 w-64 rounded-2xl shadow-[0_20px_40px_-16px_rgba(0,0,0,0.4)] ${dot.boxColor}`}
              style={{
                left: `${(dot.cx / VIEW_WIDTH) * 100}%`,
                top: `${(dot.cy / VIEW_HEIGHT) * 100}%`,
                transform,
              }}
            />
          )
        })}
      </div>
    </div>
  )
})

ZLineDrawSection.displayName = 'ZLineDrawSection'

export default ZLineDrawSection
