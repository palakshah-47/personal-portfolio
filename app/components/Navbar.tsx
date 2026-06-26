import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Link, NavLink } from '@remix-run/react';
import { Theme, useTheme } from 'remix-themes';

const navLinks = [
	{ to: '/', label: 'Home' },
	{ to: '/blog', label: 'Blog' },
	{ to: '/projects', label: 'Projects' },
];

const desktopNavClass = ({ isActive }: { isActive: boolean }) =>
	[
		'relative inline-flex items-center px-1 py-5 text-sm font-medium transition-colors duration-200',
		"after:content-[''] after:absolute after:bottom-2 after:left-0 after:h-[2px] after:bg-teal-500 after:transition-all after:duration-300 after:ease-out",
		isActive
			? 'text-teal-600 dark:text-teal-400 after:w-full'
			: 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white after:w-0 hover:after:w-full',
	].join(' ');

const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
	[
		'block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-150',
		isActive
			? 'border-teal-500 text-teal-600 bg-teal-50 dark:bg-teal-950/40 dark:text-teal-400'
			: 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600',
	].join(' ');

const SunIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="size-5"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
		/>
	</svg>
);

const MoonIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="size-5"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
		/>
	</svg>
);

const Navbar = () => {
	const [theme, setTheme] = useTheme();

	const toggleTheme = () =>
		setTheme((prev) => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK));

	return (
		<Disclosure
			as="nav"
			className="sticky top-0 z-10 border-b border-gray-100 dark:border-gray-800/50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm"
		>
			{({ open }) => (
				<>
					<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-between h-16">
							{/* Brand */}
							<Link to="/" className="group shrink-0">
								<span className="text-xl font-display font-bold text-gray-900 dark:text-white transition-colors duration-200 group-hover:text-teal-600 dark:group-hover:text-teal-400">
									Marshal<span className="text-teal-500">Blog</span>
								</span>
							</Link>

							{/* Desktop nav */}
							<div className="hidden sm:flex sm:items-center sm:gap-2">
								{navLinks.map(({ to, label }) => (
									<NavLink key={to} to={to} className={desktopNavClass} end={to === '/'}>
										{label}
									</NavLink>
								))}
								<button
									onClick={toggleTheme}
									aria-label="Toggle theme"
									className="ml-2 p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
								>
									{theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
								</button>
							</div>

							{/* Mobile controls */}
							<div className="-mr-1 flex items-center gap-1 sm:hidden">
								<button
									onClick={toggleTheme}
									aria-label="Toggle theme"
									className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
								>
									{theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
								</button>
								<DisclosureButton className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500">
									{open ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="size-5"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M6 18 18 6M6 6l12 12"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="size-5"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
											/>
										</svg>
									)}
								</DisclosureButton>
							</div>
						</div>
					</div>

					{/* Mobile menu */}
					<DisclosurePanel className="sm:hidden border-t border-gray-100 dark:border-gray-800/50">
						<div className="py-2">
							{navLinks.map(({ to, label }) => (
								<NavLink key={to} to={to} className={mobileNavClass} end={to === '/'}>
									{label}
								</NavLink>
							))}
						</div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
