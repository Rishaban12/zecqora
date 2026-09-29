import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'

const ROLES = [
  {
    title: 'Software Engineer',
    type: 'Full-time',
    place: 'Bengaluru / Remote',
    summary: 'Build websites, student projects, and product MVPs on modern web stacks.',
  },
  {
    title: 'AI Engineer',
    type: 'Full-time',
    place: 'Chennai / Remote',
    summary: 'Ship practical AI features — retrieval, workflows, and evals — not slideware.',
  },
  {
    title: 'Campus Mentor',
    type: 'Part-time',
    place: 'Thanjavur & Mannargudi',
    summary: 'Guide student projects through design, code walkthroughs, and viva prep.',
  },
]

const STEPS = [
  { n: '01', title: 'Write to us', text: 'A short note on what you build and where you want to sit.' },
  { n: '02', title: 'A real conversation', text: 'We talk through work you have shipped, not a puzzle round.' },
  { n: '03', title: 'A small trial', text: 'A scoped piece of studio work so both sides can see the fit.' },
]

export default function Careers() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-start gap-8 px-6 pt-28 pb-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pt-32">
        <div className="pt-2">
          <p className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] text-ink uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
            Careers
          </p>
          <h1 className="font-display mt-4 max-w-lg text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            Grow with Zecqora.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-ink-soft">
            A small studio. Real client and student work. Room to move between engineering, AI, and teaching.
          </p>
        </div>
        <div className="rounded-[28px] border border-line bg-white p-7">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-faint uppercase">How we hire</p>
          <ol className="mt-5 flex flex-col gap-5">
            {STEPS.map((step) => (
              <li key={step.n} className="flex gap-4">
                <span className="font-mono text-xs text-ink">{step.n}</span>
                <div>
                  <p className="font-display text-base font-semibold text-ink">{step.title}</p>
                  <p className="mt-1 text-sm leading-6 text-ink-soft">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link to="/contact" className="btn-primary group mt-7">
            Write to us
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-4">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ['Real work, early', 'You ship with clients and students, not only internal demos.'],
            ['English & Tamil', 'We work in the language the conversation needs.'],
            ['Room to learn', 'Product, AI, and teaching sit in the same studio.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-line bg-white px-5 py-5">
              <h2 className="font-display text-base font-semibold text-ink">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-faint uppercase">Open conversations</p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink">Roles we are building around</h2>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {ROLES.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.05}>
              <article className="grid gap-4 rounded-2xl border border-line bg-white p-6 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-semibold text-ink">{role.title}</h3>
                    <span className="rounded-full bg-yellow px-2.5 py-1 text-xs font-semibold text-ink">{role.type}</span>
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-ink-soft">{role.summary}</p>
                  <p className="mt-3 inline-flex items-center gap-1 text-xs text-ink-faint">
                    <MapPin className="h-3.5 w-3.5" />
                    {role.place}
                  </p>
                </div>
                <Link to="/contact" className="btn-secondary w-fit">
                  Apply
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Don't see your role listed?"
        description="We're always open to hearing from people who want to build something real — reach out anyway."
        primary={{ label: 'Get in Touch', to: '/contact' }}
        secondary={{ label: 'About Zecqora', to: '/about' }}
      />
    </>
  )
}
