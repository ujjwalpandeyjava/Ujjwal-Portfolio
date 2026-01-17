import "@/styles/duoToneHeading.scss";

export default function DuoToneHeading({
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