
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
						rel="stylesheet"
					/>
				</Head>
				<body className='bg-[#fbfbfb] dark:bg-[#1b1b33] text-[#151515] dark:text-[#fbfbfb] transform duration-100'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument