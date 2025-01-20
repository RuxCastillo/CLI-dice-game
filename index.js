import isDiceValid from './isDiceValid.js';
import KeysGenerator from './KeysGenerator.js';
import HMAC from './HMAC.js';
import protocolFunc from './protocolo.js';
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
export let protocol = protocolFunc(hmac, keysGenerator);

await firstTurnHistory(runTimeInfo, text, protocol);
await selectionOfDice(runTimeInfo, text);
await throwTurns();
final();
process.exit(0);
