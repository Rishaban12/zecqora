import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import ScribbleHighlight from '../components/ScribbleHighlight'

const FOUNDERS = [
  { name: 'Arjun R.', role: 'Founder & CEO', focus: 'Direction, clients, and how the studio shows up.' },
  { name: 'Sneha K.', role: 'Co-Founder & CTO', focus: 'Engineering, delivery, and the systems we leave behind.' },
  { name: 'Rahul V.', role: 'Co-Founder & Head of AI', focus: 'Where AI actually helps — and where it should stay out.' },
]

const AUDIENCES = [
  { kicker: '01', title: 'Growing businesses', text: 'Websites, products, and AI workflows you can launch and keep running.' },
  { kicker: '02', title: 'Students', text: 'Mini, major, and final-year projects you understand well enough to defend.' },
  { kicker: '03', title: 'Career builders', text: 'Resumes and learning tracks that match the skills you are moving into.' },
]

export default function About() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-end gap-12 px-6 pt-40 pb-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] text-ink uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
            About us
          </p>
          <h1 className="font-display mt-6 max-w-xl text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            We build technology that moves businesses forward.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-ink-soft sm:text-lg">
            Custom software and AI for teams that want to grow — without becoming a technology company first.
          </p>
          <Link to="/manifesto" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink">
            Read the manifesto
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-3">
          {[
            ['4 cities', 'Bengaluru, Chennai, Thanjavur & Mannargudi'],
            ['2 languages', 'Conversations in English and Tamil'],
            ['1 standard', 'Work you can launch, submit, and defend'],
          ].map(([value, label]) => (
            <div key={value} className="rounded-2xl border border-line bg-white px-5 py-4">
              <p className="font-display text-xl font-semibold tracking-[-0.03em] text-ink">{value}</p>
              <p className="mt-1 text-sm text-ink-soft">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="rounded-[28px] bg-yellow px-8 py-10 sm:px-12">
          <p className="font-display max-w-3xl text-2xl leading-snug font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
            <ScribbleHighlight className="whitespace-normal">
              <span>Advanced technology for every business.</span>
            </ScribbleHighlight>
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/80 sm:text-base">
            Zecqora exists so a clinic, a campus team, or a growing shop can use modern software without hiring a full engineering department.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-faint uppercase">Who we work with</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {AUDIENCES.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-white p-6">
              <p className="font-mono text-xs text-ink-faint">{item.kicker}</p>
              <h2 className="font-display mt-3 text-xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-faint uppercase">The people</p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink">Who you will meet</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {FOUNDERS.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.06} className="rounded-2xl border border-line bg-white p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-mono text-xs text-yellow">
                {founder.name
                  .split(' ')
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join('')}
              </span>
              <h3 className="font-display mt-5 text-lg font-semibold text-ink">{founder.name}</h3>
              <p className="mt-1 text-sm font-medium text-ink">{founder.role}</p>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{founder.focus}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
