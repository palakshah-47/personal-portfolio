import { Eyebrow } from '~/components/Eyebrow';

type CtaBlockProps = {
	id?: string;
};

export function CtaBlock({ id }: CtaBlockProps) {
	return (
		<section
			id={id}
			className="scroll-mt-24 rounded-3xl bg-gray-900 px-6 py-12 text-white dark:bg-gray-900 dark:ring-1 dark:ring-gray-800 sm:px-12 sm:py-16"
		>
			<Eyebrow className="mb-4 !text-teal-300">Contact</Eyebrow>
			<h2 className="max-w-2xl font-display text-3xl font-bold leading-[1.15] tracking-[-0.02em] sm:text-4xl">
				Have a UI problem worth solving? Let&apos;s build something people actually enjoy using.
			</h2>
			<div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
				<a
					href="mailto:palakshah47@gmail.com"
					className="font-mono text-sm text-teal-300 underline-offset-4 hover:underline"
				>
					palakshah47@gmail.com
				</a>
				<a
					href="https://www.linkedin.com/in/palaknshah"
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-gray-950 transition-colors duration-200 hover:bg-teal-400"
				>
					Connect on LinkedIn <span aria-hidden="true">&rarr;</span>
				</a>
			</div>
		</section>
	);
}
