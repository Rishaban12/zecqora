import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Bug,
  ChevronDown,
  ClipboardList,
  Code2,
  LayoutTemplate,
  PenTool,
  Rocket,
  type LucideIcon,
} from 'lucide-react'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

// Six fixed stops along the path, one per stage of the software development
// lifecycle — 2 on the top bar, 1 on the diagonal... wait, actually: 2 on the
// top bar, 2 on the diagonal, 2 on the bottom bar. Each is "stamped" in place
// once the drawing line reaches it and then stays put; none of them travel
// with the line. Each dot also gets a light info box next to it: above for
// the top-bar dots, to the right for the diagonal dots, below for the
// bottom-bar dots.
const DOT_POINTS: {
  cx: number
  cy: number
  box: 'above' | 'right' | 'below'
  boxColor: string
  title: string
  points: string[]
  icon: LucideIcon
}[] = [
  {
    cx: 25,
    cy: 25,
    box: 'above',
    boxColor: 'bg-yellow-100',
    title: 'Requirements & Analysis',
    icon: ClipboardList,
    points: [
      'Identify the business problem',
      'Understand the target users',
      'Define the business goals',
      'Gather functional & non-functional requirements',
      'Define project scope & constraints',
    ],
  },
  {
    cx: 1300,
    cy: 25,
    box: 'above',
    boxColor: 'bg-pink-100',
    title: 'Planning',
    icon: LayoutTemplate,
    points: [
      'Choose the technology stack',
      'Plan the development timeline',
      'Assess risks & dependencies',
    ],
  },
  {
    cx: 1217,
    cy: 350,
    box: 'right',
    boxColor: 'bg-cyan-100',
    title: 'Design',
    icon: PenTool,
    points: [
      'Design the system architecture',
      'Break down modules & components',
      'Model the database schema',
      'Define API contracts',
      'Structure the overall system',
    ],
  },
  {
    cx: 170,
    cy: 978,
    box: 'right',
    boxColor: 'bg-orange-100',
    title: 'Development',
    icon: Code2,
    points: [
      'Learning the project requirements',
      'Coding',
    ],
  },
  {
    cx: 250,
    cy: 1175,
    box: 'below',
    boxColor: 'bg-emerald-100',
    title: 'Testing',
    icon: Bug,
    points: ['Bug Fixing your project'],
  },
  {
    cx: 1575,
    cy: 1175,
    box: 'below',
    boxColor: 'bg-violet-100',
    title: 'Internship Certifications',
    icon: Rocket,
    points: ['One-on-one session with our developers', 'Internship certifications'],
  },
]

const VIEW_WIDTH = 1600
const VIEW_HEIGHT = 1200

// Each dot sits exactly on the path, so its arc-length position is found by
// sampling the real rendered geometry rather than hand-estimating curve
// lengths — that's what kept drifting out of sync before.
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

