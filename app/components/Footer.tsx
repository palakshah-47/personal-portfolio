import { Link } from '@remix-run/react';

const linkClass =
	'text-gray-500 transition-colors duration-200 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400';

const Footer = () => {
	return (
		<footer className="mt-24 border-t border-gray-200 dark:border-gray-800">
			<div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
				<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
					<Link
						to="/"
						className="font-semibold uppercase tracking-[0.2em] text-gray-900 dark:text-white"
					>
						Palak Shah
					</Link>
					<span className="text-gray-500 dark:text-gray-400">
						&copy; {new Date().getFullYear()} &middot; Rutherford, NJ
					</span>
				</div>
				<div className="flex items-center gap-5 font-mono text-xs">
					<a
						href="https://github.com/palakshah-47"
						target="_blank"
						rel="noreferrer"
						className={linkClass}
					>
						GitHub {'\u2197'}
					</a>
					<a
						href="https://www.linkedin.com/in/palaknshah"
						target="_blank"
						rel="noreferrer"
						className={linkClass}
					>
						LinkedIn {'\u2197'}
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
