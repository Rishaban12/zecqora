import { Heart } from 'lucide-react'
import Reveal from '../components/Reveal'
import { TESTIMONIALS } from '../lib/data'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
}

export default function WallOfVoices() {
  return (
    <section className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] text-ink uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
            Wall of Voices
          </p>
          <h1 className="font-display mt-5 inline-flex items-start gap-3 text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-5xl">
            Hear what our clients have to say.
            <Heart className="mt-2 h-7 w-7 shrink-0 -rotate-6 text-yellow" strokeWidth={1.5} fill="currentColor" />
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink-soft">
            Notes from businesses, students, and teams we have built with — written as relationships, not headshots.
          </p>
        </Reveal>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.04} className="mb-5 break-inside-avoid">
              <article className={`flex flex-col gap-5 rounded-2xl border border-line p-6 ${i % 3 === 0 ? 'bg-[#dce0cf]' : 'bg-white'}`}>
                <p className="font-display text-lg leading-7 tracking-[-0.02em] text-ink">{t.quote}</p>
                <div className="mt-auto flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-mono text-[11px] text-yellow">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-faint">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
