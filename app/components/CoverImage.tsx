type CoverImageProps = {
	gradient: string;
	iconPath: string;
	image?: string;
	title?: string;
	className?: string;
};

export function CoverImage({
	gradient,
	iconPath,
	image,
	title,
	className = 'h-48',
}: CoverImageProps) {
	if (image) {
		return (
			<div className={`relative overflow-hidden ${className}`}>
				<img
					src={image}
					alt={title ? `${title} screenshot` : 'Project screenshot'}
					loading="lazy"
					className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
		);
	}

	return (
		<div
			className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
			aria-hidden="true"
		>
			{/* Large faded icon for background texture */}
			<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={0.75}
					stroke="currentColor"
					className="w-72 h-72 text-white opacity-[0.08]"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
				</svg>
			</div>
			{/* Centered foreground icon */}
			<div className="relative z-10 flex items-center justify-center h-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-14 h-14 text-white drop-shadow-lg"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
				</svg>
			</div>
		</div>
	);
}
