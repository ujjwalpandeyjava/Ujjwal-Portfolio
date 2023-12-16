import { useEffect } from "react"

function BlogHome() {
	useEffect(() => {
		document.title = "Blogs by Ujjwal Pandey"
	}, [])
	return (
		<div>
			<h1>Blog - Insights and Musings</h1>
			<section>
				<br />
				<br />
				<i><h1>Coming soon</h1></i>
				{/* <div className={BlogHomeCSS.eachBlogPreview}>
					Each Blog Preview
				</div>
				<div className={BlogHomeCSS.eachBlogPreview}>
					Each Blog Preview
				</div> */}
			</section>
		</div>
	)
}

export default BlogHome