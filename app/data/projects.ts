export type Project = {
	title: string;
	description: string;
	tags: string[];
	gradient: string;
	iconPath: string;
	github?: string;
	live?: string;
	featured: boolean;
};

export const projects: Project[] = [
	{
		title: 'E-Commerce Platform',
		description:
			'Full-stack e-commerce platform with Stripe payments, AI-powered semantic product search via vector embeddings, and a modern React UI. Built with Next.js App Router and deployed on Vercel with edge functions.',
		tags: ['Next.js', 'TypeScript', 'Stripe', 'OpenAI', 'pgvector', 'Tailwind CSS'],
		gradient: 'from-emerald-500 to-teal-600',
		iconPath:
			'M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z',
		github: 'https://github.com/palakshah-47',
		featured: true,
	},
	{
		title: 'AI-Enhanced Financial Dashboard',
		description:
			'Real-time portfolio management dashboard handling 50k+ positions with AG Grid, WebSocket-driven live price updates batched for 60fps performance, and an OpenAI integration for natural language querying across financial data.',
		tags: ['React', 'TypeScript', 'AG Grid', 'OpenAI', 'WebSockets', 'Redis'],
		gradient: 'from-violet-500 to-purple-700',
		iconPath:
			'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
		github: 'https://github.com/palakshah-47',
		featured: true,
	},
	{
		title: 'Micro Frontend Boilerplate',
		description:
			'Production-ready MFE scaffold using Webpack Module Federation with a shared singleton design system, independent CI/CD pipelines per remote, and a local dev orchestrator that spins up all remotes with a single command.',
		tags: ['React', 'TypeScript', 'Webpack', 'Module Federation', 'Jest'],
		gradient: 'from-blue-600 to-indigo-700',
		iconPath:
			'M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z',
		github: 'https://github.com/palakshah-47',
		featured: false,
	},
	{
		title: 'Component Design System',
		description:
			'Accessible React component library built on Radix UI primitives with semantic CSS custom property tokens, full TypeScript generics, Storybook documentation, and Chromatic visual regression testing.',
		tags: ['React', 'TypeScript', 'Radix UI', 'Storybook', 'CSS Variables'],
		gradient: 'from-pink-500 to-rose-600',
		iconPath:
			'M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z',
		github: 'https://github.com/palakshah-47',
		featured: false,
	},
	{
		title: 'Personal Portfolio',
		description:
			'This site — built with Remix, Vite, and Tailwind CSS. Features cookie-based dark/light theme with zero FOUC, SSR, and Remix v3 future flags enabled. Designed for fast Core Web Vitals.',
		tags: ['Remix', 'TypeScript', 'Tailwind CSS', 'Vite'],
		gradient: 'from-teal-500 to-cyan-600',
		iconPath: 'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5',
		github: 'https://github.com/palakshah-47/personal-portfolio',
		featured: false,
	},
];
