import me from '../../public/me.jpg';

const IndexPage = () => {
	return (
		<div className="divide-y divide-gray-200 dark:divide-gray-700">
			<div className="space-y-2 pt-6 pb-8 md:space-x-5">
				<h1
					className="text-3xl 
        font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100
        sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
				>
					Home
				</h1>
			</div>
			<div className="items-center spacey-2 xl:grid xl:grid-col-3 xl:gap-x-8 xl:space-y-0">
				<div className="flex flex-col items-start pt-8">
					<img
						src={me}
						alt="Profile"
						className="w-32 h-32 rounded-full object-cover object-top"
					/>
					<h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
						Palak Shah
					</h3>
					<p className="text-gray-500 dark:text-gray-400 text-left w-[30rem] sm:w-[40rem]">
						I am a software engineer with a passion for building web applications and
						exploring new technologies.
					</p>
					<div className="flex pt-6 space-x-5">
						<a href="https://github.com/palakshah-47" target="_blank" rel="noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="w-8 h-8 text-teal-500 hover:text-teal-600"
							>
								<path
									fill="currentColor"
									fillRule="evenodd"
									d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
									clipRule="evenodd"
								></path>
							</svg>
						</a>
						<a href="www.linkedin.com/in/palaknshah" target="_blank" rel="noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 1000 1000"
								className="w-8 h-8 text-teal-500 hover:text-teal-600"
							>
								<path
									fill="currentColor"
									d="M196.064.25C88.347.25.187 88.408.187 196.127v607.841c0 107.717 88.158 195.845 195.877 195.845h607.841c107.718 0 195.845-88.127 195.845-195.845V196.127C999.75 88.41 911.623.25 803.905.25zm49.266 164.948c51.648 0 83.461 33.906 84.443 78.475c0 43.585-32.797 78.444-85.442 78.444h-.969c-50.665 0-83.412-34.857-83.412-78.444c0-44.568 33.738-78.475 85.379-78.475zm445.08 208.31c99.329 0 173.79 64.922 173.79 204.436v260.449H713.247V595.406c0-61.06-21.847-102.718-76.476-102.718c-41.704 0-66.562 28.078-77.476 55.202c-3.987 9.704-4.967 23.257-4.967 36.832v253.671H403.375s1.981-411.613 0-454.233h150.984v64.324c20.06-30.95 55.942-74.977 136.051-74.977zm-521.556 10.685h150.953v454.202H168.854z"
								></path>
							</svg>
						</a>
						<a href="https://github.com/palakshah-47" target="_blank" rel="noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="w-8 h-8 text-teal-500 hover:text-teal-600"
							>
								<path
									fill="currentColor"
									fillRule="evenodd"
									d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
									clipRule="evenodd"
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IndexPage;

