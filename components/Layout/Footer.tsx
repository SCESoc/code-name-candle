import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Props {

}

export default function Footer({ }: Props): ReactElement {
	return (
		<footer className='flex justify-center px-4 py-10'>
			<div className='flex flex-1 justify-center max-w-screen-xl space-x-7'>
				<FooterLinkItem href='https://www.scesoc.ca/'>SCESoc</FooterLinkItem>
				<FooterLinkItem href='https://makers.scesoc.ca/'>Makers Club</FooterLinkItem>
				<FooterLinkItem href='https://www.scesoc.ca/discord/'>Discord</FooterLinkItem>
				<FooterLinkItem href='https://github.com/SCESoc/code-name-candle'>Github</FooterLinkItem>
			</div>
		</footer>
	)
}

interface FooterLinkProps {
	href: string
	children: string
}

function FooterLinkItem({ href, children }: FooterLinkProps): ReactElement {
	return (
		<li className='flex'>
			<a target="_blank" rel="noreferrer" href={href} className='self-center text-sm md:text-lg font-bold pt-2 uppercase'>{children}</a>
		</li>
	)
}
