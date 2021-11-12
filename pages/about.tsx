import Layout from '@components/Layout'
import { NextPage } from 'next'
import React from 'react'

interface Props {

}

const About: NextPage<Props> = (props: Props) => {
	return (
		<Layout>
			<div className="flex flex-1 justify-center my-10">
				<div className='prose lg:prose-xl dark:prose-light max-w-4xl'>
					<h1>About</h1>
					<p>
						Torch is an platform created by
						&nbsp;<a target='_blank' rel="noreferrer" href='https://www.scesoc.ca/' >SCESoc</a>&nbsp;
						to encourage knowledge sharing among peers in
						&nbsp;<a target='_blank' rel="noreferrer" href='https://carleton.ca/' >Carleton University</a>.
						Carleton University has so many amazing minds learning and growing every day of the year. Sharing knowledge among
						such peers can lead to amplified inspiration, growth and collaboration. You learn best by teaching, let this
						application be a platform for us to learn by educating each other.
					</p>
					<h2>How can you contribute?</h2>
					<p>
						This website surfaces knowledge stored in the
						&nbsp;<a target='_blank' rel="noreferrer" href='https://github.com/SCESoc/knowledge-base' >Knowledge-Base GitHub repository</a>. You can add content to this website by
						contributing to this repository, creating a pull request with your files, or by emailing your files to us at <a href='mailto: academic@scesoc.ca'>academic@scesoc.ca</a>.
						Read bellow for more information on what we support and what your files should include.
					</p>
					<h2>What we support?</h2>
					<p>
						Currently we only support articles written in the <a target='_blank' rel="noreferrer" href='https://www.markdownguide.org/getting-started/' >Markdown(.md/.mdx)</a> file format. Eventually we plan to support interactive tutorials,
						challenges, courses, and more. If you are not familiar with Markdown or Github, that is okay, you can send us a word document instead. We will try
						our best to convert it. Make sure you include the following in the articles you submit:
						<ul>
							<li>Your Name to display on the article</li>
							<li>Date of Publication</li>
							<li>A short description of the article</li>
							<li>A cover image for your article</li>
							<li>Tags to include</li>
						</ul>
					</p>
					<h2>Got an idea, feedback or question? Reach out to us!</h2>
					<p>
						Either email us at <a href='mailto: academic@scesoc.ca'>academic@scesoc.ca</a> or reach out to us on Discord!
					</p>
				</div>
			</div>
		</Layout>
	)
}

export default About;
