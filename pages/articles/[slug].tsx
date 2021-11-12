import Layout from '@components/Layout';
import { getAllArticleIds, getArticle } from '@lib/articles';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ReactElement, useMemo } from 'react'
import { getMDXComponent } from "mdx-bundler/client";
import { ArticleMatterData } from 'types/article';
import { ArticleImage } from "@components/ArticleImage";
import components from "@components/MDXComponents";

interface Props {
	article: ArticleMatterData
}

export default function Article({ article }: Props): ReactElement {
	const Component = useMemo(
		() => getMDXComponent(article.contentHtml),
		[article.contentHtml]
	);

	return (
		<Layout>
			<div className="flex flex-1 justify-center my-10">
				<article className="prose lg:prose-xl dark:prose-light max-w-4xl">
					<div className='text-center'>
						<p className='flex justify-center space-x-5'>
							<span>{article.author}</span>
							<span>{article.publishedAt}</span>
							<span>{article.readingTime.text}</span>
						</p>
						<h1>{article.title}</h1>
						<p>{article.description}</p>
					</div>
					<ArticleImage
						src={article.image}
						alt={`${article.title} Cover`}
						width={896}
						height={500}
						priority={true}
						objectFit="cover"
					/>
					<Component
						className="my-10 leading-relaxed"
						components={components}
					/>
				</article>
			</div>
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