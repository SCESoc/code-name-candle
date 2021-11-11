import React, { ReactElement } from 'react'

interface Props {
	children: ReactElement
}

export default function Body({ children }: Props): ReactElement {
	return (
		<main className='w-full md:flex flex-grow md:self-center max-w-full md:max-w-screen-xl px-5 md:px-0'>
			{children}
		</main>
	)
}
