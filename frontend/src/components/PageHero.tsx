import type { ReactNode } from 'react'

export default function PageHero({
  eyebrow,
  children,
  description,
  titleSize = 'text-4xl sm:text-5xl lg:text-[3.6rem]',
  actions,
  decoration,
  navTheme,
}: {
  eyebrow: string
  children: ReactNode
  description: ReactNode
  titleSize?: string
  actions?: ReactNode
  decoration?: ReactNode
  navTheme?: 'dark'
}) {
  const dark = navTheme === 'dark'

  return (
    <section
      data-nav-theme={navTheme}
      className={`relative overflow-hidden px-6 pt-28 pb-16 ${
        dark ? 'flex min-h-[72vh] items-end bg-ink pb-20' : ''
      }`}
    >
      {decoration}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p
            className={`flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] uppercase ${
              dark ? 'text-yellow' : 'text-ink'
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
            {eyebrow}
          </p>
          <h1
            className={`font-display mt-5 font-semibold tracking-[-0.045em] leading-[1.08] ${titleSize} ${
              dark ? 'text-white' : 'text-ink'
            }`}
          >
            {children}
          </h1>
          <p
            className={`mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 ${
              dark ? 'text-white/75' : 'text-ink-soft'
            }`}
          >
            {description}
          </p>
          {actions && <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div>}
        </div>
      </div>
    </section>
  )
}
