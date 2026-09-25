import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  GraduationCap,
  Sparkles,
  FileText,
  Rocket,
  Globe2,
  Boxes,
  BrainCircuit,
  Users,
  Clock,
  MessageSquareText,
} from 'lucide-react'

export type NavLink = { label: string; to: string }

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', to: '/services' },
  { label: 'Why us', to: '/' },
  { label: 'Resources', to: '/learning' },
  { label: 'Connect', to: '/contact' },
]

export const WHY_US_MENU: NavLink[] = [
  { label: 'About Us', to: '/about' },
  { label: 'Manifesto', to: '/manifesto' },
  { label: 'Careers', to: '/careers' },
]

export const RESOURCES_MENU: NavLink[] = [
  { label: 'Blog', to: '/blog' },
  { label: 'Wall of Voices', to: '/wall-of-voices' },
]

export type ServicesMenuItem = { label: string; to: string; hot?: boolean; description?: string }
export type ServicesMenuCategory = { label: string; items: ServicesMenuItem[] }

export function slugifyService(label: string): string {
  return label
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const SERVICES_MENU: ServicesMenuCategory[] = [
  {
    label: 'Rural Tech Empowerment',
    items: [
      { label: 'Project Learning', to: '/services' },
      { label: 'Katral', to: '/learning' },
    ],
  },
  {
    label: 'Software Solutions',
    items: [
      { label: 'Product & MVP Development', to: '/services#business' },
      { label: 'Web Application Development', to: '/services#business' },
      { label: 'Mobile Application Development', to: '/services#business' },
      { label: 'SaaS Product Development', to: '/services#business' },
      { label: 'Enterprise Software Solutions', to: '/services#business' },
      { label: 'Legacy System Modernization', to: '/services#business' },
    ],
  },
  {
    label: 'AI & Automation',
    items: [
      { label: 'Generative AI Systems', to: '/services' },
      { label: 'AI Agent & Autonomous Systems', to: '/services' },
      { label: 'AI Automation & Intelligent Workflows', to: '/services' },
      { label: 'RAG & Knowledge Intelligence', to: '/services' },
      { label: 'Multimodal & Conversational AI', to: '/services' },
      { label: 'Computer Vision & Predictive Intelligence', to: '/services' },
      { label: 'Custom AI Solutions', to: '/services' },
    ],
  },
  {
    label: 'Consulting Services',
    items: [
      { label: 'AI Adoption Consulting', to: '/learning' },
      { label: 'Technology Consulting', to: '/learning' },
      { label: 'Software Consulting', to: '/learning' },
    ],
  },
]

export type Service = {
  icon: LucideIcon
  label: string
  title: string
  headline: string
  accentWord: string
  description: string
  points: string[]
  video: string
  image: string
  imageAlt: string
  accentBg: string
  accentIcon: string
  accentSoft: string
  to: string
}

export const SERVICES: Service[] = [
  {
    icon: Globe2,
    label: 'Websites',
    title: 'Websites for Growing Businesses',
    headline: 'Fast sites that look bigger than your budget.',
    accentWord: 'budget',
    description:
      'Fast, conversion-ready websites for small and growing industries — built to look bigger than your budget.',
    points: ['Custom UI/UX design', 'E-commerce & booking', 'SEO + performance tuned', 'Ongoing support'],
    video: '/videos/websites.mp4',
    image: '/images/do-websites.png',
    imageAlt: 'Laptop and phone showing a boutique business website with yellow buttons',
    accentBg: 'border border-line bg-transparent',
    accentIcon: 'text-ink-soft',
    accentSoft: 'bg-ink/5',
    to: '/services#business',
  },
  {
    icon: Boxes,
    label: 'Student Projects',
    title: 'Student Tech Projects',
    headline: 'Projects you can actually stand up and defend.',
    accentWord: 'defend',
    description:
      'Mini, major & final-year projects across web, AI/ML, IoT and app development — built with you, not just for you.',
    points: ['1:1 mentorship', 'Report & documentation', 'Viva / demo prep', 'Source code walkthrough'],
    video: '/videos/student-projects.mp4?v=2',
    image: '/images/do-students.png',
    imageAlt: 'Laptop, project report, and viva slides for a student tech project',
    accentBg: 'border border-line bg-transparent',
    accentIcon: 'text-ink-soft',
    accentSoft: 'bg-ink/5',
    to: '/services#students',
  },
  {
    icon: BrainCircuit,
    label: 'Learning Sessions',
    title: 'Tech Learning Sessions',
    headline: 'Skills that keep you ahead of the tools.',
    accentWord: 'tools',
    description:
      'Live sessions on coding foundations, AI adoption & adaptiveness — for students, teams and institutions.',
    points: ['Coding bootcamps', 'AI invasion workshops', 'Hands-on labs', 'Certificates of completion'],
    video: '/videos/learning.mp4',
    image: '/images/do-learning.png',
    imageAlt: 'Live learning session on a laptop with a yellow completion certificate',
    accentBg: 'border border-line bg-transparent',
    accentIcon: 'text-ink-soft',
    accentSoft: 'bg-ink/5',
    to: '/learning',
  },
  {
    icon: FileText,
    label: 'Career Studio',
    title: 'Resume & Career Studio',
    headline: 'Resumes built for the job you want next.',
    accentWord: 'next',
    description:
      'ATS-optimized resumes and career positioning built around the technology you are adapting to.',
    points: ['ATS-friendly design', 'LinkedIn optimization', 'Mock interviews', '48-hour turnaround'],
    video: '/videos/career.mp4',
    image: '/images/do-career.png',
    imageAlt: 'Resume sheet, ATS score 92, and a LinkedIn-style profile card',
    accentBg: 'border border-line bg-transparent',
    accentIcon: 'text-ink-soft',
    accentSoft: 'bg-ink/5',
    to: '/resume',
  },
]

export type Stat = { label: string; value: string; icon?: LucideIcon }

export const STATS: Stat[] = [
  { value: '100%', label: 'built around you' },
  { value: 'Faster', label: 'with intelligent engineering' },
  { value: 'Scalable', label: 'technology by design' },
  { value: 'Any Business', label: 'any technology need' },
  { value: 'AI + Software', label: 'engineered together' },
]

export type ProcessStep = {
  title: string
  description: string
  icon: LucideIcon
  image: string
  imageAlt: string
}

export const PROCESS: ProcessStep[] = [
  {
    title: 'Discover',
    description: 'We learn your goals, audience and constraints — no templates copy-pasted blindly. A short conversation turns a rough idea into a brief you can actually build from.',
    icon: MessageSquareText,
    image: '/images/how-discover.png?v=5',
    imageAlt: 'Discovery meeting with an intake form, calendar, and project brief',
  },
  {
    title: 'Design',
    description: 'Wireframes and visual direction you approve before a single line of code is written. You see the product, and sign off, before we start building.',
    icon: Sparkles,
    image: '/images/how-design.png?v=4',
    imageAlt: 'Design review with wireframes, color chips, and an approve button',
  },
  {
    title: 'Build',
    description: 'Agile development with weekly check-ins, using modern, maintainable stacks. Small iterations. Visible progress. Built together.',
    icon: Code2,
    image: '/images/how-build.png?v=6',
    imageAlt: 'Developer at a laptop with a phone preview and weekly build status',
  },
  {
    title: 'Launch & Grow',
    description: 'Deployment, training and a support window so your project keeps improving after go-live — not a handoff and disappear.',
    icon: Rocket,
    image: '/images/how-launch.png?v=4',
    imageAlt: 'Launch laptop with a Go live button, rocket badge, and support checks',
  },
]

export type Testimonial = {
  id: number
  name: string
  role: string
  company: string
  quote: string
  rating: number
  avatar: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Ananya R.',
    role: 'Founder',
    company: 'Saffron Threads',
    quote:
      'Zecqora rebuilt our store in three weeks. Orders went up the same month the new site launched.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 2,
    name: 'Mohit Verma',
    role: 'Final-year CSE student',
    company: 'Campus Lab',
    quote:
      'They didn’t just hand me a project — I understood every module well enough to defend it in my viva.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 3,
    name: 'Kavya S.',
    role: 'Ops Lead',
    company: 'Freightline',
    quote:
      'The AI adaptiveness session finally made "using AI at work" concrete for our whole team, not just buzzwords.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 4,
    name: 'Rehan Öztürk',
    role: 'Career switcher',
    company: 'Ex-mechanical engineer',
    quote:
      'New resume, new LinkedIn, and a coding roadmap — I had three interviews lined up within a month.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 5,
    name: 'Priya Nair',
    role: 'Co-founder',
    company: 'Kadai Kart',
    quote:
      'We went from a spreadsheet-run business to a real storefront with inventory and payments in under a month.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 6,
    name: 'Arjun Menon',
    role: 'Third-year ECE student',
    company: 'Campus Lab',
    quote:
      'My final-year project actually worked on demo day — and I could explain every design decision to the panel.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 7,
    name: 'Divya Krishnan',
    role: 'Head of Ops',
    company: 'Northlane Logistics',
    quote:
      'The workflow automation session paid for itself in the first week — we cut a two-hour daily task down to ten minutes.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 8,
    name: 'Sanjay Iyer',
    role: 'Founder',
    company: 'Vetrina Studio',
    quote:
      'Zecqora understood the brand before they understood the tech stack. That order of priorities showed in the final build.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&w=200&h=200&q=80',
  },
]

