import Layout from '@components/Layout';
import { getAllArticleIds, getArticle } from '@lib/articles';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image'
import { ParsedUrlQuery } from 'querystring';
import { ReactElement } from 'react'
import { ArticleData } from 'types/article';

interface Props {
	article: ArticleData
}

export default function Article({ article }: Props): ReactElement {
	return (
		<Layout>
			<article className="prose lg:prose-xl max-w-4xl">
				<div className='text-center'>
					<p className='flex justify-center space-x-5'>
						<span>{article.author}</span>
						<span>{article.publishedAt}</span>
						<span>{article.readingTime.text}</span>
					</p>
					<h1>{article.title}</h1>
					<p>{article.description}</p>
				</div>
				<Image src={article.image} width={896} height={500} objectFit='cover' alt="Cover picture"></Image>
				<div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
			</article>
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
	console.log(articleData);
	return {
		props: {
			article: articleData,
		},
	};
};