import React from 'react'

interface Props {
	children: string
}

export const TagItem = ({ children }: Props) => {
	return (
		<span key={children} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
			{children}
		</span>
	)
}
