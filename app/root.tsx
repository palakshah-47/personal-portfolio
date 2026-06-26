import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';

import stylesheet from '~/tailwind.css?url';
import { themeSessionResolver } from './utils/session.server';
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from 'remix-themes';
import Navbar from './components/Navbar';

export const links: LinksFunction = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:wght@700;800&display=swap',
	},
	{ rel: 'stylesheet', href: stylesheet },
];

import type { Theme } from 'remix-themes';

export async function loader({ request }: LoaderFunctionArgs) {
	const { getTheme } = await themeSessionResolver(request);
	const theme = (getTheme() ?? 'light') as Theme;
	return {
		theme,
	};
}

function ThemedApp({ ssrTheme }: { ssrTheme: boolean }) {
	const [theme] = useTheme();

	return (
		<html lang="en" data-theme={theme ?? ''} className={theme ?? ''}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<PreventFlashOnWrongTheme ssrTheme={ssrTheme} />
				<Links />
			</head>
			<body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white min-h-screen antialiased selection:bg-teal-100 dark:selection:bg-teal-900/40">
				<Navbar />
				<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<Outlet />
				</main>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	const { theme } = useLoaderData<typeof loader>();
	return (
		<ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
			<ThemedApp ssrTheme={theme !== null} />
		</ThemeProvider>
	);
}

