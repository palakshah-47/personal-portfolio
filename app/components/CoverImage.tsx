type CoverImageProps = {
	gradient: string;
	iconPath: string;
	className?: string;
};

export function CoverImage({ gradient, iconPath, className = 'h-48' }: CoverImageProps) {
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
