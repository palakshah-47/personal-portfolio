import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from '@remix-run/react';
import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';

import stylesheet from '~/tailwind.css?url';
import { themeSessionResolver } from './utils/session.server';
import {
	PreventFlashOnWrongTheme,
	ThemeProvider,
	useTheme,
} from 'remix-themes';
import Navbar from './components/Navbar';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesheet },
];

export async function loader({ request }: LoaderFunctionArgs) {
	const { getTheme } = await themeSessionResolver(request);
	return {
		theme: getTheme(),
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
			<body className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen selection:bg-gray-50 dark:selection:bg-gray-800">
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
