import isDiceValid from './isDiceValid.js';
import KeysGenerator from './KeysGenerator.js';
import HMAC from './HMAC.js';
import protocolFunc from './protocolo.js';
import readline from 'readline';
import RunTimeInfo from './RunTimeInfo.js';
import Text from './text.js';
import Input from './Input.js';

const runTimeInfo = new RunTimeInfo();
runTimeInfo.dice = process.argv.slice(2);
isDiceValid(runTimeInfo.dice);
runTimeInfo.diceUsed = new Array(runTimeInfo.dice.length).fill(null);

const keysGenerator = new KeysGenerator();
const hmac = new HMAC();
const text = new Text();
const input = new Input();
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let protocol = protocolFunc(hmac, keysGenerator);

text.firstMove();
runTimeInfo.currentProtocol = protocol(0, 1);
text.randomValue(runTimeInfo.currentProtocol.theHmac, 1);
text.guessSelection();
text.menuStart(1);
text.menuFinal();

async function askQuestion(query) {
	return new Promise((resolve) => {
		rl.question(query, (answer) => {
			resolve(answer);
		});
	});
}

async function main() {
	const num = await askQuestion('Your input: ');
	if (num === 'X' || num === 'x') {
		console.log('seleccionaste salir');
		process.exit(0);
	}
	if (num === '?') {
		console.log('seleccionaste ayuda');
		rl.close();
	}
	if (num > 5 || num < 0) {
		console.log('Please input a valid number');
		rl.close();
	}

	runTimeInfo.playerSelection = num;
	rl.close();
}
main();

text.yourSelection(runTimeInfo.playerSelection);
text.key(runTimeInfo.currentProtocol.num, runTimeInfo.currentProtocol.key);
runTimeInfo.firstTurn(
	runTimeInfo.currentProtocol.num,
	runTimeInfo.playerSelection
);
console.log(runTimeInfo.turn);
