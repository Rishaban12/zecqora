const ERAS = [
  {
    label: 'Before',
    title: 'Software was expensive to reach',
    text: 'Building took specialized teams, long cycles, and constant maintenance. For smaller and non-technical businesses, technology often felt out of reach.',
  },
  {
    label: 'Then',
    title: 'The cloud opened the door',
    text: 'Open-source tools and modern frameworks made software faster to build and easier to deploy for more kinds of businesses.',
  },
  {
    label: 'Now',
    title: 'Engineering got intelligent',
    text: 'AI assists design, development, testing, and upkeep — so people can spend more time on the actual problem.',
  },
  {
    label: 'Zecqora',
    title: 'We close the gap',
    text: 'We turn a business need into working technology, without asking you to become a technology company first.',
    accent: true,
  },
]

const BELIEFS = [
  ['01', 'Technology without boundaries', 'Useful technology should not depend on company size, city, or a technical background.'],
  ['02', 'Build around the need', 'We learn the requirement first, then design and engineer around it.'],
  ['03', 'AI as a capability', 'AI is not a feature to bolt on. We use it where it creates real value.'],
  ['04', 'Engineering with purpose', 'Architecture, security, performance, and maintainability are part of the first version.'],
  ['05', 'Continuous adaptation', 'What we ship should still make sense when the business and the tools change.'],
]

export default function Manifesto() {
  return (
    <article className="mx-auto max-w-6xl px-6 pt-40 pb-24">
      <p className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] text-ink uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
        Manifesto
      </p>
      <div className="mt-6 grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <h1 className="font-display max-w-xl text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-5xl lg:leading-[1.05]">
          Technology keeps moving. We move with it.
        </h1>
        <p className="max-w-sm text-base leading-7 text-ink-soft">
          You should not need to understand the complexity of technology to benefit from it.
        </p>
      </div>

      <section className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {ERAS.map((era) => (
          <div
            key={era.label}
            className={`flex flex-col rounded-2xl border p-6 ${
              era.accent ? 'border-ink bg-yellow' : 'border-line bg-white'
            }`}
          >
            <p className="text-[11px] font-semibold tracking-[0.16em] text-ink uppercase">{era.label}</p>
            <h2 className="font-display mt-4 text-xl font-semibold tracking-[-0.03em] text-ink">{era.title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/80">{era.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-[28px] border border-line bg-white px-6 py-8 sm:px-10">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-faint uppercase">How the work moves</p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-5">
          {['Business need', 'Intelligence', 'Engineering', 'Technology', 'Impact'].map((step, i) => (
            <li key={step} className="flex flex-col gap-2">
              <span className="font-mono text-xs text-ink-faint">0{i + 1}</span>
              <span className="font-display text-base font-semibold text-ink">{step}</span>
              {i < 4 && <span className="hidden h-px w-full bg-yellow sm:block" />}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink">What we believe</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {BELIEFS.map(([number, title, text]) => (
            <div key={number} className="rounded-2xl border border-line bg-white p-6">
              <span className="font-mono text-xs text-ink-faint">{number}</span>
              <h3 className="font-display mt-3 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          ['Mission', 'Make modern software and AI reachable for businesses that the pace of technology usually leaves behind.'],
          ['Purpose', 'Bring advanced technology to every business, wherever they are.'],
          ['Direction', 'From rural businesses to modern enterprises — technology as an opportunity, not a barrier.'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl bg-ink px-6 py-7 text-white">
            <h2 className="font-display text-lg font-semibold text-yellow">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/75">{text}</p>
          </div>
        ))}
      </section>
    </article>
  )
}
