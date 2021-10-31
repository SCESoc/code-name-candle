import marked from 'https://cdn.skypack.dev/marked';
import hljs from 'https://cdn.skypack.dev/highlight.js';

export async function getAllArticleData() {
	const response = await fetch(
		'http://localhost:5000/articles/'
	);
	const fileNames = await response.json();
	if (fileNames) {
		return fileNames.map((fileName: string) => {
			return fileName.replace(/\.md$/, "")
			// return {
			// 	params: {
			// 		id: fileName.replace(/\.mdx$/, ""),
			// 	},
			// };
		});
	}
	return [
		// {
		// 	params: {
		// 		id: "",
		// 	},
		// },
	];
}

export async function getAllArticleIds() {
	const response = await fetch(
		'http://localhost:5000/articles/'
	);
	const fileNames = await response.json();
	if (fileNames) {
		return fileNames.map((fileName: string) => {
			return {
				params: {
					slug: fileName.replace(/\.md$/, ""),
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
		'http://localhost:5000/articles/' + id + '.md'
	);
	const markdown = await rawContent.text();

	marked.setOptions({
		highlight: function (code: any, language: any) {
			return hljs.highlight(code, { language }).value;
		},
	});

	return marked(markdown);
}
