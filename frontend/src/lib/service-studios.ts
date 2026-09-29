export type StudioOffer = {
  label: string
  summary: string
  points: string[]
}

export type ServiceStudio = {
  slug: string
  label: string
  kicker: string
  title: string
  lead: string
  offers: StudioOffer[]
}

export const SERVICE_STUDIOS: ServiceStudio[] = [
  {
    slug: 'software-solutions',
    label: 'Software Solutions',
    kicker: 'Solutions',
    title: 'Software shaped around the job you need done.',
    lead: 'Products, web and mobile apps, SaaS, enterprise systems, and older software brought up to date — scoped first, then built so you can run it.',
    offers: [
      {
        label: 'Product & MVP Development',
        summary: 'A first version real users can try, with a clear line around what waits.',
        points: ['48-hour scope', 'One primary user journey', 'Handover you can demo'],
      },
      {
        label: 'Web Application Development',
        summary: 'Secure, fast web apps for the work your team does every day.',
        points: ['Accounts and roles', 'Dashboards that match the workflow', 'Hosting and training'],
      },
      {
        label: 'Mobile Application Development',
        summary: 'Phone-first products when the job actually happens on the move.',
        points: ['iOS and Android paths', 'Offline-aware flows', 'Store-ready builds'],
      },
      {
        label: 'SaaS Product Development',
        summary: 'Multi-customer software with billing, access, and room to grow.',
        points: ['Tenant-ready structure', 'Plans and payments', 'Admin you control'],
      },
      {
        label: 'Enterprise Software Solutions',
        summary: 'Systems that fit how a larger team already works.',
        points: ['Integrations', 'Permissions', 'Support window after launch'],
      },
      {
        label: 'Legacy System Modernization',
        summary: 'Keep what still works. Replace what slows you down.',
        points: ['Audit of the current system', 'Phased rebuild', 'No big-bang cutover'],
      },
    ],
  },
  {
    slug: 'ai-and-automation',
    label: 'AI & Automation',
    kicker: 'AI',
    title: 'AI that fits a workflow, not a demo.',
    lead: 'Generative systems, agents, retrieval, and automation — chosen for the job, with a human check where a wrong answer costs you.',
    offers: [
      {
        label: 'Generative AI Systems',
        summary: 'Drafting, summarising, and content tools grounded in your material.',
        points: ['Your tone and limits', 'Review before send', 'Measurable time saved'],
      },
      {
        label: 'AI Agent & Autonomous Systems',
        summary: 'Agents that take a defined set of steps, then stop for a person.',
        points: ['Narrow tasks', 'Logs you can read', 'A kill switch'],
      },
      {
        label: 'AI Automation & Intelligent Workflows',
        summary: 'Repeat work moved out of inboxes and spreadsheets.',
        points: ['One painful process first', 'Clear owner', 'Fallback when it fails'],
      },
      {
        label: 'RAG & Knowledge Intelligence',
        summary: 'Answers from your docs, policies, and product facts — not the open web.',
        points: ['Source citations', 'Access control', 'Updates without retraining'],
      },
      {
        label: 'Multimodal & Conversational AI',
        summary: 'Chat and mixed inputs for support, intake, and internal help.',
        points: ['Conversation design', 'Handoff to a human', 'Language you actually use'],
      },
      {
        label: 'Computer Vision & Predictive Intelligence',
        summary: 'Seeing and forecasting when the data is already in the business.',
        points: ['A defined decision', 'Honest accuracy', 'A person in the loop'],
      },
      {
        label: 'Custom AI Solutions',
        summary: 'When the shelf product does not match the job.',
        points: ['Diagnosis before build', 'RAG before fine-tuning', 'Eval set from day one'],
      },
    ],
  },
  {
    slug: 'consulting-services',
    label: 'Consulting Services',
    kicker: 'Consulting',
    title: 'A clear next step before you spend on build.',
    lead: 'Advice for teams deciding where AI, software, and technology actually belong — in English or Tamil, with a plan you can act on.',
    offers: [
      {
        label: 'AI Adoption Consulting',
        summary: 'Where AI helps your team this quarter, and where it should stay out.',
        points: ['Workflow audit', 'Risk and review rules', 'A 90-day start'],
      },
      {
        label: 'Technology Consulting',
        summary: 'Stack, hosting, and build-vs-buy choices without the jargon wall.',
        points: ['Current setup review', 'Options with tradeoffs', 'A decision you can explain'],
      },
      {
        label: 'Software Consulting',
        summary: 'Scope, architecture, and delivery shape before a line of code.',
        points: ['Problem and users', 'Version-one boundary', 'Team and timeline'],
      },
    ],
  },
]
