import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ZLineDrawSection from '../components/ZLineDrawSection'

const PATHS = [
  {
    title: 'Custom Projects',
    description:
      'Built from scratch around your own idea, problem statement and college requirements — a project that is genuinely yours.',
    className: 'bg-violet-100',
  },
  {
    title: 'Pre-Built Projects',
    description:
      'Start from a working project in your domain and customize it — faster to get moving, still yours to explain and defend.',
    className: 'bg-blue-100',
  },
]

export default function ProjectLearning() {
  const [transitioning, setTransitioning] = useState(false)
  const lineDrawRef = useRef<HTMLDivElement>(null)

  const goToLineDraw = () => {
    if (transitioning) return
    setTransitioning(true)
    window.setTimeout(() => {
      lineDrawRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 350)
    window.setTimeout(() => {
      setTransitioning(false)
    }, 1000)
  }

  return (
    <>
      <AnimatePresence>
        {transitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block skew-x-12 font-display text-8xl font-black text-white"
            >
              Z
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <PageHero
        eyebrow="Rural Tech Empowerment"
        description={
          <>
            Pick a custom-built project or a pre-built one —
            <br />
            we scope it, build it with you, and keep you in the loop the whole way.
          </>
        }
        navTheme="dark"
        decoration={
          <div aria-hidden className="absolute inset-0">
            <img
              src="/images/project_learning.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/45" />
          </div>
        }
      >
        Project Learning
      </PageHero>

      {/* Two paths */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
            Two ways to learn by building
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PATHS.map((path, i) => (
            <Reveal key={path.title} delay={i * 0.08} y={0} x={i === 0 ? -80 : 80}>
              <div
                onClick={goToLineDraw}
                role="button"
                tabIndex={0}
                className={`animate-float flex cursor-pointer flex-col gap-3 rounded-2xl border border-line p-8 ${path.className}`}
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                <h3 className="font-display text-xl font-bold text-ink">{path.title}</h3>
                <p className="text-sm leading-6 text-ink-soft">{path.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Scroll-scrubbed Z line-draw, pinned full-screen */}
      <ZLineDrawSection ref={lineDrawRef} />

      {/* Final choice */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
          Ready to start? Pick your path.
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary group">
            Build a Custom Project
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link to="/contact" className="btn-secondary">
            Choose a Pre-Built Project
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}
