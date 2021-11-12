import React, { ReactElement } from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'

interface Props {
	href: string
	children: string
}

export default function NavBarItem({ href, children }: Props): ReactElement {
	const router = useRouter();
	const isActive = router.asPath === href;

	return (
		<li className='flex'>
			<Link href={href}>
				<a className={`self-center text-md font-semibold pt-2 uppercase
				${isActive
						? " font-extrabold"
						: " font-semibold text-gray-200"
					}
				`}>{children}</a>
			</Link>
		</li>
	)
}
