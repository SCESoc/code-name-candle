import React from 'react'
import Image from 'next/image'

interface Props {
	name: string
}

export const Avatar = ({ name }: Props) => {
	return (
		<Image src={`https://avatars.dicebear.com/api/bottts/${name}.svg`} alt="Avatar" height={40} width={40} className='h-10 w-10 rounded-full' />
	)
}
