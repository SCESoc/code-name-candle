import React, { ReactElement } from 'react'
import Link from 'next/link'

interface Props {
	href: string
	children: string
}

export default function NavBarItem({ href, children }: Props): ReactElement {
	return (
		<li>
			<Link href={href}>
				<a>{children}</a>
			</Link>
		</li>
	)
}
