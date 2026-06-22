import { Link } from '@remix-run/react';
import { CoverImage } from '~/components/CoverImage';
import { blogPosts, type BlogPost } from '~/data/blog-posts';

function formatDate(dateStr: string) {
	return new Date(dateStr).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}

function BlogCard({ post }: { post: BlogPost }) {
	return (
		<li className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-200">
			<Link to={`/blog/${post.slug}`} className="block flex-shrink-0" tabIndex={-1} aria-hidden="true">
				<CoverImage gradient={post.gradient} iconPath={post.iconPath} className="h-48" />
			</Link>

			<div className="flex flex-col flex-1 p-6 gap-3">
				<div className="flex flex-wrap gap-1.5">
					{post.tags.map((tag) => (
						<span
							key={tag}
							className="inline-block rounded-full border border-teal-500 px-2.5 py-0.5 text-xs font-medium text-teal-600 dark:text-teal-400"
						>
							{tag}
						</span>
					))}
				</div>

				<h2 className="text-lg font-bold leading-snug text-gray-900 dark:text-gray-100 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
					<Link to={`/blog/${post.slug}`}>{post.title}</Link>
				</h2>

				<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 line-clamp-3">
					{post.summary}
				</p>

				<div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700/60">
					<span className="text-xs text-gray-400 dark:text-gray-500">
						{formatDate(post.date)} &middot; {post.readTime}
					</span>
					<Link
						to={`/blog/${post.slug}`}
						className="text-sm font-medium text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
						aria-label={`Read "${post.title}"`}
					>
						Read &rarr;
					</Link>
				</div>
			</div>
		</li>
	);
}

const BlogIndexPage = () => {
	return (
		<div className="divide-y divide-gray-200 dark:divide-gray-700">
			<div className="space-y-2 pt-6 pb-8 md:space-x-5">
				<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
					Blog
				</h1>
				<p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
					Thoughts on frontend engineering, architecture, and building products at scale.
				</p>
			</div>

			<ul className="py-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{blogPosts.map((post) => (
					<BlogCard key={post.slug} post={post} />
				))}
			</ul>
		</div>
	);
};

export default BlogIndexPage;
