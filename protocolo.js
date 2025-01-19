export default function protocolFunc(hmac, keysGenerator) {
	return function (min, max) {
		const key = keysGenerator.generateNewKey();
		const num = keysGenerator.generateNumber(min, max);
		const theHmac = hmac.computeHMAC(key, num);

		const obj = { key, num, theHmac };
		return obj;
	};
}
