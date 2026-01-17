import '@/styles/blockContainer.scss';

// margin = ["mt", "mb", "ml", "mr"]
const BlockContainer = ({ element = "div", children, className, margin = [] }) => {
	const Element = element;
	return (
		<Element className={`block-container ${className ?? ""} ${margin.join(" ")}`}>
			{children}
		</Element>
	);
}

export default BlockContainer;
