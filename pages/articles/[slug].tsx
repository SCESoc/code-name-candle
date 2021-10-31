import Layout from '@components/Layout';
import { getAllArticleIds, getArticle } from '@lib/articles';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ReactElement } from 'react'

interface Props {
	article: string
}

export default function Article({ article }: Props): ReactElement {
	return (
		<Layout>
			<div dangerouslySetInnerHTML={{ __html: article }} />
		</Layout>
	)
}

interface Params extends ParsedUrlQuery {
	id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const paths = await getAllArticleIds();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
	params,
}) => {
	const articleData = await getArticle(params!.slug as string);
	return {
		props: {
			article: articleData,
		},
	};
};