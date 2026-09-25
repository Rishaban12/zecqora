import { Clock } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { BLOG_POSTS, type BlogBlock } from '../lib/data'

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'lead':
      return (
        <p className="rounded-2xl border border-line bg-white px-5 py-4 text-base leading-8 font-medium text-ink">
          {block.text}
        </p>
      )
    case 'p':
      return <p className="text-base leading-8 text-ink-soft">{block.text}</p>
    case 'h2':
      return (
        <h2 className="font-display mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-[1.7rem]">
          {block.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 className="font-display mt-2 text-lg font-semibold tracking-[-0.02em] text-ink">
          {block.text}
        </h3>
      )
    case 'ul':
      return (
        <ul className="flex list-disc flex-col gap-2 pl-5 text-base leading-7 text-ink-soft">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'takeaways':
      return (
        <aside className="rounded-2xl border border-ink/10 bg-ink/[0.03] px-5 py-5">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-ink uppercase">Key takeaways</p>
          <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-base leading-7 text-ink-soft">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      )
    case 'faq':
      return (
        <div className="mt-2 flex flex-col gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-3">
            {block.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-line bg-white px-5 py-4 open:shadow-[0_12px_30px_-24px_rgba(16,42,36,0.35)]"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 text-base leading-7 text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      )
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = BLOG_POSTS.find((candidate) => candidate.slug === slug)
  const related = BLOG_POSTS.filter((candidate) => candidate.slug !== slug).slice(0, 3)

  useEffect(() => {
    if (!post) return
    const previous = document.title
    document.title = `${post.title} | Zecqora`
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', post.metaDescription)

    const faqBlock = post.content.find((block) => block.type === 'faq')
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.blogJsonLd = 'true'
    const articleLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.metaDescription,
      image: post.image,
      datePublished: post.date,
      author: { '@type': 'Organization', name: post.author },
      publisher: { '@type': 'Organization', name: 'Zecqora' },
    }
    const graph =
      faqBlock && faqBlock.type === 'faq'
        ? {
            '@context': 'https://schema.org',
            '@graph': [
              articleLd,
              {
                '@type': 'FAQPage',
                mainEntity: faqBlock.items.map((item) => ({
                  '@type': 'Question',
                  name: item.q,
                  acceptedAnswer: { '@type': 'Answer', text: item.a },
                })),
              },
            ],
          }
        : articleLd
    script.textContent = JSON.stringify(graph)
    document.querySelectorAll('script[data-blog-json-ld="true"]').forEach((node) => node.remove())
    document.head.appendChild(script)

    return () => {
      document.title = previous
      script.remove()
    }
  }, [post])

  if (!post) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="hero-title text-4xl text-ink sm:text-5xl">Post not found</h1>
        <p className="max-w-md text-ink-soft">
          We couldn't find that article. It may have moved — take a look at everything we've written.
        </p>
        <Link to="/blog" className="btn-primary">
          Back to Blog
        </Link>
      </section>
    )
  }

  return (
    <>
      <section className="relative overflow-hidden bg-yellow px-6 pt-28 pb-20">
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <div>
            <p className="text-sm font-medium text-ink/70">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </p>
            <p className="mt-5 text-[11px] font-semibold tracking-[0.14em] text-ink/70 uppercase">
              {post.category}
            </p>
            <h1 className="font-display mt-3 max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-ink sm:text-5xl lg:text-[3.4rem]">
              {post.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-ink/80">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink/75">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[11px] font-semibold text-yellow">
                {post.author
                  .split(' ')
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join('')}
              </span>
              <span>{post.author}</span>
              <span aria-hidden="true">·</span>
              <span>{post.date}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_-32px_rgba(16,42,36,0.35)]">
            <img src={post.image} alt={post.imageAlt} className="block h-auto w-full object-contain" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-bg [clip-path:ellipse(80%_100%_at_50%_100%)]" />
      </section>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <Reveal className="flex flex-col gap-6">
          {post.content.map((block, i) => (
            <Block key={`${block.type}-${i}`} block={block} />
          ))}
        </Reveal>
        <Link
          to="/blog"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
        >
          ← Back to Blog
        </Link>
      </article>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink">More from the studio</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/blog/${item.slug}`}
                className="group overflow-hidden rounded-2xl border border-line bg-white"
              >
                <div className="aspect-[16/10] bg-[#f6f3ea]">
                  <img src={item.image} alt={item.imageAlt} className="h-full w-full object-contain" />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-medium tracking-[0.14em] text-ink-faint uppercase">{item.category}</p>
                  <h3 className="font-display mt-2 text-lg font-semibold tracking-[-0.03em] text-ink group-hover:underline">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
