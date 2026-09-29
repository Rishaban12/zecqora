import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-start justify-center px-6">
      <p className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] text-ink uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
        404
      </p>
      <h1 className="font-display mt-5 text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-5xl">
        This page didn't ship yet.
      </h1>
      <p className="mt-4 text-base leading-7 text-ink-soft">
        The page you're looking for doesn't exist. Head back home, or tell us what you were trying to find.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <Link to="/contact" className="btn-secondary">
          Contact
        </Link>
      </div>
    </section>
  )
}
