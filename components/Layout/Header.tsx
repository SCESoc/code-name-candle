import { ReactElement } from 'react'
import NavBar from "@components/Navigation/NavBar";

interface Props {

}

export default function Header({ }: Props): ReactElement {
	return (
		<header>
			<NavBar />
		</header>
	)
}
