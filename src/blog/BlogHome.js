import BlogHomeCSS from './BlogHome.module.css';

function BlogHome() {
	return (
		<div>
			<h1>BlogHome</h1>
			<section>
				<div className={BlogHomeCSS.eachBlogPreview}>
					Each Blog Preview
				</div>
				<div className={BlogHomeCSS.eachBlogPreview}>
					Each Blog Preview
				</div>
			</section>
		</div>
	)
}

export default BlogHome