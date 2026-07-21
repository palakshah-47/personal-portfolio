import { CoverImage } from '~/components/CoverImage';
import { projects, type Project } from '~/data/projects';

function GitHubIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

function ExternalLinkIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="w-4 h-4"
			aria-hidden="true"
		>
			<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
			<polyline points="15 3 21 3 21 9" />
			<line x1="10" y1="14" x2="21" y2="3" />
		</svg>
	);
}

function ProjectCard({ project, coverHeight }: { project: Project; coverHeight: string }) {
	return (
		<div className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-200">
			<CoverImage
				gradient={project.gradient}
				iconPath={project.iconPath}
				image={project.image}
				title={project.title}
				className={coverHeight}
			/>

			<div className="flex flex-col flex-1 p-6 gap-4">
				<div>
					<h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
						{project.title}
					</h3>
					<p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
						{project.description}
					</p>
				</div>

				<div className="flex flex-wrap gap-2 flex-1 content-start">
					{project.tags.map((tag) => (
						<span
							key={tag}
							className="inline-block rounded-full border border-gray-200 dark:border-gray-600 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-300"
						>
							{tag}
						</span>
					))}
				</div>

				<div className="flex items-center gap-5 pt-4 border-t border-gray-100 dark:border-gray-700/60">
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1.5 text-sm font-medium text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
						>
							<GitHubIcon />
							Code
						</a>
					)}
					{project.live && (
						<a
							href={project.live}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1.5 text-sm font-medium text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
						>
							<ExternalLinkIcon />
							Live Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

const ProjectsPage = () => {
	return (
		<div className="divide-y divide-gray-200 dark:divide-gray-700">
			<div className="space-y-2 pt-6 pb-8 md:space-x-5">
				<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
					Projects
				</h1>
				<p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
					A selection of things I&apos;ve built — from full-stack applications to developer
					tooling.
				</p>
			</div>

			<div className="py-12 space-y-14">
				<section>
					<h2 className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-6">
						Featured
					</h2>
					<div className="grid gap-8 sm:grid-cols-2">
						{featuredProjects.map((project) => (
							<ProjectCard key={project.title} project={project} coverHeight="h-56" />
						))}
					</div>
				</section>

				{otherProjects.length > 0 && (
					<section>
						<h2 className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-6">
							Other Projects
						</h2>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{otherProjects.map((project) => (
								<ProjectCard key={project.title} project={project} coverHeight="h-44" />
							))}
						</div>
					</section>
				)}
			</div>
		</div>
	);
};

export default ProjectsPage;
