import "@/styles/headings.scss";

function DuoToneHeading({
	txt1, txt1Color, txt1LineBreak,
	txt2, txt2Color, txt2LineBreak,
	txt3, txt3Color, txt3LineBreak
}) {
	// Helper to generate styles and handle line breaks
	const getPartStyle = (color, shouldBreak) => {
		let style = { display: shouldBreak ? 'block' : 'inline-block' };
		if (color)
			style.color = color;
		return style;
	};

	return (
		<h2 className="main-title">
			{txt1 && <span style={getPartStyle(txt1Color, txt1LineBreak)}>{txt1}&nbsp;</span>}
			{txt2 && <span className="highlight" style={getPartStyle(txt2Color, txt2LineBreak)}>{txt2}&nbsp;</span>}
			{txt3 && <span style={getPartStyle(txt3Color, txt3LineBreak)}>{txt3}</span>}
		</h2>
	);
}

function HeadingUnderLine({ txt, txtClass }) {
	return (
		<h1 className={`main-title-2 ${txtClass ? txtClass : ""}`}>
			{txt}
		</h1>
	);
}

function HeadingHalfUnderLine({ txt }) {
	return (
		<h1 className="main-title-half-underline">
			{txt}
		</h1>
	);
}

function HighlightBlock({ heading, text1, text2 }) {
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

export { DuoToneHeading, HeadingUnderLine, HeadingHalfUnderLine, HighlightBlock }