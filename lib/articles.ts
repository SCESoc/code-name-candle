import marked from 'https://cdn.skypack.dev/marked';
import hljs from 'https://cdn.skypack.dev/highlight.js';
import { Article } from 'types/article';

export async function getAllArticleData() {
	const response = await fetch(
		'http://localhost:5000/articles/'
	);
	const articles = await response.json();
	if (articles) {
		return articles.map((article: Article) => {
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
		return articles.map((article: Article) => {
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

export async function getArticle(id: string): Promise<string> {
	const rawContent = await fetch(
		'http://localhost:5000/articles/' + id + '.mdx'
	);
	const markdown = await rawContent.text();

	marked.setOptions({
		highlight: function (code: any, language: any) {
			return hljs.highlight(code, { language }).value;
		},
	});

	return marked(markdown);
}