export type Track = {
  icon: LucideIcon
  title: string
  level: string
  description: string
  topics: string[]
  image: string
  imageAlt: string
}

export const LEARNING_TRACKS: Track[] = [
  {
    icon: Code2,
    title: 'Coding Foundations',
    level: 'Beginner → Intermediate',
    description: 'Programming fundamentals, data structures, and web development from first principles.',
    topics: ['Python & JavaScript', 'DSA problem solving', 'Git & GitHub', 'Full-stack basics'],
    image: '/images/track-coding.png',
    imageAlt: 'Laptop showing a coding lesson with Python, JavaScript, and a yellow Git commit',
  },
  {
    icon: BrainCircuit,
    title: 'AI Invasion & Adaptiveness',
    level: 'All levels',
    description: 'Understand where AI is disrupting work, and build the habits to adapt faster than it moves.',
    topics: ['Prompting & AI tools', 'AI in your workflow', 'Responsible AI use', 'Building with AI APIs'],
    image: '/images/track-ai.png',
    imageAlt: 'Laptop and tablet showing an AI prompt lab with a yellow Run prompt button',
  },
  {
    icon: Globe2,
    title: 'Modern Web & Cloud',
    level: 'Intermediate',
    description: 'Ship real applications with the stacks companies actually use in production.',
    topics: ['React & TypeScript', 'APIs & databases', 'Cloud deployment', 'Performance & security'],
    image: '/images/track-web.png',
    imageAlt: 'Laptop and phone showing a React app with a yellow Deploy button',
  },
  {
    icon: Users,
    title: 'Campus & Team Workshops',
    level: 'Custom',
    description: 'On-site or virtual sessions tailored to your institution or company’s tech maturity.',
    topics: ['Custom curriculum', 'Hands-on labs', 'Assessments', 'Completion certificates'],
    image: '/images/track-workshop.png',
    imageAlt: 'Campus workshop kit with laptops, lab booklet, and a yellow completion certificate',
  },
]

export const FORMATS = [
  { icon: Clock, title: 'Live Cohorts', description: '4–8 week structured batches with weekly live sessions.' },
  { icon: Users, title: '1:1 Mentorship', description: 'Personalized pace, direct feedback, flexible scheduling.' },
  { icon: GraduationCap, title: 'College Workshops', description: 'Full-day or multi-day sessions run on your campus.' },
]

export type { BlogBlock, BlogPost } from './blog-posts'
export { BLOG_POSTS } from './blog-posts'
