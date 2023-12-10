// Change this component to work on json links (Dynamic), so that it can be used in other areas too like: Present all 'Certificates'
import { Fragment } from 'react';
import { FiDownload } from "react-icons/fi";
import cvPreview from '../../images/Resume_CV/cvPreviewImage.jpeg';
import UjjwalCV from '../../images/Resume_CV/ujjwal_Pandey_C_V.pdf';
import previewCSS from './previews.module.css';

export default function PreviewPDFs(props) {
	return (
		<Fragment>
			<section id="previews" className={previewCSS.previewsFullPage} onClick={() => props.viewPreview(false)}>
				<div className={previewCSS.previewSection} onClick={(e) => e.stopPropagation()}>
					<div className={previewCSS.eachPreview}>
						<img className={previewCSS.previewImage} src={cvPreview} alt="C.V. preview" />
						<div className={previewCSS.downloadCV}>
							<a className={previewCSS.downloadCV} href={UjjwalCV} download="_Ujjwal-full_stack-C.V.pdf">Download C.V</a><FiDownload />
						</div>
					</div>
					<div className={previewCSS.closeBtn} onClick={() => props.viewPreview(false)}>X</div>
				</div>
			</section>
		</Fragment >
	)
}