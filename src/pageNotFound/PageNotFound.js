import useDocumentTitle from "../assets/useDocumentTitle"

function PageNotFound() {
	useDocumentTitle("Page Not Found")

	return (
		<div>
			<h1>Page Not Found</h1>
			<h3>404</h3>
			<br />
			<a href="/">Get to home</a>
		</div>
	)
}

export default PageNotFound