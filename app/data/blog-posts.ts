export type BlogPost = {
	slug: string;
	title: string;
	date: string;
	tags: string[];
	summary: string;
	readTime: string;
	gradient: string;
	iconPath: string;
	content: string;
};

export const blogPosts: BlogPost[] = [
	{
		slug: 'micro-frontend-architecture-react',
		title: 'Building Scalable Micro Frontend Architectures with React',
		date: '2025-11-15',
		tags: ['React', 'Architecture', 'Micro Frontends'],
		summary:
			'Lessons from implementing Module Federation at financial-services scale: shared design systems, team topology, and the tradeoffs nobody warns you about.',
		readTime: '8 min read',
		gradient: 'from-blue-600 to-indigo-700',
		iconPath:
			'M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z',
		content: `
      <p>When I joined the platform team at Alter Domus, our frontend was a monolith that had accumulated years of features, team dependencies, and deployment bottlenecks. A single PR from any of six teams could delay a release. The solution wasn't just a rewrite — it was a fundamental rethink of how we organized code and teams around deployability.</p>

      <p>Micro Frontend architecture, specifically via Webpack's Module Federation plugin, gave us the ability to independently deploy slices of the UI. Each team owned their domain — fund accounting, investor reporting, compliance — and could ship without coordinating with others. The host application consumed remote modules at runtime, not at build time, which meant zero-downtime independent releases became the norm rather than the exception.</p>

      <h2>The Shared Design System Problem</h2>

      <p>The first hard lesson: you cannot have each micro app ship its own version of React or your component library. Version mismatches cause subtle bugs that are nightmares to debug — and bundle duplication inflates load times. We solved this by declaring React, ReactDOM, and our internal design system as singletons in the Module Federation config. The host app owns the single instance; remotes consume it. This requires strict semver discipline across teams, but it pays off immediately in bundle size and consistency.</p>

      <p>We built a shared component library using Radix UI primitives styled with CSS custom properties rather than Tailwind utility classes. Custom properties propagate cleanly across the module boundary; Tailwind's purge step cannot see across module boundaries at build time. This is a gotcha that catches teams off guard — plan for it early.</p>

      <h2>Team Topology and Ownership</h2>

      <p>Architecture decisions are also people decisions. We mapped each remote to a stream-aligned team and created a dedicated platform team that owned the host shell, shared libraries, and the CI/CD scaffolding. Teams could iterate on their domains without platform involvement, but any cross-cutting changes — routing, auth, analytics — went through the platform team. This boundary made ownership clear and reduced the coordination overhead that had killed our previous attempts at scaling.</p>

      <h2>What I'd Do Differently</h2>

      <p>Start with a contract-testing layer between host and remote early. We added it six months in and spent a painful sprint retrofitting. Also, invest in a local development story from day one — running six separate dev servers and a host shell to test a single feature is a productivity killer. A well-configured monorepo with shared scripts and a single <code>dev</code> command that orchestrates all remotes made the DX acceptable. Without it, developers start avoiding cross-domain changes, which defeats the purpose of the architecture.</p>

      <p>Micro Frontends are not a silver bullet. They trade deployment independence for distributed systems complexity. If your team is small or your domains aren't cleanly separated, a well-structured monolith with disciplined module boundaries is the better choice. But at scale, with clear team ownership and upfront investment in shared infrastructure, MFE architecture dramatically improves shipping velocity.</p>
    `,
	},
	{
		slug: 'integrating-openai-into-production',
		title: 'Integrating OpenAI APIs into Production Web Applications',
		date: '2025-09-22',
		tags: ['AI', 'OpenAI', 'TypeScript'],
		summary:
			'A practical guide to adding AI features to existing applications — from streaming completions to vector search, with hard-won lessons from shipping to production.',
		readTime: '10 min read',
		gradient: 'from-violet-500 to-purple-700',
		iconPath:
			'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z',
		content: `
      <p>AI features have moved from a novelty to a genuine product expectation. When I built the intelligent search layer for our e-commerce platform, I quickly discovered that integrating OpenAI APIs in a demo is trivial — shipping it reliably to production users is a different problem entirely. This post covers the patterns that made it work.</p>

      <h2>Streaming Completions for Perceived Performance</h2>

      <p>The single highest-impact UX change was streaming. Without streaming, users wait for the entire LLM response before seeing anything — for a 500-token answer, that's 3-6 seconds of a blank screen. With the OpenAI streaming API and Remix's response streaming, tokens appear as they're generated. The perceived latency drops to near zero. On the server, you pipe the SSE stream directly to the client; on the client, you append to state as chunks arrive. The implementation is 20 lines of code and completely changes how users perceive the feature.</p>

      <h2>Vector Search with Semantic Embeddings</h2>

      <p>Keyword search breaks down when users search the way they think rather than the way your data is labeled. "Something for a cozy winter evening" should surface candles, books, and warm beverages — not just products with those exact words. We solved this with OpenAI's <code>text-embedding-ada-002</code> model and pgvector in Postgres. At product ingestion time, we generate an embedding for each product's title and description and store it alongside the row. At query time, we embed the search string and run a cosine similarity query. The entire retrieval happens in a single SQL statement and returns in under 100ms for a 50k-product catalog.</p>

      <h2>Cost and Rate Limit Management</h2>

      <p>OpenAI's APIs have per-minute and per-day token limits, and costs accumulate faster than you expect at production volume. Cache aggressively — identical prompts (like product category descriptions) should hit a Redis cache, never the API. Implement exponential backoff with jitter for 429 responses. Set hard per-user token budgets and surface them in the UI so users understand constraints. We use a lightweight middleware that tracks token usage per session and degrades gracefully — falling back to keyword search if the AI budget is exhausted — rather than failing hard.</p>

      <h2>Prompt Engineering as Code</h2>

      <p>Prompts are code. Version control them, review them, test them. We keep prompts in a typed constants file alongside their expected output shapes. Every prompt has a corresponding test that calls the real API against a recorded response fixture and asserts on the parsed output. When a model update changes behavior, tests catch it before it ships. Treat the prompt as the function signature and the model as the implementation — your job is to write a specification precise enough that any future model can satisfy it.</p>

      <p>The AI features that resonate most with users are the ones that feel native to the product, not bolted on. Start with a single high-value use case, ship it with proper observability, measure whether it actually improves user outcomes, and iterate from there. The technology is ready — the challenge is product and engineering discipline.</p>
    `,
	},
	{
		slug: 'ag-grid-performance-optimization',
		title: 'Performance Optimization for Data-Heavy Dashboards with AG Grid',
		date: '2025-07-10',
		tags: ['Performance', 'AG Grid', 'React'],
		summary:
			'Techniques for rendering thousands of rows smoothly — virtualization strategies, custom cell renderers, and handling real-time data without blocking the main thread.',
		readTime: '7 min read',
		gradient: 'from-orange-500 to-rose-600',
		iconPath:
			'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
		content: `
      <p>Financial dashboards are stress tests for frontend performance. At JP Morgan, I worked on a portfolio management interface that displayed 50,000+ positions updating via WebSocket at up to 100 messages per second. The first version was a disaster — 4-second initial renders, janky updates, and memory leaks that crashed tabs after 30 minutes. Here's what we did to fix it.</p>

      <h2>Row Virtualisation Is Not Optional</h2>

      <p>AG Grid virtualises rows out of the box, but its default configuration is conservative. Enable <code>rowBuffer</code> tuning and explicitly set <code>rowHeight</code> to a fixed pixel value. Variable row height forces AG Grid to measure every row, which requires a DOM layout pass — at 50k rows, that's catastrophic. Fixed heights let the grid calculate the viewport entirely in JavaScript without touching the DOM.</p>

      <h2>Custom Cell Renderers and React.memo</h2>

      <p>The default AG Grid React cell renderer recreates a React tree for each cell update. For a grid with 20 columns and 1000 visible rows, a bulk update triggers 20,000 reconciliations. Wrap every cell renderer component in <code>React.memo</code> with a custom equality function that checks only the fields that renderer actually uses. A price cell only cares about the price value and a flash direction — it doesn't need to re-render when the row's status changes.</p>

      <h2>Batching WebSocket Updates</h2>

      <p>At 100 messages per second, applying each update individually means 100 <code>setState</code> calls per second, each triggering a reconciliation cycle. Instead, buffer incoming messages for 50ms and apply them as a single batch using AG Grid's transaction API: <code>gridApi.applyTransactionAsync()</code>. This collapses 5 updates to the same row into one DOM operation and gives AG Grid the opportunity to skip renders for rows not in the viewport. Our CPU usage dropped by 70% with this single change.</p>

      <h2>Avoiding Memory Leaks</h2>

      <p>WebSocket listeners and AG Grid event subscriptions outlive component unmounts if you're not careful. Register all listeners in a <code>useEffect</code> and return a cleanup function that calls <code>gridApi.destroy()</code> and closes the WebSocket. Profile memory usage in Chrome DevTools after navigating away from the grid and back ten times — if the heap keeps growing, you have a leak. We use a custom hook that centralises all AG Grid event registration and guarantees cleanup on unmount.</p>

      <p>The result: initial render under 300ms, smooth 60fps during live updates, and zero memory leaks in 8-hour trading sessions. AG Grid is an exceptional tool for this problem domain — but like all powerful tools, it rewards users who understand its internals and punishes those who treat it as a black box.</p>
    `,
	},
	{
		slug: 'design-systems-typescript-tailwind',
		title: 'Building a Design System with TypeScript and Tailwind CSS',
		date: '2025-05-03',
		tags: ['Design Systems', 'TypeScript', 'Tailwind CSS'],
		summary:
			'How to create a robust, type-safe component library that scales across multiple teams, with theming, dark mode, and accessibility built in from the start.',
		readTime: '9 min read',
		gradient: 'from-teal-500 to-cyan-600',
		iconPath:
			'M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z',
		content: `
      <p>A design system is infrastructure. Like any infrastructure, building it wrong means every team that depends on it inherits your mistakes. Building it right means shipping faster with more consistency than any individual team could achieve alone. After helping build two design systems in financial services, here are the principles that separate good ones from great ones.</p>

      <h2>TypeScript as Your Documentation Layer</h2>

      <p>Every component prop is a contract. Use TypeScript's discriminated unions, literal types, and strict generics to make invalid states unrepresentable. A <code>Button</code> with <code>variant="primary" | "secondary" | "destructive"</code> and <code>size="sm" | "md" | "lg"</code> means the consumer can never pass <code>variant="red"</code> by accident. The TypeScript error is the documentation. When a prop changes, the type error propagates immediately to every consumer — no wiki page to update, no breaking change buried in a changelog.</p>

      <h2>Semantic Design Tokens, Not Hardcoded Colors</h2>

      <p>Tailwind's utility classes are great for application code but problematic in shared libraries. <code>bg-blue-600</code> in a button component means every consumer is locked to that shade of blue. Instead, define semantic CSS custom properties: <code>--color-primary</code>, <code>--color-surface</code>, <code>--color-text-muted</code>. Components reference these tokens. Applications define the tokens. This decoupling is what makes dark mode, white-labelling, and brand updates cheap rather than expensive.</p>

      <h2>Accessibility Is a Feature, Not a Checklist</h2>

      <p>We built on Radix UI primitives for interactive components — Dialog, Select, Tooltip, Dropdown. Radix handles the WAI-ARIA roles, keyboard navigation, and focus management that are genuinely hard to get right from scratch. Our designers focused on visual design; our engineers focused on styling; Radix handled the semantics. This division of labour produced accessible components faster than any team I'd seen attempt to build from scratch, and the accessibility held up under screen reader testing.</p>

      <h2>Storybook as the Source of Truth</h2>

      <p>Every component has a Storybook story for every meaningful state: default, hover, focused, disabled, loading, error, and each size/variant combination. Stories serve as visual regression tests via Chromatic, as documentation for designers, and as a development environment for engineers. The design system is considered broken if a component works in the application but is missing a story — the story is the specification.</p>

      <p>A design system is never finished. Plan for evolution by versioning your token schema separately from your components, writing migration codemods for breaking changes, and treating consumer feedback as product feedback. The teams that use your system are your users — their friction is your backlog.</p>
    `,
	},
	{
		slug: 'modernizing-legacy-frontend',
		title: 'Modernizing Legacy Frontend Systems: A Pragmatic Approach',
		date: '2025-03-18',
		tags: ['Refactoring', 'Next.js', 'Migration'],
		summary:
			'Strategies for incrementally migrating large legacy codebases without stopping feature development — including the strangler fig pattern and how to handle the political problems.',
		readTime: '12 min read',
		gradient: 'from-slate-500 to-gray-700',
		iconPath:
			'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99',
		content: `
      <p>The worst migration I've seen was a six-month "big bang" rewrite that shipped two months late, broke dozens of features that worked fine in the old system, and demoralised two engineering teams. The best migration I've led took eighteen months, shipped features throughout, and the cutover day was a non-event. The difference was incremental migration versus wholesale replacement.</p>

      <h2>The Strangler Fig Pattern</h2>

      <p>Named after the fig tree that slowly envelops its host, the strangler fig pattern means building new functionality in the new system while routing legacy functionality through the old one. A routing layer — a reverse proxy or a lightweight middleware — directs traffic: new pages go to Next.js, legacy pages go to the old Rails app. Over time, you migrate page by page until the legacy system is strangled and can be decommissioned.</p>

      <p>The key discipline: never touch the old system to add new features. Every new feature goes into the new system, even if it means the UX is slightly inconsistent during transition. This creates a forcing function. Engineers who want to build the interesting new stuff have to work in the new system. Legacy maintenance stays minimal. After six months, no one voluntarily touched the old system.</p>

      <h2>Data and API Contracts</h2>

      <p>Frontend migrations succeed or fail at the API layer. If the new frontend needs the same data in a different shape, you have three options: transform in the client (expensive, breaks SSR), add a BFF (Backend for Frontend) layer that reshapes data for the new frontend, or migrate the API alongside the frontend. We chose the BFF approach — a thin Next.js API route layer that called the legacy APIs and returned data in the shape our components needed. This isolated the frontend migration from the API migration and let both proceed independently.</p>

      <h2>Feature Flags and Incremental Rollout</h2>

      <p>Even with careful incremental migration, some users will hit regressions. Feature flags let you roll out to 1% of users first, monitor error rates and performance metrics, and roll back instantly if something goes wrong without a redeployment. We used LaunchDarkly with user-segment targeting — internal employees first, then power users, then the full user base. Each migration wave caught issues that automated tests missed, because real users use applications in ways that test suites never anticipate.</p>

      <h2>The Political Problem</h2>

      <p>Technical strategy is easy compared to organisational alignment. Stakeholders want features, not infrastructure. Framing the migration as "we're rebuilding in Next.js" gets you a fight about timelines; framing it as "we're moving our checkout flow to a faster, more reliable system that will reduce cart abandonment by 15%" gets you budget. Measure the outcomes of each migrated section — page load time, conversion rate, support ticket volume — and report them. Numbers justify the ongoing investment and keep the project alive through the inevitable difficult quarters.</p>

      <p>Incremental migration is slower than a rewrite in the short term and dramatically safer in the long term. The teams that succeed are the ones that treat migration as a product, not a project — with user stories, metrics, and a roadmap — rather than a technical exercise that happens in parallel to "real" work.</p>
    `,
	},
];

export function getPostBySlug(slug: string): BlogPost | undefined {
	return blogPosts.find((p) => p.slug === slug);
}
