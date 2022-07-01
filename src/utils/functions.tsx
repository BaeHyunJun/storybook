
export const phoneFormat = (number: string): string => {
	if (!number) return "";
	
	const value = number.replace(/\D/g, "").split("");
	
	const textArr = [
		// 첫번째 구간 (00 or 000)
		[0, value.length > 9 ? 3 : 2],
		// 두번째 구간 (000 or 0000)
		[0, value.length > 10 ? 4 : 3],
		[0, 4],
	];
	
	return textArr
	.map((v) => {
		return value.splice(v[0], v[1]).join("");
	})
	.filter((text) => {
		return text;
	})
	.join("-");
};