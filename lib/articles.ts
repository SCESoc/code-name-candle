import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import readingTime from "reading-time";
import { bundleMDX } from "mdx-bundler";
import { ArticleData, ArticleMatterData } from 'types/article';

export async function getAllArticleData() {
	const response = await fetch(
		'http://localhost:5000/articles/'
	);
	const articles = await response.json();
	if (articles) {
		return articles;
	}
	return [
		{
			params: {
				id: "",
			},
		},
	];
}

export async function getAllArticleIds() {
	const response = await fetch(
		'http://localhost:5000/articles/'
	);
	const articles = await response.json();
	if (articles) {
		return articles.map((article: ArticleData) => {
			return {
				params: {
					slug: article.id,
				},
			};
		});
	}
	return [
		{
			params: {
				slug: "",
			},
		},
	];
}

export async function getArticle(id: string): Promise<ArticleMatterData> {
	const rawContent = await fetch(
		'http://localhost:5000/articles/' + id + '.mdx'
	);
	let markdown = await rawContent.text();

	const { code, frontmatter } = await bundleMDX(markdown, {
		xdmOptions(options) {
			options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
			options.rehypePlugins = [
				...(options?.rehypePlugins ?? []),
				rehypeSlug,
				rehypeCodeTitles,
				rehypePrism,
				[
					rehypeAutolinkHeadings,
					{
						properties: {
							className: ["anchor"],
						},
					},
				],
			];
			return options;
		},
	});

	return {
		id,
		contentHtml: code,
		readingTime: readingTime(markdown),
		...(frontmatter as {
			publishedAt: string;
			updatedAt: string;
			title: string;
			image: string;
			description: string;
			tags: string[];
			author: string;
		}),
	};
}
