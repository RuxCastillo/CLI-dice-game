import isDiceValid from './isDiceValid.js';
import KeysGenerator from './KeysGenerator.js';
import HMAC from './HMAC.js';
import protocolFunc from './protocolo.js';
import readline from 'readline';
import RunTimeInfo from './RunTimeInfo.js';
import Text from './text.js';
import firstTurnHistory from './firstTurnHistory.js';
import selectionOfDice from './selectionOfDice.js';
import throwTurns from './throwTurns.js';
import final from './final.js';

export const runTimeInfo = new RunTimeInfo();
runTimeInfo.dice = process.argv.slice(2);
isDiceValid(runTimeInfo.dice);
runTimeInfo.usedDice = new Array(runTimeInfo.dice.length).fill(null);
runTimeInfo.updateUnusedDice();

const keysGenerator = new KeysGenerator();
const hmac = new HMAC();
export const text = new Text();
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
export let protocol = protocolFunc(hmac, keysGenerator);

await firstTurnHistory(runTimeInfo, text, protocol);
await selectionOfDice(runTimeInfo, text);
await throwTurns();
final();