const ZLineDrawSection = forwardRef<HTMLDivElement>((_props, forwardedRef) => {
  const [activeDot, setActiveDot] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const svgWrapperRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const dotRefs = useRef<(SVGGElement | null)[]>([])
  const boxRefs = useRef<(HTMLDivElement | null)[]>([])
  const connectorRefs = useRef<(HTMLDivElement | null)[]>([])
  const buildLetterRefs = useRef<(HTMLSpanElement | null)[]>([])
  const learnLetterRefs = useRef<(HTMLSpanElement | null)[]>([])
  const adaptLetterRefs = useRef<(HTMLSpanElement | null)[]>([])
  // x-range (in viewBox units, along the straight top segment) that the
  // "BUILD" watermark spans — between the first two dots.
  const BUILD_X_START = 265
  const BUILD_X_END = 650
  const BUILD_LETTERS = ['B', 'U', 'I', 'L', 'D']
  // "LEARN" sits between the Design and Development dots, along the diagonal
  // segment — same idea as BUILD, just tilted to follow that line's angle.
  const LEARN_LETTERS = ['L', 'E', 'A', 'R', 'N']
  // Offset by the same amount the 'right' boxes are shifted from their dots,
  // so this centers on the boxes themselves rather than the raw dots on the line.
  const LEARN_MID_X = (DOT_POINTS[2].cx + DOT_POINTS[3].cx) / 2 + 70
  const LEARN_MID_Y = (DOT_POINTS[2].cy + DOT_POINTS[3].cy) / 2 - 40
  const LEARN_ANGLE = Math.atan2(
    -(DOT_POINTS[3].cy - DOT_POINTS[2].cy),
    -(DOT_POINTS[3].cx - DOT_POINTS[2].cx),
  ) * (180 / Math.PI)
  // "ADAPT" sits between the Testing and Internship Certifications dots,
  // along the (near-horizontal) bottom bar — same treatment as BUILD.
  const ADAPT_X_START = 440
  const ADAPT_X_END = 940
  const ADAPT_LETTERS = ['A', 'D', 'A', 'P', 'T']

  useImperativeHandle(forwardedRef, () => sectionRef.current as HTMLDivElement)

  useEffect(() => {
    const trigger = svgWrapperRef.current
    const path = pathRef.current
    if (!trigger || !path) return

    const length = path.getTotalLength()
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
    // Dots are fixed in place from the start — they never fade in. Only the
    // boxes wait, appearing once the drawing line actually touches their dot.
    gsap.set(dotRefs.current, { opacity: 1 })
    gsap.set(boxRefs.current, { opacity: 0 })
    gsap.set(connectorRefs.current, { opacity: 0 })

    const boxThresholds = DOT_POINTS.map((dot) => findLengthAtPoint(path, dot.cx, dot.cy, length))

    // "BUILD" watermark stamps in one letter at a time as the line draws
    // across this same x-range, between the first two dots — each letter
    // gets its own even slice of that stretch.
    const buildStartLength = findLengthAtPoint(path, BUILD_X_START, 25, length)
    const buildEndLength = findLengthAtPoint(path, BUILD_X_END, 25, length)
    const letterThresholds = BUILD_LETTERS.map(
      (_, i) => buildStartLength + ((buildEndLength - buildStartLength) * (i + 1)) / BUILD_LETTERS.length,
    )
    gsap.set(buildLetterRefs.current, { opacity: 0, y: 12 })

    // "LEARN" reuses the Design/Development dot thresholds already computed
    // above (indices 2 and 3) so it stamps in over that same stretch.
    const learnStartLength = boxThresholds[2]
    const learnEndLength = boxThresholds[3]
    const learnLetterThresholds = LEARN_LETTERS.map(
      (_, i) => learnStartLength + ((learnEndLength - learnStartLength) * (i + 1)) / LEARN_LETTERS.length,
    )
    gsap.set(learnLetterRefs.current, { opacity: 0, y: 12 })

    // "ADAPT" stamps in across this x-range along the bottom bar, between
    // the Testing and Internship Certifications dots.
    const adaptStartLength = findLengthAtPoint(path, ADAPT_X_START, 1175, length)
    const adaptEndLength = findLengthAtPoint(path, ADAPT_X_END, 1175, length)
    const adaptLetterThresholds = ADAPT_LETTERS.map(
      (_, i) => adaptStartLength + ((adaptEndLength - adaptStartLength) * (i + 1)) / ADAPT_LETTERS.length,
    )
    gsap.set(adaptLetterRefs.current, { opacity: 0, y: 12 })

    // No pin/sticky: the section scrolls normally, the draw is scrubbed across
    // its transit through the viewport. Ending at "center top" instead of
    // "bottom top" finishes the draw comfortably before the section scrolls
    // out, so it never gets cut off mid-way when the next section arrives.
    // scrub: 1 (instead of `true`) adds a short smoothing lag so the draw
    // eases behind fast/jerky scroll input rather than snapping instantly.
    const st = ScrollTrigger.create({
      trigger,
      start: 'top bottom',
      end: 'center top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        const offset = length * (1 - progress)
        path.style.strokeDashoffset = String(offset)

        const drawnLength = length * progress
        boxThresholds.forEach((atLength, i) => {
          const visible = drawnLength >= atLength
          const box = boxRefs.current[i]
          const connector = connectorRefs.current[i]
          if (box) gsap.set(box, { opacity: visible ? 1 : 0 })
          if (connector) gsap.set(connector, { opacity: visible ? 1 : 0 })
        })

        letterThresholds.forEach((atLength, i) => {
          const letter = buildLetterRefs.current[i]
          if (!letter) return
          const visible = drawnLength >= atLength
          gsap.set(letter, { opacity: visible ? 1 : 0, y: visible ? 0 : 12 })
        })

        learnLetterThresholds.forEach((atLength, i) => {
          const letter = learnLetterRefs.current[i]
          if (!letter) return
          const visible = drawnLength >= atLength
          gsap.set(letter, { opacity: visible ? 1 : 0, y: visible ? 0 : 12 })
        })

        adaptLetterThresholds.forEach((atLength, i) => {
          const letter = adaptLetterRefs.current[i]
          if (!letter) return
          const visible = drawnLength >= atLength
          gsap.set(letter, { opacity: visible ? 1 : 0, y: visible ? 0 : 12 })
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
      data-nav-theme="dark"
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
            <g
              key={i}
              ref={(el) => {
                dotRefs.current[i] = el
              }}
            >
              {/* soft glow */}
              <circle cx={dot.cx} cy={dot.cy} r="20" fill="#FED24F" opacity="0.18" style={{ filter: 'blur(6px)' }} />
              {/* thin subtle ring */}
              <circle cx={dot.cx} cy={dot.cy} r="15" fill="none" stroke="#FED24F" strokeWidth="1.5" opacity="0.6" />
              {/* solid yellow core */}
              <circle cx={dot.cx} cy={dot.cy} r="7" fill="#FED24F" />
            </g>
          ))}
        </svg>

        {/* "BUILD" watermark — stamps in one letter at a time as the line
            draws across this stretch, between the first two dots. */}
        <div
          aria-hidden
          className="pointer-events-none absolute flex font-display text-[13vw] leading-none font-black tracking-tight text-white uppercase select-none"
          style={{
            left: `${(BUILD_X_START / VIEW_WIDTH) * 100}%`,
            top: `${(25 / VIEW_HEIGHT) * 100}%`,
            transform: 'translateY(calc(-100% - 24px))',
            opacity: 0.14,
          }}
        >
          {BUILD_LETTERS.map((letter, i) => (
            <span
              key={i}
              ref={(el) => {
                buildLetterRefs.current[i] = el
              }}
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </div>

        {/* "LEARN" watermark — same idea, tilted to follow the diagonal
            segment between the Design and Development dots. */}
        <div
          aria-hidden
          className="pointer-events-none absolute flex font-display text-[13vw] leading-none font-black tracking-tight text-white uppercase select-none"
          style={{
            left: `${(LEARN_MID_X / VIEW_WIDTH) * 100}%`,
            top: `${(LEARN_MID_Y / VIEW_HEIGHT) * 100}%`,
            transform: `rotate(${LEARN_ANGLE}deg) translate(-10%, -150px)`,
            opacity: 0.14,
          }}
        >
          {LEARN_LETTERS.map((letter, i) => (
            <span
              key={i}
              ref={(el) => {
                learnLetterRefs.current[i] = el
              }}
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </div>

        {/* "ADAPT" watermark — stamps in one letter at a time as the line
            draws across the bottom bar, between the Testing and Internship
            Certifications dots. */}
        <div
          aria-hidden
          className="pointer-events-none absolute flex font-display text-[13vw] leading-none font-black tracking-tight text-white uppercase select-none"
          style={{
            left: `${(ADAPT_X_START / VIEW_WIDTH) * 100}%`,
            top: `${(1175 / VIEW_HEIGHT) * 100}%`,
            transform: 'translateY(24px)',
            opacity: 0.14,
          }}
        >
          {ADAPT_LETTERS.map((letter, i) => (
            <span
              key={i}
              ref={(el) => {
                adaptLetterRefs.current[i] = el
              }}
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </div>

        {DOT_POINTS.map((dot, i) => {
          if (dot.box === 'right') {
            // The box sits 140px to the right of the dot — a small rotated
            // icon doesn't reach that far, so this gets its own wide arrow
            // that spans the actual gap and connects into the box.
            return (
              <div
                key={`connector-${i}`}
                ref={(el) => {
                  connectorRefs.current[i] = el
                }}
                className="pointer-events-none absolute h-14 w-36"
                style={{
                  left: `${(dot.cx / VIEW_WIDTH) * 100}%`,
                  top: `${(dot.cy / VIEW_HEIGHT) * 100}%`,
                  transform: 'translate(0, -50%)',
                }}
              >
                <svg viewBox="0 0 140 56" className="h-full w-full" fill="none">
                  <path
                    d="M6,20 C45,4 95,8 138,25"
                    stroke="#FAF9F5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="5 7"
                    opacity="0.85"
                  />
                </svg>
              </div>
            )
          }

          const connectorTransform =
            dot.box === 'above'
              ? 'translate(-50%, calc(-100% - 10px)) rotate(180deg)'
              : 'translate(-50%, 10px) rotate(0deg)'
          return (
            <div
              key={`connector-${i}`}
              ref={(el) => {
                connectorRefs.current[i] = el
              }}
              className="pointer-events-none absolute h-14 w-14"
              style={{
                left: `${(dot.cx / VIEW_WIDTH) * 100}%`,
                top: `${(dot.cy / VIEW_HEIGHT) * 100}%`,
                transform: connectorTransform,
              }}
            >
              <svg viewBox="0 0 60 60" className="h-full w-full" fill="none">
                <path
                  d="M14,6 C9,26 26,42 44,58"
                  stroke="#FAF9F5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="5 7"
                  opacity="0.85"
                />
              </svg>
            </div>
          )
        })}

        {DOT_POINTS.map((dot, i) => {
          // Fixed pixel Y-offsets (not height-relative %) so that growing the
          // box taller when expanded extends it downward from the same
          // anchor point, instead of growing back up around its own center.
          const transform =
            dot.box === 'above'
              ? 'translate(-50%, -216px)'
              : dot.box === 'right'
                ? 'translate(140px, -100px)'
                : 'translate(-50%, 56px)'
          const Icon = dot.icon
          const expanded = activeDot === i
          return (
            <div
              key={i}
              ref={(el) => {
                boxRefs.current[i] = el
              }}
              onClick={() => setActiveDot(expanded ? null : i)}
              role="button"
              tabIndex={0}
              className={`absolute flex w-64 cursor-pointer flex-col gap-3 overflow-hidden rounded-2xl p-4 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.4)] transition-[max-height,transform] duration-300 ease-in-out ${
                expanded ? 'z-10 min-h-40 max-h-[560px] hover:scale-100' : 'min-h-40 max-h-40 hover:scale-[1.03]'
              } ${dot.boxColor}`}
              style={{
                left: `${(dot.cx / VIEW_WIDTH) * 100}%`,
                top: `${(dot.cy / VIEW_HEIGHT) * 100}%`,
                transform,
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-display min-w-0 flex-1 text-lg font-bold text-ink">{dot.title}</p>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ink/10">
                  <Icon className="h-7 w-7 text-ink/70" />
                </div>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-ink/50 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              />
              {expanded && (
                <ul className="flex flex-col gap-2.5 pb-1">
                  {dot.points.map((line) => (
                    <li key={line} className="flex gap-2 text-sm leading-snug text-ink-soft">
                      <span className="text-ink-faint">·</span>
                      {line}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
})

ZLineDrawSection.displayName = 'ZLineDrawSection'

export default ZLineDrawSection
