// Change this component to work on json links (Dynamic), so that it can be used in other areas too like: Present all 'Certificates'
import React, { Fragment } from 'react';
import cvPreview from './images/Resume_CV/cvPreviewImage.jpeg';
import UjjwalCV from './images/Resume_CV/ujjwal_Pandey_C_V.pdf';
import downArrow2 from './images/arrow-down.png';
import previewCSS from './previews.module.css';

export default function PreviewPDFs(props) {
	return (
		<Fragment>
			<div id="previews" className={previewCSS.previewsFullPage} onClick={() => props.viewPreview(false)}>
				<div className={previewCSS.previewssection} onClick={(e) => e.stopPropagation()}>
					<div className={previewCSS.closeBtn} onClick={() => props.viewPreview(false)}>X</div>
					{/* <div>
						<div><img className={previewCSS.previewImage} src={resumePreview} alt="Resume preview" /></div>
						<div>Resume in pdf format <img src={downArrow2} style={{ height: '18px', width: '20px' }} alt="Down arrow" /></div>
						<div className="downloadCV"><a href={UjjwalResume} download='_Ujjwal-full_stack-Resume.pdf'>Download Resume</a></div>
					</div> */}
					<div style={{minWidth: "300px"}}>
						<div><img className={previewCSS.previewImage} src={cvPreview} alt="C.V. preview" /></div>
						<div></div>
						<div>C.V. in pdf format <img src={downArrow2} style={{ height: '18px', width: '20px' }} alt="Down arrow" /></div>
						<div className="downloadCV"><a href={UjjwalCV} download="_Ujjwal-full_stack-C.V.pdf">Download C.V</a></div>
					</div>
				</div>
			</div>
		</Fragment >
	)
}