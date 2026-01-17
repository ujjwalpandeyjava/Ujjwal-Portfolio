import '@/styles/tag.scss';

const Tag = ({ c = "white", children }) => {
	return (
		<div className={`tag ${c}`}>{children}</div>
	);
};
export default Tag;