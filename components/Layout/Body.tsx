import React, { ReactElement } from 'react'

interface Props {
	children: ReactElement
}

export default function Body({ children }: Props): ReactElement {
	return (
		<main className='bg-gray-100 w-full flex-grow flex self-center max-w-4xl'>
			{children}
		</main>
	)
}
