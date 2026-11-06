import type { ReactNode } from 'react';

type EyebrowProps = {
	children: ReactNode;
	className?: string;
};

/** Small mono label rendered as a code-comment, e.g. `// Key Projects`. */
export function Eyebrow({ children, className = '' }: EyebrowProps) {
	return (
		<p
			className={`font-mono text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400 ${className}`}
		>
			{'//'} {children}
		</p>
	);
}
