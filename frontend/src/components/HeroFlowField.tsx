import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const INK = [16, 42, 36] as const
const MID = [90, 130, 72] as const
const YELLOW = [254, 210, 79] as const

function mix(a: readonly number[], b: readonly number[], t: number) {
  const k = t < 0 ? 0 : t > 1 ? 1 : t
  return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k]
}

function colorAt(t: number) {
  if (t < 0.45) return mix(INK, MID, t / 0.45)
  return mix(MID, YELLOW, (t - 0.45) / 0.55)
}

/** Horizontal ribbon wave — two overlapping streams of parallel curves. */
function waveY(xNorm: number, lane: number, phase: number) {
  const x = xNorm * Math.PI * 2
  const primary = Math.sin(x + phase) * 0.42
  const secondary = Math.sin(x * 0.5 + phase * 0.7 + 1.2) * 0.18
  const laneOffset = lane * 0.028
  return primary + secondary + laneOffset
}

export default function HeroFlowField() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let time = 0
    let frame = 0
    let visible = true

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = Math.max(1, Math.floor(wrap.clientWidth))
      height = Math.max(1, Math.floor(wrap.clientHeight))
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const paint = (animate: boolean) => {
      ctx.clearRect(0, 0, width, height)
      const mobile = width < 800
      const left = width * (mobile ? 0.04 : 0.38)
      const right = width * (mobile ? 0.96 : 0.98)
      const span = right - left
      const cy = height * 0.5
      const amp = Math.min(height * 0.28, 160)
      const phase = animate ? time * 0.55 : 0
      const lanes = mobile ? 22 : 34
      const segments = mobile ? 48 : 72

      for (let stream = 0; stream < 2; stream++) {
        const streamPhase = phase + stream * 0.9
        const streamShift = stream === 0 ? -0.08 : 0.1

        for (let lane = 0; lane < lanes; lane++) {
          const laneNorm = lane / (lanes - 1)
          const laneOffset = (laneNorm - 0.5) * 2.4 + streamShift * 8

          ctx.beginPath()
          for (let i = 0; i <= segments; i++) {
            const t = i / segments
            const x = left + t * span
            const y = cy + (waveY(t, laneOffset, streamPhase) + streamShift) * amp
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }

          const edgeFade = 1 - Math.abs(laneNorm - 0.5) * 1.4
          const alpha = Math.max(0.08, 0.22 * edgeFade) * (mobile ? 0.7 : 1)
          const [r, g, b] = colorAt(0.15 + laneNorm * 0.7 + stream * 0.12)
          ctx.strokeStyle = `rgba(${r | 0},${g | 0},${b | 0},${alpha})`
          ctx.lineWidth = mobile ? 1.1 : 1.35
          ctx.lineCap = 'round'
          ctx.lineJoin = 'round'
          ctx.stroke()
        }
      }
    }

    const tick = () => {
      if (!visible) return
      time += 0.016
      paint(true)
      frame = requestAnimationFrame(tick)
    }

    resize()
    paint(!reduced)

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (reduced) return
        if (visible) frame = requestAnimationFrame(tick)
        else cancelAnimationFrame(frame)
      },
      { threshold: 0.05 },
    )
    observer.observe(wrap)
    const ro = new ResizeObserver(resize)
    ro.observe(wrap)
    if (!reduced) frame = requestAnimationFrame(tick)

    return () => {
      visible = false
      cancelAnimationFrame(frame)
      observer.disconnect()
      ro.disconnect()
    }
  }, [reduceMotion])

  return (
    <div ref={wrapRef} className="hero-flow" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-flow-canvas" />
    </div>
  )
}
