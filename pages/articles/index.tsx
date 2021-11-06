import { GetStaticProps } from 'next';
import React, { ReactElement } from 'react'
import Link from 'next/link'
import { getAllArticleData } from '@lib/articles';
import Layout from '@components/Layout';
import { ArticleData } from 'types/article';

interface Props {
	articles: ArticleData[];
}

export default function index({ articles }: Props): ReactElement {
	return (
		<Layout>
			<div>
				{articles.map((article: ArticleData) => (
					<div key={article.id}>
						<Link href={'/articles/' + article.id}>{article.title}</Link>
					</div>
				))}
			</div>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async ({
	params,
}) => {
	const articles = await getAllArticleData();
	return {
		props: {
			articles: articles,
		},
	};
};
