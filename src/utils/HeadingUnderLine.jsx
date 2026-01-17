import "@/styles/duoToneHeading.scss";

export default function HeadingUnderLine({ txt, txtClass }) {

	return (<h2 className={`main-title-2 ${txtClass && txtClass}`}>{txt}</h2>);
}