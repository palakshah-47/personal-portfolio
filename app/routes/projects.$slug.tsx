import { json, type LoaderFunctionArgs, type MetaFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { CoverImage } from '~/components/CoverImage';
import { Eyebrow } from '~/components/Eyebrow';
import { IamArchitectureDiagram } from '~/components/IamArchitectureDiagram';
import { NumberedCard } from '~/components/NumberedCard';
import { getProjectBySlug } from '~/data/projects';

export async function loader({ params }: LoaderFunctionArgs) {
	const project = getProjectBySlug(params.slug ?? '');
	if (!project || !project.caseStudy) {
		throw new Response('Not Found', { status: 404 });
	}
	return json({ project });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	if (!data) return [{ title: 'Project not found · Palak Shah' }];
	return [
		{ title: `${data.project.title} · Palak Shah` },
		{ name: 'description', content: data.project.description },
	];
};

function Section({
	eyebrow,
	title,
	children,
}: {
	eyebrow: string;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="mt-16">
			<Eyebrow className="mb-3">{eyebrow}</Eyebrow>
			<h2 className="font-display text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
				{title}
			</h2>
			<div className="mt-6">{children}</div>
		</section>
	);
}

function BulletList({ items }: { items: string[] }) {
	return (
		<ul className="space-y-3">
			{items.map((item) => (
				<li key={item} className="flex gap-3 text-gray-600 dark:text-gray-400">
					<span
						className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500"
						aria-hidden="true"
					/>
					<span className="leading-relaxed">{item}</span>
				</li>
			))}
		</ul>
	);
}

export default function ProjectCaseStudyPage() {
	const { project } = useLoaderData<typeof loader>();
	const study = project.caseStudy!;

	return (
		<div className="pb-8 pt-6">
			<Link
				to="/projects"
				className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-500 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
			>
				<span aria-hidden="true">&larr;</span> Back to Projects
			</Link>

			<article className="mt-8">
				<div className="overflow-hidden rounded-2xl">
					<CoverImage
						gradient={project.gradient}
						iconPath={project.iconPath}
						image={project.image}
						title={project.title}
						className="h-44 sm:h-56 md:h-64"
					/>
				</div>

				<header className="mt-8 max-w-3xl">
					<Eyebrow className="mb-4">{project.category}</Eyebrow>
					<h1 className="font-display text-4xl font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 dark:text-white sm:text-5xl">
						{project.title}
					</h1>
					<p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
						{project.description}
					</p>
					<p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
						<span className="font-mono text-xs uppercase tracking-widest text-gray-900 dark:text-gray-200">
							My role
						</span>{' '}
						{study.role}
					</p>
					<div className="mt-6 flex flex-wrap gap-2">
						{project.tags.map((tag) => (
							<span
								key={tag}
								className="inline-block rounded-full border border-teal-500 px-3 py-1 text-xs font-medium text-teal-600 dark:text-teal-400"
							>
								{tag}
							</span>
						))}
					</div>
				</header>

				{project.metrics && (
					<dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
						{project.metrics.slice(0, 3).map((m) => (
							<div
								key={m.label}
								className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
							>
								<dt className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
									{m.label}
								</dt>
								<dd className="mt-3 font-display text-2xl font-bold text-teal-600 dark:text-teal-400">
									{m.after}
								</dd>
							</div>
						))}
					</dl>
				)}

				<Section eyebrow="Starting point" title="A critical system on a legacy stack">
					<BulletList items={study.context} />
				</Section>

				<Section eyebrow="Approach" title="Define it, design it, secure it">
					<BulletList items={study.approach} />
				</Section>

				<Section eyebrow="Architecture" title="Client data and user access">
					<IamArchitectureDiagram />
					<div className="mt-6 grid gap-4 sm:grid-cols-2">
						{study.accessScopes.map((scope) => (
							<div
								key={scope.title}
								className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
							>
								<h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
									{scope.title}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
									{scope.body}
								</p>
							</div>
						))}
					</div>
				</Section>

				<Section eyebrow="Technical decisions" title="Choices that kept delivery moving">
					<div className="grid gap-6 sm:grid-cols-2">
						{study.decisions.map((d, i) => (
							<NumberedCard key={d.title} index={i + 1} title={d.title}>
								{d.body}
							</NumberedCard>
						))}
					</div>
				</Section>

				<Section eyebrow="State management" title="From Context API to Redux Toolkit">
					<div className="grid gap-6 sm:grid-cols-2">
						<div>
							<h3 className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
								The challenge
							</h3>
							<p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
								{study.stateManagement.challenge}
							</p>
						</div>
						<div>
							<h3 className="font-mono text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400">
								The resolution
							</h3>
							<p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
								{study.stateManagement.resolution}
							</p>
						</div>
					</div>
				</Section>

				<Section eyebrow="Post-launch" title="Problems that only show up in production">
					<div className="space-y-6">
						{study.postLaunch.map((item, i) => (
							<NumberedCard key={item.title} index={i + 1} title={item.title}>
								<p>
									<strong className="font-semibold text-gray-900 dark:text-gray-100">
										Problem.{' '}
									</strong>
									{item.problem}
								</p>
								<p className="mt-3">
									<strong className="font-semibold text-gray-900 dark:text-gray-100">
										Fix.{' '}
									</strong>
									{item.fix}
								</p>
							</NumberedCard>
						))}
					</div>
				</Section>

				{project.metrics && (
					<Section eyebrow="Impact" title="What changed">
						<dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{project.metrics.map((m) => (
								<div
									key={m.label}
									className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
								>
									<dt className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
										{m.label}
									</dt>
									<dd className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
										<span className="text-gray-400 line-through decoration-gray-400/60 dark:text-gray-500">
											{m.before}
										</span>
										<span className="text-gray-400" aria-hidden="true">
											&rarr;
										</span>
										<span className="sr-only">to</span>
										<span className="font-display text-2xl font-bold text-teal-600 dark:text-teal-400">
											{m.after}
										</span>
									</dd>
									{m.note && (
										<p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{m.note}</p>
									)}
								</div>
							))}
						</dl>
					</Section>
				)}
			</article>
		</div>
	);
}
