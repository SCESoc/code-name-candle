import { GetStaticProps } from 'next';
import React, { ReactElement } from 'react'
import Link from 'next/link'
import { getAllArticleData } from '@lib/articles';
import Layout from '@components/Layout';
import { Article } from 'types/article';

interface Props {
	articles: Article[];
}

export default function index({ articles }: Props): ReactElement {
	return (
		<Layout>
			<div>
				{articles.map((article: Article) => (
					<Link href={'/articles/' + article.id} key={article.id}>{article.title}</Link>
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
