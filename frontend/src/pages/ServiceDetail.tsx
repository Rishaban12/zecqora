import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import CTASection from '../components/CTASection'
import { SERVICE_STUDIOS, type ServiceStudio, type StudioOffer } from '../lib/service-studios'
import { SERVICES_MENU, slugifyService } from '../lib/data'

function offerSlug(label: string) {
  return `/services/${slugifyService(label)}`
}

function StudioHub({ studio }: { studio: ServiceStudio }) {
  const [lead, ...rest] = studio.offers

  return (
    <>
      <section className="px-6 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-ink-faint uppercase">{studio.kicker}</p>
          <h1 className="font-display mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl lg:text-[4.4rem] lg:leading-[0.98]">
            {studio.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">{studio.lead}</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink">
            Talk to the studio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {lead && (
        <section className="border-y border-line bg-white">
          <div className="mx-auto grid max-w-6xl md:grid-cols-2">
            {[lead, rest[0]].filter(Boolean).map((offer, i) => (
              <Link
                key={offer!.label}
                to={offerSlug(offer!.label)}
                className={`group flex flex-col gap-4 px-6 py-12 sm:px-10 ${i === 1 ? 'border-t border-line md:border-t-0 md:border-l' : ''}`}
              >
                <p className="font-mono text-xs tracking-[0.14em] text-ink-faint">0{i + 1}</p>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">{offer!.label}</h2>
                <p className="max-w-md text-base leading-7 text-ink-soft">{offer!.summary}</p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                  Explore
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {rest.slice(1).length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
            The rest of {studio.label.toLowerCase()}.
          </h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {rest.slice(1).map((offer, i) => (
              <Link
                key={offer.label}
                to={offerSlug(offer.label)}
                className="group grid gap-3 py-7 sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:gap-8"
              >
                <span className="font-mono text-xs text-ink-faint">0{i + 3}</span>
                <span>
                  <span className="block font-display text-xl font-semibold tracking-[-0.03em] text-ink">{offer.label}</span>
                  <span className="mt-1 block max-w-xl text-sm leading-6 text-ink-soft">{offer.summary}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <section data-nav-theme="dark" className="bg-ink px-6 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-4">
          {[
            ['01', 'Discover', 'The job, the user, the constraint.'],
            ['02', 'Design', 'Approved before a full build.'],
            ['03', 'Build', 'Check-ins in English or Tamil.'],
            ['04', 'Launch', 'Handover you can actually run.'],
          ].map(([n, title, text]) => (
            <div key={n} className="border-t border-white/15 pt-5">
              <p className="font-display text-4xl font-semibold tracking-[-0.04em] text-yellow">{n}</p>
              <p className="mt-3 font-display text-lg font-semibold">{title}</p>
              <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title={`Start with ${studio.label.toLowerCase()}`}
        description="Tell us the job. We’ll say what belongs in the first version — and what can wait."
        primary={{ label: 'Talk to the studio', to: '/contact' }}
        secondary={{ label: 'All services', to: '/services' }}
      />
    </>
  )
}

function OfferPage({ studio, offer }: { studio: ServiceStudio; offer: StudioOffer }) {
  const index = studio.offers.findIndex((item) => item.label === offer.label)
  const others = studio.offers.filter((item) => item.label !== offer.label)
  const steps = [
    ['Discover', 'We name the user, the job, and what “done” means for this first release.'],
    ['Design', 'You approve the flow before we spend time on the full build.'],
    ['Build', 'Weekly check-ins, in English or Tamil, on the version we agreed.'],
    ['Launch', 'Handover, training, and a support window so it keeps running.'],
  ]

  return (
    <>
      <section className="px-6 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-ink-faint">
            <Link to="/services" className="hover:text-ink">
              Services
            </Link>
            <span className="mx-2">/</span>
            <Link to={`/services/${studio.slug}`} className="hover:text-ink">
              {studio.label}
            </Link>
          </p>
          <p className="mt-8 font-mono text-xs tracking-[0.14em] text-ink-faint">
            {String(Math.max(index, 0) + 1).padStart(2, '0')}
          </p>
          <h1 className="font-display mt-3 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl lg:text-[4.2rem] lg:leading-[0.98]">
            {offer.label}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">{offer.summary}</p>
          <Link to="/contact" className="btn-primary mt-8">
            Talk about this
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-6xl md:grid-cols-3">
          {offer.points.map((point, i) => (
            <div key={point} className={`px-6 py-10 sm:px-8 ${i > 0 ? 'border-t border-line md:border-t-0 md:border-l' : ''}`}>
              <p className="font-display text-4xl font-semibold tracking-[-0.04em] text-ink">0{i + 1}</p>
              <h2 className="font-display mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink">{point}</h2>
            </div>
          ))}
        </div>
      </section>

      <section data-nav-theme="dark" className="bg-ink px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">How this ships.</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, text], i) => (
              <div key={title} className="border-t border-white/15 pt-5">
                <p className="font-mono text-xs text-yellow">0{i + 1}</p>
                <h3 className="font-display mt-3 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink">Also in {studio.label}</h2>
            <Link to={`/services/${studio.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {others.map((item) => (
              <Link
                key={item.label}
                to={offerSlug(item.label)}
                className="group flex items-center justify-between gap-6 py-6"
              >
                <span>
                  <span className="block font-display text-lg font-semibold text-ink">{item.label}</span>
                  <span className="mt-1 block text-sm text-ink-soft">{item.summary}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const studio = SERVICE_STUDIOS.find((item) => item.slug === slug)
  if (studio) return <StudioHub studio={studio} />

  for (const group of SERVICE_STUDIOS) {
    const offer = group.offers.find((item) => slugifyService(item.label) === slug)
    if (offer) return <OfferPage studio={group} offer={offer} />
  }

  for (const category of SERVICES_MENU) {
    const item = category.items.find((candidate) => slugifyService(candidate.label) === slug)
    if (!item) continue
    return (
      <OfferPage
        studio={{
          slug: slugifyService(category.label),
          label: category.label,
          kicker: category.label,
          title: category.label,
          lead: '',
          offers: category.items.map((entry) => ({
            label: entry.label,
            summary: entry.description ?? '',
            points: [],
          })),
        }}
        offer={{
          label: item.label,
          summary: item.description ?? `How ${item.label.toLowerCase()} fits the work we already do.`,
          points: ['A clear first version', 'Work you can explain', 'English or Tamil'],
        }}
      />
    )
  }

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">Service not found</h1>
      <p className="max-w-md text-ink-soft">We couldn't find that service. Take a look at everything we offer.</p>
      <Link to="/services" className="btn-primary">
        Back to Services
      </Link>
    </section>
  )
}
