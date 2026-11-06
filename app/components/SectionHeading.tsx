import { Eyebrow } from '~/components/Eyebrow';

type SectionHeadingProps = {
	eyebrow: string;
	title: string;
	subtitle?: string;
	as?: 'h1' | 'h2';
};

export function SectionHeading({ eyebrow, title, subtitle, as: Tag = 'h2' }: SectionHeadingProps) {
	return (
		<div className="max-w-2xl">
			<Eyebrow className="mb-4">{eyebrow}</Eyebrow>
			<Tag className="font-display text-3xl sm:text-4xl leading-[1.15] font-bold tracking-[-0.02em] text-gray-900 dark:text-white">
				{title}
			</Tag>
			{subtitle && (
				<p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">{subtitle}</p>
			)}
		</div>
	);
}
