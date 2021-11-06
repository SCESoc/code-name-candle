import { GetStaticProps, NextPage } from 'next';
import React, { ReactElement } from 'react'
import Link from 'next/link'
import { getAllArticleData } from '@lib/articles';
import Layout from '@components/Layout';
import { ArticleData } from 'types/article';
import { ArticleItem } from '@components/Items/ArticleItem';

interface Props {
  articles: ArticleData[];
}

const Home: NextPage<Props> = ({ articles }: Props) => {
  return (
    <Layout>
      <div className='w-full'>
        <section className='my-28'>
          <h1 className='self-center text-center text-8xl font-black'>A Platform to Share Knowledge</h1>
        </section>
        <section className='my-28'>
          <h1 className='text-5xl font-bold'>Articles</h1>
          <div className='mt-10 flex flex-wrap justify-around'>
            {articles.map((article: ArticleData) => (
              <ArticleItem key={article.id} article={article} />
            ))}
          </div>
        </section>
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

export default Home;