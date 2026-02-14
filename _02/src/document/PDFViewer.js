import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Document, Page, pdfjs } from "react-pdf";
import useDocumentTitle from "../assets/useDocumentTitle";
import { FiDownload } from "react-icons/fi";
import { useState } from "react";
import naukriCV from '../Resume_CV/Ujjwal-CV-Naukri.pdf';
import simpleCV from '../Resume_CV/Ujjwal-Simple-CV.pdf';
import moment from "moment/moment";
import style from './PDFViewer.module.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const resumeFile = moment().minute() % 2 === 0 ? simpleCV : naukriCV;



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
export default function PDFViewer() {
	useDocumentTitle("PDF Viewer");

	const [numPages, setNumPages] = useState(1);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);
	const goToPrevPage = () => setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
	const goToNextPage = () => setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages));


	return (
		<div className={style.pdfSection}>
			<div className={style.heading}>Ujjwal Pandey Resume</div>
			<PdfHere file={resumeFile} onDocumentLoadSuccess={onDocumentLoadSuccess} pageNumber={pageNumber} />
			<div className={style.pdfPageNavCont}>
				<nav className={style.pdfPageNav}>
					<button onClick={goToPrevPage}><MdNavigateBefore /> Prev</button>
					<span>Page {pageNumber} of {numPages}</span>
					<button onClick={goToNextPage}>Next <MdNavigateNext /></button>
				</nav>
				<DownloadCVButton pdfToDownload={resumeFile} text="Download C.V." />
			</div>
		</div>
	);
};

function PdfHere({ file, onDocumentLoadSuccess, pageNumber }) {
	return (
		<div className={style.page}>
			<div className={style.doc} >
				<Document file={file} onLoadSuccess={onDocumentLoadSuccess} error={<DownloadCVButton extraStyle={{ marginBlock: "8px" }} pdfFile={file} text="Download C.V." extraText="Browser not supported, please Download PDF!" />}>
					<Page pageNumber={pageNumber} renderTextLayer={false} />
				</Document>
			</div>
		</div>
	);
};


function DownloadCVButton({ pdfToDownload, extraStyle, text, extraText }) {
	return (
		<>
			<div className={style.downloadCV} style={extraStyle}>
				<a className={style.downloadCV} href={pdfToDownload} download="_Ujjwal-full_stack-C.V.pdf">{text}</a><FiDownload />
			</div>
			{<p>{extraText}</p> || ""}
		</>
	)
}