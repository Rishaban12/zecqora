export type BlogBlock =
  | { type: 'lead'; text: string }
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'takeaways'; items: string[] }
  | { type: 'faq'; items: { q: string; a: string }[] }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  metaDescription: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  imageAlt: string
  content: BlogBlock[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'ai-invasion-isnt-hype',
    title: "Why 'AI Invasion' isn't hype — it's a deadline",
    excerpt:
      'AI adaptation is no longer optional. Learn why teams that wait fall behind, what skills still matter, and how to start adapting without chasing every new tool.',
    metaDescription:
      'AI Invasion is a real workplace deadline, not hype. Zecqora explains why teams must adapt now, which AI skills last, and how to start with practical workflows.',
    category: 'AI & Automation',
    author: 'Zecqora Team',
    date: 'Aug 12, 2026',
    readTime: '9 min read',
    image: '/images/blog-ai-invasion.png?v=2',
    imageAlt: 'Person pointing at an AI workflow of prompt, tool, and result',
    content: [
      {
        type: 'lead',
        text: 'AI Invasion is not marketing noise — it is a workplace deadline. Teams that learn to adapt AI into real workflows now set the pace; teams that wait pay more later in lost speed, missed opportunities, and harder catch-up.',
      },
      {
        type: 'p',
        text: 'When Zecqora started running AI Invasion & Adaptiveness workshops for colleges, founders, and small teams across India, we expected skepticism. What we heard instead was relief. People already felt the shift in hiring, student projects, customer support, and day-to-day office work — they just lacked a clear way to talk about it and act on it.',
      },
      {
        type: 'p',
        text: 'The tools change every quarter. Chat interfaces, copilots, agents, and automation platforms arrive faster than most curricula can update. But the durable skill underneath is older and more important: knowing where automation genuinely helps, where it quietly breaks trust or quality, and how to redesign a workflow so humans stay accountable. That skill does not expire when a model version ships.',
      },
      {
        type: 'h2',
        text: 'What “AI Invasion” actually means at work',
      },
      {
        type: 'p',
        text: 'AI Invasion is not “everyone must become a machine-learning engineer.” It means AI is entering the default stack of knowledge work the way spreadsheets and search once did. Customer emails get drafted faster. Research summaries appear in minutes. Code suggestions fill the IDE. Student project reports sound polished overnight. The invasion is uneven, but it is already here.',
      },
      {
        type: 'p',
        text: 'In practice, we see three layers. First, personal productivity: using assistants for drafts, outlines, and debugging. Second, team workflows: checklists, ticket triage, and documentation that used to wait for one busy person. Third, product features: chat, search over your own documents, and decision support inside software. Most organizations need all three eventually, but almost none should start by building a custom model.',
      },
      {
        type: 'h2',
        text: 'Why waiting gets more expensive',
      },
      {
        type: 'p',
        text: 'Waiting feels safe because the tools still feel unfinished. The cost is quieter. Competitors ship demos faster. Interns arrive already fluent with copilots. Clients expect shorter turnaround. Campus projects that ignore AI look outdated next to peers who integrated it carefully. Delay does not protect quality — it only delays learning while the bar moves.',
      },
      {
        type: 'p',
        text: 'Early adopters also make better mistakes. They learn which prompts fail, which data should never leave the company, and which reviews still need a human. Late adopters inherit the same learning curve with less time and more pressure. That is why we call it a deadline, not a trend cycle.',
      },
      {
        type: 'h2',
        text: 'Skills that still matter when tools change',
      },
      {
        type: 'ul',
        items: [
          'Problem framing — stating the job, constraints, and success metric before opening a tool',
          'Workflow design — deciding what AI drafts, what humans approve, and what stays manual',
          'Verification — checking facts, code, citations, and customer-facing claims',
          'Data judgment — knowing what can be pasted into a model and what must stay private',
          'Communication — explaining AI-assisted work clearly to teammates, clients, or viva panels',
        ],
      },
      {
        type: 'p',
        text: 'These skills travel across tools. Whether you use a general chat model, a coding copilot, or a retrieval system over company docs, the same questions apply: What is the task? What is the source of truth? Who signs off? What happens when the answer is wrong?',
      },
      {
        type: 'h2',
        text: 'A practical way to start this month',
      },
      {
        type: 'h3',
        text: '1. Pick one painful workflow',
      },
      {
        type: 'p',
        text: 'Do not start with a company-wide AI policy and fifty pilots. Choose one recurring task that already wastes hours — weekly status notes, first-draft support replies, research summaries for student projects, or boilerplate UI code. Write the current steps by hand. Then mark which step can be assisted without risking customer trust or exam integrity.',
      },
      {
        type: 'h3',
        text: '2. Define the human checkpoint',
      },
      {
        type: 'p',
        text: 'Every assisted workflow needs an owner. Someone reviews before send, before commit, before publish. If nobody owns verification, AI does not save time — it only moves errors downstream. In our workshops, teams that name a reviewer early ship cleaner results than teams that chase clever prompts alone.',
      },
      {
        type: 'h3',
        text: '3. Measure something small',
      },
      {
        type: 'p',
        text: 'Track minutes saved, revision rounds reduced, or response time improved. Avoid vanity metrics like “prompts written.” If the number does not move after two weeks, change the workflow — not the model brand.',
      },
      {
        type: 'h2',
        text: 'For students, founders, and campus teams',
      },
      {
        type: 'p',
        text: 'Students should treat AI as a tutor and accelerator, not a substitute for understanding. If you cannot explain your project without the chat window open, you are not interview-ready. Founders should treat AI as leverage on research, prototypes, and customer messaging — while keeping product truth and pricing decisions human. Campus and company workshops work best when they mix demos with ethics, verification, and hands-on labs in English or Tamil so everyone can participate.',
      },
      {
        type: 'p',
        text: 'Zecqora builds software and runs learning sessions for exactly this mix: business websites, student projects, resume studio work, and AI adaptiveness training. The common thread is clarity — what you are building, who it is for, and how AI fits without replacing judgment.',
      },
      {
        type: 'p',
        text: 'If you are ready to start, pick the workflow that hurts most this week and give it a named owner. Adaptation beats tool collecting.',
      },
      {
        type: 'takeaways',
        items: [
          'AI Invasion is a workplace deadline: adapt workflows now or pay more to catch up later.',
          'Durable skills are framing, verification, privacy judgment, and workflow design — not memorizing one chat tool.',
          'Start with one painful process, one human reviewer, and one measurable outcome.',
          'Students and teams should use AI to accelerate learning and delivery, not to hide weak understanding.',
        ],
      },
      {
        type: 'faq',
        items: [
          {
            q: 'Is AI Invasion just marketing hype?',
            a: 'No. It describes a real shift in how work gets drafted, researched, coded, and supported. The hype is the endless tool churn; the deadline is learning to adapt workflows responsibly.',
          },
          {
            q: 'Do I need to learn machine learning to stay relevant?',
            a: 'Usually not. Most teams benefit first from practical AI literacy: prompting with constraints, verifying outputs, protecting data, and redesigning everyday tasks.',
          },
          {
            q: 'How can students use AI without cheating?',
            a: 'Use it to explore, debug, and explain — then rebuild understanding in your own words and code. If you cannot present the work alone, the tool has replaced learning instead of supporting it.',
          },
          {
            q: 'What should a small business do first with AI?',
            a: 'Automate one repetitive communication or research task with a clear human review step. Avoid buying a large custom AI project before you know which workflow actually needs it.',
          },
        ],
      },
    ],
  },
  {
    slug: 'mvp-scoping-in-48-hours',
    title: 'From idea to MVP: how we scope a software project in 48 hours',
    excerpt:
      'Most early software delays start with unclear scope. Here is Zecqora’s 48-hour process to turn an idea into a shared MVP plan before any code ships.',
    metaDescription:
      'Learn how Zecqora scopes an MVP in 48 hours: discovery, build sequence, out-of-scope decisions, and a shared definition of done before coding starts.',
    category: 'Software Engineering',
    author: 'Zecqora Team',
    date: 'Jul 28, 2026',
    readTime: '10 min read',
    image: '/images/blog-mvp-scope.png',
    imageAlt: 'Two people scoping an idea, scope, and MVP on a whiteboard',
    content: [
      {
        type: 'lead',
        text: 'An MVP should be the smallest useful version of your product that real users can try — not a vague wishlist. In 48 hours, Zecqora turns a rough idea into a scoped build plan: goals, users, core features, explicit exclusions, and a clear definition of done.',
      },
      {
        type: 'p',
        text: 'A vague brief is the strongest predictor of late delivery we see. Founders and student teams often arrive with excitement and screenshots, but without agreement on who the first user is, what success looks like, or what can wait. Code then becomes a negotiation tool. That is expensive.',
      },
      {
        type: 'p',
        text: 'Our answer is not a hundred-page specification nobody reads. It is a focused 48-hour scoping sprint that produces a shared understanding: what ships first, why it ships first, and what is deliberately left out of version one. After that, engineering can move without constant reinterpretation.',
      },
      {
        type: 'h2',
        text: 'What an MVP is — and what it is not',
      },
      {
        type: 'p',
        text: 'An MVP is a testable product slice that delivers one valuable outcome for one clear audience. It is not a half-finished full product. It is not “everything except polish.” And it is not a prototype slide deck unless the goal is only to communicate vision. If users cannot complete a real job with it, you do not have an MVP yet — you have a concept.',
      },
      {
        type: 'p',
        text: 'Good MVP scope answers four questions. Who is the first user? What painful job are they hiring the product for? What must work for them to trust the result? What can wait until after we learn from that first release?',
      },
      {
        type: 'h2',
        text: 'Day one: discovery without the fluff',
      },
      {
        type: 'h3',
        text: 'Goals and constraints',
      },
      {
        type: 'p',
        text: 'We start with outcomes, not features. Launch a booking flow for local clinics. Let final-year students demo a working project to a panel. Help a shop collect leads on mobile. Then we list constraints: budget, timeline, platforms, languages, compliance, and who will maintain the product after launch. Constraints are not blockers — they are design inputs.',
      },
      {
        type: 'h3',
        text: 'Users and the one launch metric',
      },
      {
        type: 'p',
        text: 'If everything is important, nothing is. We pick one primary user and one launch metric: completed sign-ups, booked appointments, submitted project demos, or paid orders. Secondary metrics can wait. This prevents the classic trap of shipping five incomplete journeys instead of one complete one.',
      },
      {
        type: 'h3',
        text: 'Current workaround',
      },
      {
        type: 'p',
        text: 'Every idea already has a workaround — WhatsApp messages, spreadsheets, paper forms, or a friend’s template site. Mapping that workaround shows what users tolerate today and what will feel like a real upgrade. If your MVP is harder than WhatsApp, people will not switch.',
      },
      {
        type: 'h2',
        text: 'Day two: the build sequence',
      },
      {
        type: 'p',
        text: 'Day two turns discovery into a sequenced plan. We sort every requested feature into three buckets: core for v1, fast follow after first feedback, and explicitly out of scope. Out of scope is a gift. It protects the team from polite feature creep dressed as “just one more thing.”',
      },
      {
        type: 'ul',
        items: [
          'Core — required for the first user to complete the primary job',
          'Fast follow — valuable soon, but not required to learn from launch',
          'Out of scope — deferred with a written reason, not a quiet maybe',
        ],
      },
      {
        type: 'p',
        text: 'Then we write acceptance checks in plain language. “Admin can add a service and publish it.” “Student can log in, upload the report, and play the demo video.” “Visitor can submit a lead form and receive a confirmation.” These checks become the shared definition of done for the first release.',
      },
      {
        type: 'h2',
        text: 'What you leave the 48 hours with',
      },
      {
        type: 'ul',
        items: [
          'A one-page product brief: audience, problem, outcome, metric',
          'A v1 feature list with exclusions written down',
          'A rough information architecture and key screens',
          'Technical recommendations: stack, hosting, auth, and content ownership',
          'A timeline with decision owners so blockers have names',
        ],
      },
      {
        type: 'p',
        text: 'Notice what is missing: endless wireframe debates and premature micro-animations. Visual craft matters, and we care about it deeply in later design and build phases. During scoping, clarity beats decoration. A beautiful screen that serves the wrong user still fails.',
      },
      {
        type: 'h2',
        text: 'Common scoping mistakes we prevent',
      },
      {
        type: 'p',
        text: 'Building for “everyone” first. Adding admin dashboards before the customer journey works. Copying a competitor’s entire feature list. Treating student academic requirements as optional polish. Ignoring content ownership — who writes real text, photos, and pricing after launch. Each of these mistakes expands calendar time without expanding learning.',
      },
      {
        type: 'p',
        text: 'Another frequent miss: assuming the first release must be native apps on every store. For many local businesses and campus projects, a fast, reliable web experience is the right MVP. Native can follow once usage proves the need.',
      },
      {
        type: 'h2',
        text: 'How this connects to build and launch',
      },
      {
        type: 'p',
        text: 'At Zecqora, scoping feeds the same process we use across websites, student projects, and product builds: Discover, Design, Build, Launch. Discovery without a scoped MVP becomes endless talking. Design without scope becomes opinion wars. Build without scope becomes rework. Launch without scope becomes a soft apology for missing pieces.',
      },
      {
        type: 'p',
        text: 'If you already have an idea, existing website, or college brief, bring it as-is. The 48-hour sprint is designed for imperfect inputs. What we need is decision-makers in the room and honesty about constraints. Conversations can happen in English or Tamil; the output is a plan your whole team can point to.',
      },
      {
        type: 'takeaways',
        items: [
          'Scope agreement before code prevents the most common early-stage delays.',
          'An MVP is one complete user job for one audience — not a smaller unfinished product.',
          'Day one clarifies goals, users, constraints, and one launch metric.',
          'Day two sequences core, fast-follow, and out-of-scope work with plain-language acceptance checks.',
        ],
      },
      {
        type: 'faq',
        items: [
          {
            q: 'How long does it take to scope an MVP?',
            a: 'Zecqora uses a focused 48-hour sprint for most early ideas. Complex regulated products may need longer discovery, but the same principles apply: audience, outcome, exclusions, and definition of done.',
          },
          {
            q: 'What should be included in an MVP?',
            a: 'Only the features required for the first user to complete the primary job and trust the result. Everything else becomes fast follow or out of scope.',
          },
          {
            q: 'Do I need a full specification document before development?',
            a: 'No. You need a shared plan people will actually use: brief, feature buckets, acceptance checks, and owners. Giant unread documents do not reduce risk.',
          },
          {
            q: 'Can student project teams use this process?',
            a: 'Yes. Academic deadlines make unclear scope especially costly. A short scoping pass helps teams demo a complete story instead of many unfinished modules.',
          },
        ],
      },
    ],
  },
  {
    slug: 'resume-mistake-costing-interviews',
    title: 'The resume mistake that costs students interviews',
    excerpt:
      'The costly resume mistake is listing tasks instead of outcomes. Learn how students can rewrite bullets, pass ATS screens, and earn more interview calls.',
    metaDescription:
      'Stop listing tasks on your resume. Zecqora shows students how outcome-focused bullets, ATS-friendly structure, and proof of impact win more interviews.',
    category: 'Career',
    author: 'Zecqora Team',
    date: 'Jul 14, 2026',
    readTime: '9 min read',
    image: '/images/blog-resume.png',
    imageAlt: 'Student reviewing a resume with an ATS score of 92',
    content: [
      {
        type: 'lead',
        text: 'The resume mistake that costs students interviews is not a typo or a fancy template. It is writing bullets that only list tasks — “built a web app,” “worked in a team” — instead of outcomes that show what changed because of your work.',
      },
      {
        type: 'p',
        text: 'Recruiters and hiring managers skim. An applicant tracking system (ATS) keyword-matches. Neither has time to imagine your impact for you. When every bullet describes activity without result, your experience becomes interchangeable with dozens of similar campus profiles. Outcome language makes you specific.',
      },
      {
        type: 'p',
        text: 'At Zecqora’s Resume Studio, we see the same pattern across engineering, design, and business students: strong effort, weak proof. The fix is usually not a total rewrite. It is a disciplined pass over each bullet with one question — so what happened because of this?',
      },
      {
        type: 'h2',
        text: 'Task bullets vs outcome bullets',
      },
      {
        type: 'p',
        text: 'A task bullet narrates duties. An outcome bullet shows effect. Compare “Built a React website for a college club” with “Shipped a React club site used by 180 members, cutting event signup time from two days to same-day confirmation.” The second sentence still names the skill stack, but it also gives a reader a reason to care.',
      },
      {
        type: 'p',
        text: 'You do not need vanity metrics invented under pressure. Honest outcomes count: reduced manual steps, improved load time, completed demo before deadline, positive mentor feedback, number of users in a pilot, bugs closed, documentation that helped teammates continue without you. If the only true outcome is “I learned X,” say what you can now do that you could not do before — then prove it in projects.',
      },
      {
        type: 'h2',
        text: 'Why ATS and humans both punish vague resumes',
      },
      {
        type: 'p',
        text: 'ATS tools look for role-relevant skills and clear section structure. Humans look for evidence. Vague resumes fail both. Keyword stuffing without context looks robotic. Beautiful one-page designs that hide headings or put text in images can fail parsing. The winning approach is plain structure, real keywords used naturally, and bullets that pair skill with result.',
      },
      {
        type: 'ul',
        items: [
          'Use standard headings: Education, Experience, Projects, Skills',
          'Name technologies inside outcome bullets, not only in a skill cloud',
          'Keep one clean column layout for student resumes unless a role expects a portfolio-first format',
          'Export a text-selectable PDF; avoid text locked inside screenshots',
        ],
      },
      {
        type: 'h2',
        text: 'A simple rewrite formula students can use tonight',
      },
      {
        type: 'p',
        text: 'Try this pattern: Action verb + what you built or did + tool or method + measurable or observable result. Example: “Designed and implemented a REST API in Node.js that synced 1,200 inventory records nightly, replacing a manual spreadsheet upload.” If you lack a number, use a concrete before/after: “Replaced handwritten lab notes with a shared Notion template adopted by the whole project team.”',
      },
      {
        type: 'h3',
        text: 'Projects deserve the same treatment',
      },
      {
        type: 'p',
        text: 'Campus projects are experience. Treat them like jobs. State the problem, your role, the stack, and the outcome. “Team project using Python” is not enough. “Led backend for a Python attendance tool used in two lab sections; reduced roll-call time by half” tells a story a interviewer can probe.',
      },
      {
        type: 'h3',
        text: 'Align to the job description without copying it',
      },
      {
        type: 'p',
        text: 'Read the posting once for must-have skills. Mirror the language only where it is true. If they ask for React and you built React, say React. If they ask for Kubernetes and you only completed a tutorial, do not invent production ownership. Credibility survives interviews; exaggeration does not.',
      },
      {
        type: 'h2',
        text: 'What still matters beyond the PDF',
      },
      {
        type: 'p',
        text: 'A stronger resume earns the call. The call still tests understanding. Be ready to walk through any bullet without reading it. Keep a GitHub, live demo, or short case write-up for major projects. For many Indian campus hiring loops, communication in English matters — and being able to explain your work clearly in Tamil or English depending on the panel is an advantage, not a weakness.',
      },
      {
        type: 'p',
        text: 'Resume Studio work at Zecqora often pairs rewrite coaching with portfolio cleanup and mock explanations. The goal is not a magical template. It is a document that survives skim reading and a candidate who can defend every line.',
      },
      {
        type: 'h2',
        text: 'Where students usually lose the interview before it starts',
      },
      {
        type: 'p',
        text: 'Mass applications with the same generic file. Missing links to demos. Skills lists that claim every framework after a weekend tutorial. Dates that conflict with education history. These details matter because hiring teams use them as trust signals. A clean, truthful, outcome-focused resume does not guarantee an offer — but it removes the easy reasons to skip you.',
      },
      {
        type: 'p',
        text: 'If you are applying across India for internships or fresher roles, localize lightly: mention relevant coursework, hackathons, and college society work with outcomes. Keep English clear and direct. Avoid filler phrases like “dynamic team player” unless a concrete story sits next to them.',
      },
      {
        type: 'p',
        text: 'Then stop polishing endlessly. Send the stronger version, track replies, and improve from real feedback instead of guessing alone. A good resume is a living draft that gets better with each interview cycle.',
      },
      {
        type: 'h2',
        text: 'A 60-minute improvement checklist',
      },
      {
        type: 'ul',
        items: [
          'Highlight every bullet that only describes a task; rewrite for outcome',
          'Move the strongest project above weaker part-time listings if you are a student',
          'Add tools inside bullets where they support the story',
          'Remove clip art, tables that break ATS parsing, and unexplained abbreviations',
          'Ask a peer to skim for 20 seconds and tell you what they remember',
        ],
      },
      {
        type: 'takeaways',
        items: [
          'Task-only bullets force recruiters to invent your impact — most will not.',
          'Outcome bullets pair action, method, and result in one skimmable line.',
          'ATS-friendly structure plus honest keywords beats decorative templates.',
          'Every resume claim should be explainable in an interview without notes.',
        ],
      },
      {
        type: 'faq',
        items: [
          {
            q: 'What is the most common student resume mistake?',
            a: 'Listing responsibilities or tools without saying what improved, shipped, or changed because of the work.',
          },
          {
            q: 'Do I need numbers on every bullet?',
            a: 'No. Numbers help when they are real. Concrete before/after outcomes also work when exact metrics are unavailable.',
          },
          {
            q: 'How do I make a resume ATS-friendly?',
            a: 'Use standard headings, a simple layout, text-selectable PDF output, and natural skill keywords inside relevant experience and project bullets.',
          },
          {
            q: 'Should students include college projects on a resume?',
            a: 'Yes — when written like real work: problem, role, stack, and outcome. Strong projects often matter more than thin internship titles.',
          },
        ],
      },
    ],
  },
  {
    slug: 'rag-vs-fine-tuning',
    title: 'RAG vs fine-tuning: picking the right tool for your AI feature',
    excerpt:
      'RAG and fine-tuning solve different AI problems. Learn when to retrieve facts, when to train style or skill, and how to choose before you spend the budget.',
    metaDescription:
      'RAG vs fine-tuning explained: use RAG when your model needs fresh company facts; fine-tune for style or skill. Zecqora’s guide helps teams choose correctly.',
    category: 'AI & Automation',
    author: 'Zecqora Team',
    date: 'Jun 30, 2026',
    readTime: '10 min read',
    image: '/images/blog-rag.png',
    imageAlt: 'Side-by-side cards comparing retrieval and model training',
    content: [
      {
        type: 'lead',
        text: 'Use RAG when your AI feature needs up-to-date or private facts the base model does not know. Use fine-tuning when the model already has the knowledge but must reliably follow your style, format, or specialized behavior. Choosing wrong wastes budget and time.',
      },
      {
        type: 'p',
        text: 'Many first AI features underperform because teams reach for fine-tuning when they actually needed retrieval — or the reverse. Fine-tuning teaches a model a new skill or style. Retrieval-augmented generation (RAG) gives a model access to facts it did not already know. They can work together later, but they are not interchangeable starting points.',
      },
      {
        type: 'p',
        text: 'At Zecqora, most client AI features that look like “we should train a custom model” turn out to be retrieval problems wearing a fine-tuning costume. Getting the diagnosis right up front usually beats weeks of prompt tweaking after a wrong architecture ships.',
      },
      {
        type: 'h2',
        text: 'What RAG does',
      },
      {
        type: 'p',
        text: 'RAG connects a language model to an external knowledge source at answer time. Typical flow: user asks a question, the system searches approved documents or data, relevant chunks are inserted into the prompt, and the model answers using that context. When your policies, product catalog, or campus handbook change, you update the knowledge base — you do not retrain the whole model.',
      },
      {
        type: 'p',
        text: 'RAG shines for customer support over your docs, internal Q&A on SOPs, search across project notes, and any feature where citations or source links matter. It is also easier to audit: you can inspect which passages were retrieved when an answer goes wrong.',
      },
      {
        type: 'h2',
        text: 'What fine-tuning does',
      },
      {
        type: 'p',
        text: 'Fine-tuning updates model weights using example inputs and outputs. It is useful when you need consistent tone, a strict output schema, domain phrasing, or a specialized skill that prompting alone cannot stabilize. It is weaker as a knowledge dump for facts that change weekly. Baking yesterday’s price list into weights is a maintenance trap.',
      },
      {
        type: 'p',
        text: 'Fine-tuning also needs careful data. Tiny, noisy, or biased example sets create confident wrong behavior. Evaluation matters more here because mistakes are harder to trace than a bad retrieved paragraph.',
      },
      {
        type: 'h2',
        text: 'A simple decision guide',
      },
      {
        type: 'ul',
        items: [
          '“The model does not know our product, docs, or last week’s data” → start with RAG',
          '“The model knows the domain but will not reliably sound like us or follow our format” → consider fine-tuning',
          '“We need both fresh facts and a strict house style” → RAG first, then light fine-tuning or strong system prompts',
          '“We have no evaluation set and no owners for data quality” → do not fine-tune yet',
        ],
      },
      {
        type: 'h2',
        text: 'Cost, speed, and maintenance realities',
      },
      {
        type: 'p',
        text: 'RAG projects invest in document cleanup, chunking, embeddings, retrieval quality, and answer evaluation. Fine-tuning projects invest in dataset creation, training runs, regression tests, and redeploys when behavior drifts. For many small businesses and campus products in India, RAG plus good prompting is the faster path to a useful v1. Fine-tuning becomes worth it once volume and format needs are proven.',
      },
      {
        type: 'p',
        text: 'Security is part of architecture too. RAG systems must respect access control so one user cannot retrieve another user’s files. Fine-tuned models must not be trained on secrets that then leak through answers. Either path needs a human review plan for high-stakes outputs.',
      },
      {
        type: 'h2',
        text: 'How we usually ship a first AI feature',
      },
      {
        type: 'p',
        text: 'We start with the user job and failure cost. If a wrong answer only wastes a minute, a lighter stack is fine. If a wrong answer misleads a customer or a viva panel, we add retrieval transparency, logging, and mandatory human review. Then we prototype with prompting and RAG against a small trusted corpus. Only after the product behavior is clear do we discuss fine-tuning.',
      },
      {
        type: 'p',
        text: 'This matches how we scope other software work: prove the workflow, then invest in deeper optimization. An AI feature is still a product feature. It needs owners, metrics, and a definition of done — not just a model name on a slide.',
      },
      {
        type: 'h2',
        text: 'Evaluation before expansion',
      },
      {
        type: 'p',
        text: 'Before spending on fine-tuning or a larger retrieval pipeline, write twenty real questions your users will ask. Mark the correct source or expected behavior for each. Run your prototype against that set weekly. If answers drift after a document upload or a prompt change, you will see it. Teams that skip evaluation argue about model brands instead of product quality.',
      },
      {
        type: 'p',
        text: 'For campus and SMB projects, a small golden set beats a fancy dashboard. Keep it in a spreadsheet if you must. What matters is ownership: someone updates the set when the product changes, and nobody ships a “smarter” model that fails yesterday’s checks.',
      },
      {
        type: 'p',
        text: 'When the checks pass consistently, then discuss scale: better chunking, rerankers, or fine-tuning. Architecture follows evidence.',
      },
      {
        type: 'h2',
        text: 'Examples in plain language',
      },
      {
        type: 'p',
        text: 'A clinic chatbot that must answer from the clinic’s own services and timings is a RAG problem. A writing assistant that must always draft in your brand voice with a fixed JSON structure may need fine-tuning or strong constrained decoding after prompting plateaus. A student study helper over lecture PDFs is RAG. A code formatter that must match your team’s idioms might eventually use fine-tuning — after lint rules and reviews are already in place.',
      },
      {
        type: 'takeaways',
        items: [
          'RAG supplies facts at answer time; fine-tuning changes model behavior and style.',
          'Unknown or changing knowledge is usually a retrieval problem, not a training problem.',
          'Start with RAG and evaluation for most business and campus AI features.',
          'Fine-tune only with clean examples, clear behavior goals, and regression tests.',
        ],
      },
      {
        type: 'faq',
        items: [
          {
            q: 'What is the difference between RAG and fine-tuning?',
            a: 'RAG retrieves relevant documents and feeds them to the model for each answer. Fine-tuning updates the model itself using training examples so it behaves differently by default.',
          },
          {
            q: 'When should I use RAG?',
            a: 'Use RAG when answers depend on private, proprietary, or frequently updated information such as policies, product docs, handbooks, or internal notes.',
          },
          {
            q: 'When should I fine-tune a model?',
            a: 'Fine-tune when prompting cannot reliably produce your required style, format, or specialized skill — and you have quality example data plus an evaluation plan.',
          },
          {
            q: 'Can I combine RAG and fine-tuning?',
            a: 'Yes. Many mature systems retrieve facts with RAG and use fine-tuning or strong instructions for tone and structure. Most teams should prove RAG value before adding fine-tuning cost.',
          },
        ],
      },
    ],
  },
]
