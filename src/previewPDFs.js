import { Fragment } from "react/cjs/react.production.min";
import UjjwalResume from './Ujjwal_Pandey_Resume.pdf'
import UjjwalCV from './Ujjwal_Pandey_C_V.pdf'
import previewCSS from './previews.module.css'
import resumePreview from './images/resumePreviewImage.png'
import cvPreview from './images/cvPreviewImage.png'
import downArrow2 from './images/arrow-down.png'

// Change it to dymanic so that I can use it with other certificates also...

export default function PreviewPDFs(props) {
	// console.log(props);	
	// document.getElementById("stopClick").removeAttribute('onclick')
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