export type Project = {
	title: string;
	description: string;
	tags: string[];
	gradient: string;
	iconPath: string;
	image?: string;
	github?: string;
	live?: string;
	featured: boolean;
};

export const projects: Project[] = [
	{
		title: 'Fingerhut Shopping Cart',
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
		title: 'AI Weather Assistant',
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
		title: 'Comfy Store',
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
		title: 'Blackjack',
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
