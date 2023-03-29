import React, { Fragment } from 'react';
import previewCSS from './previews.module.css';
import downArrow2 from './images/arrow-down.png';
import UjjwalResume from './images/Resume_CV/fresher/Ujjwal_Pandey_Resume.pdf';
import cvPreview from './images/Resume_CV/fresher/cvPreviewImage.png';
import resumePreview from './images/Resume_CV/fresher/resumePreviewImage.png';
import UjjwalCV from './images/Resume_CV/fresher/Ujjwal_Pandey_C_V.pdf';

// import UjjwalResume_Experienced from './images/Resume_CV/1.5yr/ujjwal_Pandey_Resume.pdf';
// import resumePreview_Experienced from './images/Resume_CV/1.5yr/resumePreviewImage.png';
// import UjjwalCV_Experienced from './images/Resume_CV/1.5yr/ujjwal_Pandey_C_V.pdf';
// import cvPreview_Experienced from './images/Resume_CV/1.5yr/cvPreviewImage.png';

// Change it to dynamic so that I can use it with other certificates also...

export default function PreviewPDFs(props) {
	return (
		<Fragment>
			<div id="previews" className={previewCSS.previewsFullPage} onClick={() => props.viewPreview(false)}>
				<div className={previewCSS.previewssection} onClick={(e) => e.stopPropagation()}>
					<div className={previewCSS.closeBtn} onClick={() => props.viewPreview(false)}>X</div>
					<div>
						<div><img className={previewCSS.previewImage} src={resumePreview} alt="Resume preview" /></div>
						<div>Resume in pdf format <img src={downArrow2} style={{ height: '18px', width: '20px' }} alt="Down arrow" /></div>
						<div id="downloadCV"><a href={UjjwalResume} download='Ujjwal-full_stack-Resume.pdf'>Download Resume</a></div>
					</div>
					{/* <hr style={{ backgroundColor: 'gray' }} /> */}
					<div>
						<div><img className={previewCSS.previewImage} src={cvPreview} alt="C.V. preview" /></div>
						<div></div>
						<div>C.V. in pdf format <img src={downArrow2} style={{ height: '18px', width: '20px' }} alt="Down arrow" /></div>
						<div id="downloadCV"><a href={UjjwalCV} download='Ujjwal-full_stack-C.V.pdf'>Download C.V</a></div>
					</div>
				</div>
			</div>
		</Fragment >
	)
}