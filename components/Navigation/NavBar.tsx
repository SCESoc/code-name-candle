import React, { ReactElement } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavBarItem from './NavBarItem'
import ThemeToggle from '@components/ThemeToggle'

interface Props {

}

export default function NavBar({ }: Props): ReactElement {
	return (
		<nav className='bg-green-600 flex justify-center p-4'>
			<div className='flex flex-1 justify-between max-w-screen-xl'>
				<Link href='/'><a className='flex align-middle'>
					<Image src='/torch.png' height={40} width={40} objectFit='contain' alt='logo' />
					<span className='text-2xl font-black pt-2'>Torch</span>
				</a></Link>
				<ul className='space-x-5 flex'>
					<NavBarItem href='/'>Home</NavBarItem>
					<NavBarItem href='/about'>About</NavBarItem>
				</ul>
				<ThemeToggle />
			</div>
		</nav>
	)
}
