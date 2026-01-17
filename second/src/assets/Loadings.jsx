import { PiSpinner } from 'react-icons/pi';
import { Bars, Blocks, ThreeDots } from 'react-loader-spinner';
import style from "./Loaders.module.css";



/*
 * Interfaces used in this Loaders.tsx
 */
export const ThreeDotsModified = ({ size = "2em", color = "#4fa94d" }) => {
	return (
		<ThreeDots visible={true} height={size} width={size} color={color} radius={9} wrapperClass={style.threeDotsModified} ariaLabel="three-dots-loading" />
	);
};


/**
 * Button In-Line loader
 */
export const InLineLoadingButton = ({ msg }) => {
	return <button className="commonSubmitButton">{msg} <InLineSpinner /></button>
}


/**
 * In line spinner
 */
export const InLineSpinner = ({ size = '1em', className = '' }) => {
	return <PiSpinner size={size} className={`spin360deg ${className}`} />
};


/**
 * Full line block loader 
 */
export const PreloaderLoading = () => {
	return <ThreeDots visible={true} height="80" width="80" color="#006E93" radius="140" ariaLabel="three-dots-loading" wrapperClass={style.threeDots} />
};


/**
 * Full page Loader
 */
export const FullPageBarLoader = () => {
	return <div className={style.fullPageCont}>
		<Bars height={80} width={80} color="#13c2c2" visible={true} ariaLabel="bars-loading" wrapperClass={style.componentLoading} />
	</div>
}


/**
 * Single line square loader sign
 */
export const ComponentLoading = () => {
	return <Blocks ariaLabel="blocks-loading" wrapperClass={style.componentLoading} />
};