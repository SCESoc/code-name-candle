import React, { ReactElement } from 'react'
import Link from 'next/link'

interface Props {
	href: string
	children: string
}

export default function NavBarItem({ href, children }: Props): ReactElement {
	return (
		<li className='flex'>
			<Link href={href}>
				<a className='self-center text-md font-extrabold pt-2 uppercase'>{children}</a>
			</Link>
		</li>
	)
}
