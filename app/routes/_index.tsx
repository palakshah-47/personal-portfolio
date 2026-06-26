import me from '../assets/me.jpg';

const skills = [
	'React',
	'TypeScript',
	'Next.js',
	'AG Grid',
	'GenAI / OpenAI',
	'Micro Frontends',
	'Design Systems',
];

const IndexPage = () => {
	return (
		<div className="py-16 md:py-24">
			{/* Hero */}
			<div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
				{/* Text */}
				<div>
					<p
						className="text-xs font-semibold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-5 animate-fade-in-up"
						style={{ animationDelay: '0ms' }}
					>
						Frontend Technical Lead &middot; Rutherford, NJ
					</p>
					<h1
						className="font-display text-[clamp(2.75rem,6vw,4rem)] leading-[1.15] font-bold tracking-[-0.02em] text-gray-900 dark:text-white mb-6 animate-fade-in-up"
						style={{ animationDelay: '80ms' }}
					>
						Palak Shah
					</h1>
					<p
						className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mb-8 animate-fade-in-up"
						style={{ animationDelay: '160ms' }}
					>
						10+ years building high-performance dashboards, AI-integrated UIs, and Micro
						Frontend architectures — with a focus on clean code, accessibility, and
						design systems at enterprise scale.
					</p>

					{/* Skill chips */}
					<div
						className="flex flex-wrap gap-2 mb-10 animate-fade-in-up"
						style={{ animationDelay: '240ms' }}
					>
						{skills.map((skill) => (
							<span
								key={skill}
								className="px-3 py-1 text-sm font-medium rounded-full bg-teal-50 text-teal-700 border border-teal-200/70 dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800/50 transition-colors duration-200 hover:bg-teal-100 dark:hover:bg-teal-900/50 cursor-default"
							>
								{skill}
							</span>
						))}
					</div>

					{/* Social / contact links */}
					<div
						className="flex items-center flex-wrap gap-4 animate-fade-in-up"
						style={{ animationDelay: '320ms' }}
					>
						<a
							href="https://github.com/palakshah-47"
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub profile"
							className="group flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
							>
								<path
									fillRule="evenodd"
									d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
									clipRule="evenodd"
								/>
							</svg>
							GitHub
						</a>
						<span className="w-px h-4 bg-gray-300 dark:bg-gray-700" aria-hidden="true" />
						<a
							href="https://www.linkedin.com/in/palaknshah"
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn profile"
							className="group flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
							>
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
							LinkedIn
						</a>
						<span className="w-px h-4 bg-gray-300 dark:bg-gray-700" aria-hidden="true" />
						<a
							href="mailto:palakshah47@gmail.com"
							aria-label="Send email"
							className="group flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={1.75}
								strokeLinecap="round"
								strokeLinejoin="round"
								className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
							>
								<rect width="20" height="16" x="2" y="4" rx="2" />
								<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
							</svg>
							palakshah47@gmail.com
						</a>
					</div>
				</div>

				{/* Photo */}
				<div
					className="flex justify-center lg:justify-end animate-fade-in"
					style={{ animationDelay: '100ms' }}
				>
					<div className="relative">
						<div
							className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-cyan-400/20 rounded-full blur-3xl scale-125"
							aria-hidden="true"
						/>
						<img
							src={me}
							alt="Palak Shah"
							className="relative w-52 h-52 lg:w-64 lg:h-64 rounded-full object-cover object-top ring-2 ring-teal-500/20 ring-offset-4 ring-offset-white dark:ring-offset-gray-950"
						/>
					</div>
				</div>
			</div>

			{/* Experience summary */}
			<div className="mt-20 pt-16 border-t border-gray-100 dark:border-gray-800">
				<div className="prose prose-lg dark:prose-invert max-w-none prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed prose-strong:text-gray-800 dark:prose-strong:text-gray-200">
					<p>
						Currently at <strong>Alter Domus</strong> as a Senior UI Engineer on the{' '}
						<strong>Solvas Asset Management</strong> platform — leading Micro Frontend
						development across multiple apps, integrating shared component libraries and
						React Query for API management. Architected reusable React + TypeScript UI
						systems with ARIA accessibility and testing best practices, cutting load time
						by ~40% through lazy loading, memoization, and Webpack optimization.
						Integrated gRPC APIs for inter-service communication and contributed to a
						scalable cross-app design system ensuring UI consistency across teams.
					</p>
					<p>
						Previously at <strong>JP Morgan Chase</strong>, I developed real-time AG Grid
						dashboards with WebSocket data feeds, Spring Boot integrations, and CI/CD
						pipelines via GitLab. Before that, I spent a decade at{' '}
						<strong>Guy Carpenter (Marsh &amp; McLennan)</strong> leading the AngularJS
						→ React migration, building secure RBAC and OKTA OAuth flows, and integrating
						Azure Blob storage and Esri Geospatial APIs.
					</p>
					<p>
						<strong>M.S. Computer Science</strong>, Pace University, New York &nbsp;·&nbsp;{' '}
						<strong>B.E. Electrical Engineering</strong>, Gujarat University, India
					</p>
				</div>
			</div>
		</div>
	);
};

export default IndexPage;
