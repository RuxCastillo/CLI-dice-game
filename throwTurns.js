import { runTimeInfo, text, protocol } from './index.js';
import { input } from '@inquirer/prompts';
import { table } from './index.js';

export default async function throwTurns() {
	if (runTimeInfo.turn === 'player') {
		await playerThrow();
		await computerThrow();
	} else {
		await computerThrow();
		await playerThrow();
	}
}
async function playerThrow() {
	text.yourThrow();
	await sameFunctionalityInThrows();
	let modificationsDice = runTimeInfo.playerDice.split(',').map(Number);
	let positionInDice =
		(runTimeInfo.currentProtocol.num + runTimeInfo.playerSelection) % 6;
	runTimeInfo.playerResult = modificationsDice[positionInDice];
	text.yourThrowResult(runTimeInfo.playerResult);
}

async function computerThrow() {
	text.computerThrow();
	await sameFunctionalityInThrows();
	let modificationsDice = runTimeInfo.computerDice.split(',').map(Number);
	let positionInDice =
		(runTimeInfo.currentProtocol.num + runTimeInfo.playerSelection) % 6;
	runTimeInfo.computerResult = modificationsDice[positionInDice];
	text.computerThrowResult(runTimeInfo.computerResult);
}

async function sameFunctionalityInThrows(flag) {
	runTimeInfo.currentProtocol = protocol(0, 5);
	text.randomValue(runTimeInfo.currentProtocol.theHmac, 5);
	text.addNumber();
	text.menuStart(5);
	text.menuFinal();
	const answer = await input({
		message: 'Your selection: ',
		validate: (num) => {
			if (num === 'X' || num === 'x') {
				console.log('seleccionaste salir');
				process.exit(0);
			}
			if (num === '?') {
				table.printTable();
				return 'When finished with the help, select a number to continue the game.';
			}
			if (isNaN(num)) {
				return 'Please input a valid number';
			}

			if (num > 5 || num < 0) {
				return 'Please input a valid number';
			}

			runTimeInfo.playerSelection = +num;
			return true;
		},
	});
	text.key(runTimeInfo.currentProtocol.num, runTimeInfo.currentProtocol.key);
	text.sumOfNumbers(
		runTimeInfo.currentProtocol.num,
		runTimeInfo.playerSelection
	);
}
