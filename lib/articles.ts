import marked from 'https://cdn.skypack.dev/marked';
import hljs from 'https://cdn.skypack.dev/highlight.js';
import { ArticleData } from 'types/article';

export async function getAllArticleData() {
	const response = await fetch(
		'http://localhost:5000/articles/'
	);
	const articles = await response.json();
	if (articles) {
		return articles.map((article: ArticleData) => {
			// return fileName.replace(/\.md$/, "")
			return {
				...article
			};
		});
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

export async function getArticle(id: string): Promise<ArticleData> {
	const rawContent = await fetch(
		'http://localhost:5000/articles/' + id + '.mdx'
	);
	let markdown = await rawContent.text();

	markdown = markdown.replace(/^---$.*^---$/ms, '')

	const response = await fetch(
		'http://localhost:5000/articles/'
	);

	const articles = await response.json()
	const article = articles.find((article: ArticleData) => {
		if (article.id === id) {
			return article;
		}
	});

	marked.setOptions({
		highlight: function (code: any, language: any) {
			return hljs.highlight(code, { language }).value;
		},
	});

	return {
		contentHtml: marked(markdown),
		...article,
	}
}
