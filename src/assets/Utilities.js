export function isMobileDevice() {
	return /android|iphone|ipad|blackberry|mobile|webos|opera mini/i.test(navigator.userAgent.toLowerCase());
}