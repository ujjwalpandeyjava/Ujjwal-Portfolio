// Change this component to work on json links (Dynamic), so that it can be used in other areas too like: Present all 'Certificates'
import { Fragment } from 'react';
import PDFViewer from '../../document/PDFViewer';
import previewCSS from './previews.module.css';

export default function PreviewPDFs(props) {
	const closeBtnHandler = (event) => {
		event.preventDefault();
		event.stopPropagation();
		console.log(event.currentTarget);
		props.viewPreview(false)
	}
	return (
		<Fragment>
			<section id="previews" className={previewCSS.previewsFullPage} onClick={(e) => closeBtnHandler(e)}>
				<div className={previewCSS.previewSection} onClick={(e) => e.stopPropagation()}>
					<PDFViewer />
					<div className={previewCSS.closeBtn} onClick={() => props.viewPreview(false)}>X</div>
				</div>
			</section>
		</Fragment >
	)
}