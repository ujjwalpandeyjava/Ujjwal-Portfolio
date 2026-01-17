export default function HighlightBlock({ heading, text1, text2 }) {
	return (
		<div className="mission-highlight">
			<div className="highlight-text">
				<h3>{heading}</h3>
				<p>{text1}</p>
				{text2 && <p>{text2}</p>}
			</div>
		</div>
	);
}