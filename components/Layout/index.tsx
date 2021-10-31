import { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

interface Props {
	children: ReactElement;
}

export default function Layout({ children }: Props) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Body>{children}</Body>
			<Footer />
		</div>
	);
}