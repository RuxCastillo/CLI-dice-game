import crypto from 'crypto';

class KeysGenerator {
	constructor() {
		this.key = null;
		this.number = null;
	}
	getKey() {
		return this.key;
	}
	generateNewKey() {
		this.key = crypto.randomBytes(32);
		return this.key;
	}
	getNumber() {
		return this.key;
	}
	getNumber(min, max) {
		const range = max - min + 1;
		const randomValue = crypto.randomBytes(1).readUInt8(0) % range;
		this.number = min + randomValue;
		return this.number;
	}
}

export default KeysGenerator;
