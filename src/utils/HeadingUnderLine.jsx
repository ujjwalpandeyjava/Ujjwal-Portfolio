import "@/styles/duoToneHeading.scss";

export default function HeadingUnderLine({ txt, txtClass }) {

	return (<h1 className={`main-title-2 ${txtClass && txtClass}`}>{txt}</h1>);
}