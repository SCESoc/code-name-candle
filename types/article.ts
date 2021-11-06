export type ArticleData = {
	id: string;
	title: string;
	file: string;
	url: string;
	publisedAt: string;
	updatedAt: string;
	tags: string[];
	readTime: ReadingTime;
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