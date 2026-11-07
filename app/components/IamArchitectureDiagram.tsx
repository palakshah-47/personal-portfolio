type BoxProps = {
	x: number;
	y: number;
	title: string;
	sub: string;
	dashed?: boolean;
};

const BOX_W = 170;
const BOX_H = 64;

function Box({ x, y, title, sub, dashed }: BoxProps) {
	return (
		<g>
			<rect
				x={x}
				y={y}
				width={BOX_W}
				height={BOX_H}
				rx={12}
				strokeWidth={1.5}
				strokeDasharray={dashed ? '5 4' : undefined}
				className="fill-white stroke-gray-300 dark:fill-gray-900 dark:stroke-gray-700"
			/>
			<text
				x={x + BOX_W / 2}
				y={y + 28}
				textAnchor="middle"
				fontSize={14}
				fontWeight={600}
				className="fill-gray-900 dark:fill-gray-100"
			>
				{title}
			</text>
			<text
				x={x + BOX_W / 2}
				y={y + 47}
				textAnchor="middle"
				fontSize={11}
				className="fill-gray-500 dark:fill-gray-400"
			>
				{sub}
			</text>
		</g>
	);
}

function Label({ x, y, children }: { x: number; y: number; children: string }) {
	return (
		<text x={x} y={y} textAnchor="middle" fontSize={10} className="fill-gray-500 dark:fill-gray-400">
			{children}
		</text>
	);
}

export function IamArchitectureDiagram() {
	const arrow = 'stroke-teal-500 fill-none';

	return (
		<div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900/50">
			<svg
				viewBox="0 0 960 320"
				role="img"
				aria-labelledby="iam-diagram-title iam-diagram-desc"
				className="h-auto w-full min-w-[720px]"
			>
				<title id="iam-diagram-title">IAM architecture</title>
				<desc id="iam-diagram-desc">
					Client records flow from Salesforce through a Kafka topic and an ingestion consumer into a
					user-centric NoSQL database. Users authenticate through OKTA from the React frontend, and
					the IAM backend checks role and membership, reading each user document through a Redis
					cache.
				</desc>
				<defs>
					<marker
						id="iam-arrow"
						viewBox="0 0 10 10"
						refX={8}
						refY={5}
						markerWidth={7}
						markerHeight={7}
						orient="auto-start-reverse"
					>
						<path d="M0 0 L10 5 L0 10 z" className="fill-teal-500" />
					</marker>
				</defs>

				{/* Row 1: client import */}
				<text x={20} y={22} fontSize={11} letterSpacing="0.15em" className="fill-teal-600 font-mono dark:fill-teal-400">
					CLIENT IMPORT
				</text>
				<Box x={20} y={36} title="Salesforce" sub="Client records" />
				<Box x={270} y={36} title="Kafka topic" sub="Client + metadata updates" />
				<Box x={520} y={36} title="Ingestion consumer" sub="$push groups / portfolios" />
				<Box x={770} y={36} title="IAM NoSQL DB" sub="User-centric docs" />
				<path d="M194 68 H266" strokeWidth={1.5} markerEnd="url(#iam-arrow)" className={arrow} />
				<path d="M444 68 H516" strokeWidth={1.5} markerEnd="url(#iam-arrow)" className={arrow} />
				<path d="M694 68 H766" strokeWidth={1.5} markerEnd="url(#iam-arrow)" className={arrow} />

				{/* Row 2: authenticated access */}
				<text x={20} y={222} fontSize={11} letterSpacing="0.15em" className="fill-teal-600 font-mono dark:fill-teal-400">
					AUTHENTICATED ACCESS
				</text>
				<Box x={20} y={236} title="IAM frontend" sub="React + TypeScript" />
				<Box x={270} y={236} title="OKTA" sub="OAuth 2.0 · role check" />
				<Box x={520} y={236} title="IAM backend" sub="Role + membership check" />
				<Box x={770} y={236} title="Redis cache" sub="Compiled user access doc" dashed />
				<path d="M194 268 H266" strokeWidth={1.5} markerEnd="url(#iam-arrow)" className={arrow} />
				<Label x={230} y={258}>sign in</Label>
				<path d="M444 268 H516" strokeWidth={1.5} markerEnd="url(#iam-arrow)" className={arrow} />
				<Label x={480} y={258}>token + role</Label>
				<path d="M694 268 H766" strokeWidth={1.5} markerEnd="url(#iam-arrow)" className={arrow} />
				<Label x={730} y={258}>read</Label>
				<path d="M855 232 V104" strokeWidth={1.5} markerEnd="url(#iam-arrow)" className={arrow} />
				<text x={845} y={172} textAnchor="end" fontSize={10} className="fill-gray-500 dark:fill-gray-400">
					1 query on cache miss
				</text>
			</svg>
		</div>
	);
}
