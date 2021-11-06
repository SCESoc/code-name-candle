export type ArticleData = {
	id: string;
	title: string;
	file: string;
	url: string;
	publishedAt: string;
	updatedAt: string;
	tags: string[];
	readingTime: ReadingTime;
	image: string;
	description: string;
	author: string,
	contentHtml: string;
};

export type ReadingTime = {
	text: string;
	minutes: number;
	time: number;
	words: number;
}