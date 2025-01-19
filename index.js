import isDiceValid from './isDiceValid.js';
import KeysGenerator from './KeysGenerator.js';
import HMAC from './HMAC.js';
import protocolFunc from './protocolo.js';

const dice = process.argv.slice(2);
isDiceValid(dice);

const keysGenerator = new KeysGenerator();
const hmac = new HMAC();

let protocol = protocolFunc(hmac, keysGenerator);

let protocolObj = protocol(0, 1);
