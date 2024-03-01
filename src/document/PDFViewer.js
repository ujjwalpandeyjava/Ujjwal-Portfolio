import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import style from './PDFViewer.module.css';
import pdfFile from '../images/Resume_CV/ujjwalpandey_CV_SDE-II.pdf';

// https://github.com/wojtekmaj/react-pdf#support-for-annotations
// https://drive.google.com/file/d/1pBi221O_ccRc2Eg9UUKaUZt_yLIzjQV1/view?usp=sharing

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.js",
	import.meta.url
).toString();

export default function PDFViewer() {
	// const fileUrl = 'https://drive.google.com/uc?id=1pBi221O_ccRc2Eg9UUKaUZt_yLIzjQV1';
	const [numPages, setNumPages] = useState(1);
	const [pageNumber, setPageNumber] = useState(1);
	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};
	const goToPrevPage = () => {
		setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
	};
	const goToNextPage = () => {
		setPageNumber(prevPageNumber =>
			Math.min(prevPageNumber + 1, numPages)
		);
	};
	return (
		<div className={style.pdfSection}>
			<div className={style.heading}>Ujjwal Pandey Resume</div>
			<PDF file={pdfFile} onDocumentLoadSuccess={onDocumentLoadSuccess} pageNumber={pageNumber} /> {/* if file in public folder*/}
			{/* <PDF file="../images/Resume_CV/ujjwalpandey_CV_SDE-II.pdf" /> */}
			<div className={style.pdfPageNavCont}>
				<nav className={style.pdfPageNav}>
					<button onClick={goToPrevPage}><MdNavigateBefore /> Prev</button>
					<span>Page {pageNumber} of {numPages}</span>
					<button onClick={goToNextPage}>Next <MdNavigateNext /></button>
				</nav>
				<DownloadCVButton pdfFile={pdfFile} text="Download C.V." />
			</div>
		</div>
	);
};
function DownloadCVButton({ pdfFile, extraStyle, text, extraText }) {
	return (
		<>
			<div className={style.downloadCV} style={extraStyle}>
				<a className={style.downloadCV} href={pdfFile} download="_Ujjwal-full_stack-C.V.pdf">{text}</a><FiDownload />
			</div>
			{<p>{extraText}</p> || ""}
		</>
	)
}

function PDF({ file, onDocumentLoadSuccess, pageNumber }) {
	return (
		<div className={style.page}>
			<div className={style.doc} >
				<Document file={file + "d"} onLoadSuccess={onDocumentLoadSuccess} error={<DownloadCVButton extraStyle={{ marginBlock: "8px" }} pdfFile={pdfFile} text="Download C.V." extraText="Browser not supported, please Download PDF!" />}>
					<Page pageNumber={pageNumber} renderTextLayer={false} />
				</Document>
			</div>
		</div>
	);
};
