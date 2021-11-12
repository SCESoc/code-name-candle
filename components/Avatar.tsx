import React from 'react'
import Image from 'next/image'

interface Props {
	name: string
	size?: number
}

export const Avatar = ({ name, size = 40 }: Props) => {
	return (
		<Image src={`https://avatars.dicebear.com/api/bottts/${name}.svg`} alt="Avatar" height={size} width={size} className='h-10 w-10 rounded-full' />
	)
}
