import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { CoverImage } from '~/components/CoverImage';
import { getPostBySlug } from '~/data/blog-posts';

export async function loader({ params }: LoaderFunctionArgs) {
	const post = getPostBySlug(params.slug ?? '');
	if (!post) {
		throw new Response('Not Found', { status: 404 });
	}
	return json({ post });
}

function formatDate(dateStr: string) {
	return new Date(dateStr).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}

export default function BlogPostPage() {
	const { post } = useLoaderData<typeof loader>();

	return (
		<div className="pt-6 pb-16">
			<Link
				to="/blog"
				className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="w-4 h-4"
					aria-hidden="true"
				>
					<path
						fillRule="evenodd"
						d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
						clipRule="evenodd"
					/>
				</svg>
				Back to Blog
			</Link>

			<article className="mt-8">
				<div className="rounded-2xl overflow-hidden">
					<CoverImage
						gradient={post.gradient}
						iconPath={post.iconPath}
						className="h-52 sm:h-64 md:h-80"
					/>
				</div>

				<header className="mt-8 pb-8 border-b border-gray-200 dark:border-gray-700 space-y-4">
					<div className="space-y-3">
						<div className="flex flex-wrap gap-2">
							{post.tags.map((tag) => (
								<span
									key={tag}
									className="inline-block rounded-full border border-teal-500 px-3 py-1 text-xs font-medium text-teal-600 dark:text-teal-400"
								>
									{tag}
								</span>
							))}
						</div>
						<h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
							{post.title}
						</h1>
					</div>

					<div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
						<time dateTime={post.date}>{formatDate(post.date)}</time>
						<span aria-hidden="true">&middot;</span>
						<span>{post.readTime}</span>
						<span aria-hidden="true">&middot;</span>
						<span>Palak Shah</span>
					</div>
				</header>

				<div
					className="prose prose-lg max-w-none dark:prose-invert mt-10
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed
            prose-a:text-teal-500 prose-a:no-underline hover:prose-a:text-teal-600
            prose-code:text-teal-600 dark:prose-code:text-teal-400
            prose-code:bg-gray-100 dark:prose-code:bg-gray-800
            prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal"
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
			</article>
		</div>
	);
}
