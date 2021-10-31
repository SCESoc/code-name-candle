import { GetStaticProps } from 'next';
import React, { ReactElement } from 'react'
import Link from 'next/link'
import { getAllArticleData } from '@lib/articles';
import Layout from '@components/Layout';

interface Props {
	articles: any;
}

export default function index({ articles }: Props): ReactElement {
	return (
		<Layout>
			<div>
				{articles.map((article: any) => (
					<Link href={'/articles/' + article} key={article}>{article}</Link>
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
