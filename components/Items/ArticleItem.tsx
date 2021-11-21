import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { ArticleData } from 'types/article'
import { TagItem } from './TagItem'
import { Avatar } from '@components/Avatar'
import Date from '@components/Formatters/Date'

interface Props {
	article: ArticleData
}

export const ArticleItem = ({ article }: Props) => {
	return (
		<Link key={article.id} href={'/articles/' + article.id}>
			<a className='m-5'>
				<div className='bg-transparent w-96 h-[568px] p-5 border-2 border-gray-700 dark:border-gray-200 rounded-2xl flex flex-col space-y-5'>
					<Image className='rounded-2xl' src={article.image} objectFit='cover' height={200} width={384} alt={article.title} />
					<h2 className='line-clamp-2 text-2xl font-semibold'>{article.title}</h2>
					<div className='flex-grow'>
						<p className='line-clamp-5 text-gray-600 dark:text-gray-300 text-md'>{article.description}</p>
					</div>
					<div className='flex flex-nowrap overflow-x-auto'>
						{article.tags.map((tag) => (
							<TagItem key={tag}>{tag}</TagItem>
						))}
					</div>
					<div className='flex justify-between'>
						<div className='flex space-x-2'>
							<Avatar name={article.author} />
							<span>
								<div className='line-clamp-1 text-gray-600 dark:text-gray-300 text-sm'>{article.author}</div>
								<div className='text-gray-600 dark:text-gray-300 text-sm'><Date dateString={article.publishedAt} /></div>
							</span>
						</div>
						<span className='line-clamp-1 text-gray-600 dark:text-gray-300 text-sm self-center min-w-max'>{article.readingTime.text}</span>
					</div>
				</div>
			</a>
		</Link>
	)
}
