export type Metric = {
	label: string;
	before: string;
	after: string;
	/** Shown under the metric, e.g. to flag an estimate. */
	note?: string;
};

export type CaseStudy = {
	/** One-line framing of the problem space. */
	role: string;
	context: string[];
	approach: string[];
	/** Who sees what in the access model. */
	accessScopes: { title: string; body: string }[];
	decisions: { title: string; body: string }[];
	stateManagement: { challenge: string; resolution: string };
	postLaunch: { title: string; problem: string; fix: string }[];
};

export type Project = {
	slug: string;
	title: string;
	/** Short label shown on cards, e.g. "Case study". */
	category: string;
	description: string;
	tags: string[];
	gradient: string;
	iconPath: string;
	image?: string;
	github?: string;
	live?: string;
	featured: boolean;
	metrics?: Metric[];
	caseStudy?: CaseStudy;
};

export const projects: Project[] = [
	{
		slug: 'iam-modernization',
		title: 'IAM Platform Modernization',
		category: 'Case study',
		description:
			'Rebuilt a legacy AngularJS identity and access management app in React and TypeScript, with OKTA OAuth 2.0 and role-based access control. Onboarding went from about two days to the same day, and access-related support tickets dropped from roughly 120 to 50 a month.',
		tags: ['React', 'TypeScript', 'Redux Toolkit', 'Material UI', 'OKTA OAuth 2.0', 'RBAC'],
		gradient: 'from-slate-700 to-teal-700',
		iconPath:
			'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
		featured: true,
		metrics: [
			{ label: 'Onboarding a user or client', before: '~2 days', after: 'Same day' },
			{ label: 'Access tickets per month', before: '~120', after: '~50' },
			{ label: 'Page load', before: '4.8 s', after: '2.1 s', note: 'Estimated' },
			{ label: 'Initial bundle', before: '2.8 MB', after: '~350 KB' },
			{ label: 'Time to Interactive', before: '7.2 s', after: '2.5 s' },
			{ label: 'Lighthouse performance', before: '32', after: '84' },
		],
		caseStudy: {
			role: 'Frontend lead: architecture, React implementation, OKTA integration and performance work.',
			context: [
				'A legacy AngularJS app sat at the center of a security-sensitive system.',
				'Onboarding a new client, or adding users to a client, was manual, ticket-driven and slow.',
				'The codebase was hard to maintain, so new features shipped slowly.',
				'The brief began as a single screen of rough mockups with no defined use cases.',
				'Enterprise role-based access control had to be right from day one.',
			],
			approach: [
				'Defined the core user stories and use cases together with the UX team.',
				'Architected the frontend with React, TypeScript, Redux Toolkit and Material UI.',
				'Implemented OKTA OAuth 2.0 so each user gets exactly the right access, working closely with the identity management team.',
			],
			accessScopes: [
				{
					title: 'Internal user',
					body: 'Sees only the clients assigned to them, and the groups within those clients. A user assigned to Client A sees Client A and its groups.',
				},
				{
					title: 'Administrator',
					body: 'Sees every imported client. An administrator sees Client A, Client B and any other client that has been imported.',
				},
			],
			decisions: [
				{
					title: 'Reusable component library',
					body: 'Standardized buttons, forms and inputs on Material UI, documented in Storybook. It keeps the UI consistent and removes duplicate implementations.',
				},
				{
					title: 'OAuth 2.0 + RBAC',
					body: 'Aligned with security early. It gives secure enterprise access and clearer authorization flows.',
				},
				{
					title: 'OpenAPI + Prism mocks',
					body: 'Decoupled UI work from API availability, so frontend and backend could be delivered in parallel.',
				},
				{
					title: 'Route-based lazy loading',
					body: 'Reduced the initial bundle scope on slow networks, to improve perceived startup performance.',
				},
			],
			stateManagement: {
				challenge:
					'Context API removed prop drilling for shared client, group and permission state. But a broad provider value made unrelated consumers re-render on every change, and related updates got harder to trace as IAM workflows grew.',
				resolution:
					'Scoped a proof of concept to client selection and organized shared state into focused Redux Toolkit slices. Specific selectors limit unnecessary renders, temporary UI state stays local, and state transitions are explicit and easy to inspect in Redux DevTools.',
			},
			postLaunch: [
				{
					title: 'Large bundle size',
					problem:
						'As third-party libraries piled up, the app grew into a 2.8 MB monolithic bundle. Users had to download and parse all the administrative code just to render the login screen, which locked the main thread at peak usage: a 7.2 s Time to Interactive and a Lighthouse score of 32.',
					fix: 'Led an optimization effort with route-based code splitting via React.lazy(), strict Webpack tree shaking and Brotli compression in CI/CD. The initial payload dropped by 87% to about 350 KB, Time to Interactive fell to 2.5 s and Lighthouse rose to 84.',
				},
				{
					title: 'Database hotspots at peak hours',
					problem:
						'Identity traffic is cyclical. When many users log in at once, the NoSQL database sees a sharp spike in reads, and when it is also processing background Kafka work, CPU climbs and logins slow down.',
					fix: 'Added Redis caching. Each user’s compiled access document is held in memory, so the bulk of login-time reads never reach the database.',
				},
			],
		},
	},
	{
		slug: 'fingerhut-shopping-cart',
		title: 'Fingerhut Shopping Cart',
		category: 'Full-stack',
		description:
			'Full-stack e-commerce platform built with Next.js 15 and React 19. Features credential and OAuth sign-in via NextAuth with a Prisma/Postgres data layer, Stripe checkout and webhooks, an admin dashboard with MUI Data Grid for inventory management, and server-persisted carts, orders, and user profiles.',
		tags: ['Next.js 15', 'React 19', 'TypeScript', 'Prisma', 'Stripe', 'NextAuth'],
		gradient: 'from-cyan-600 to-blue-700',
		iconPath:
			'M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z',
		image: '/images/projects/fingerhut.jpg',
		github: 'https://github.com/palakshah-47/shoppingCart',
		live: 'https://shopping-cart-fingerhut.vercel.app/',
		featured: true,
	},
	{
		slug: 'ai-weather-assistant',
		title: 'AI Weather Assistant',
		category: 'GenAI',
		description:
			'AI-powered weather app that pairs a React + Vite frontend with the OpenAI API. It figures out which location you are asking about, explains the forecast in plain language, and even suggests what to wear — with user authentication and API tokens stored securely in a ServiceWorker.',
		tags: ['React', 'JavaScript', 'OpenAI', 'Vite', 'ServiceWorker'],
		gradient: 'from-violet-500 to-purple-700',
		iconPath:
			'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z',
		image: '/images/projects/ai-weather.jpg',
		github: 'https://github.com/palakshah-47/javascript-open-AI',
		live: 'https://javascript-open-ai.vercel.app/',
		featured: true,
	},
	{
		slug: 'comfy-store',
		title: 'Comfy Store',
		category: 'Storefront',
		description:
			'Modern furniture storefront built with React, TypeScript, and Vite. Uses Redux Toolkit for cart and global state, React Router data loaders, accessible Radix UI primitives, and a Tailwind design system — with product filtering, sorting, pagination, and an embla carousel.',
		tags: ['React', 'TypeScript', 'Redux Toolkit', 'React Router', 'Radix UI', 'Tailwind CSS'],
		gradient: 'from-emerald-500 to-teal-600',
		iconPath:
			'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
		image: '/images/projects/comfy-store.jpg',
		github: 'https://github.com/palakshah-47/comfy-store',
		live: 'https://comfy-store-mauve.vercel.app/',
		featured: true,
	},
	{
		slug: 'blackjack',
		title: 'Blackjack',
		category: 'Game',
		description:
			'Browser Blackjack game — you versus the house — including the tricky 1-or-11 Ace scoring logic. State is managed with Redux Toolkit, cards are dealt from the Deck of Cards API, and the app is deployed to GitHub Pages.',
		tags: ['React', 'TypeScript', 'Redux Toolkit', 'REST API', 'GitHub Pages'],
		gradient: 'from-amber-500 to-orange-600',
		iconPath:
			'M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z',
		image: '/images/projects/blackjack.jpg',
		github: 'https://github.com/palakshah-47/blackjack-redux-toolkit',
		live: 'https://palakshah-47.github.io/blackjack-redux-toolkit/',
		featured: true,
	},
];

export function getProjectBySlug(slug: string) {
	return projects.find((p) => p.slug === slug);
}
