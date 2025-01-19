import crypto from 'crypto';

class HMAC {
	constructor() {
		this.HMAC = null;
	}
	getHMAC() {
		return this.HMAC;
	}
	computeHMAC(key, message) {
		this.HMAC = crypto
			.createHmac('sha3-256', key)
			.update(message.toString())
			.digest('hex')
			.toUpperCase();
		return this.HMAC;
	}
}

export default HMAC;
