import { Link } from '@remix-run/react';
import type { ReactNode } from 'react';

type NumberedCardProps = {
	index: number;
	tag?: string;
	title: string;
	children: ReactNode;
	/** Internal route. The whole card becomes clickable. */
	to?: string;
	/** External URL. The whole card becomes clickable. */
	href?: string;
	cta?: string;
	className?: string;
};

const linkClass =
	"inline-flex items-center gap-1 text-sm font-medium text-teal-600 dark:text-teal-400 after:content-[''] after:absolute after:inset-0 after:rounded-2xl focus:outline-none focus-visible:after:ring-2 focus-visible:after:ring-teal-500";

export function NumberedCard({
	index,
	tag,
	title,
	children,
	to,
	href,
	cta = 'Learn more',
	className = '',
}: NumberedCardProps) {
	const interactive = Boolean(to || href);

	return (
		<article
			className={`group relative flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 dark:border-gray-800 dark:bg-gray-900 ${
				interactive
					? 'hover:-translate-y-0.5 hover:border-teal-500/60 hover:shadow-lg dark:hover:shadow-gray-950/60'
					: ''
			} ${className}`}
		>
			<div className="flex items-center justify-between gap-4">
				<span className="font-mono text-sm text-teal-600 dark:text-teal-400">
					{String(index).padStart(2, '0')}
				</span>
				{tag && (
					<span className="rounded-full border border-gray-200 px-2.5 py-0.5 font-mono text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
						{tag}
					</span>
				)}
			</div>

			<div className="flex-1">
				<h3 className="font-display text-xl font-bold leading-snug text-gray-900 dark:text-white">
					{title}
				</h3>
				<div className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
					{children}
				</div>
			</div>

			{to && (
				<Link to={to} className={linkClass}>
					{cta} <span aria-hidden="true">&rarr;</span>
				</Link>
			)}
			{!to && href && (
				<a href={href} target="_blank" rel="noreferrer" className={linkClass}>
					{cta} <span aria-hidden="true">{'\u2197'}</span>
				</a>
			)}
		</article>
	);
}
