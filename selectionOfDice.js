import { input } from '@inquirer/prompts';
import { table } from './index.js';

export default async function selectionOfDice(runTimeInfo, text) {
	runTimeInfo.updateUnusedDice();
	if (runTimeInfo.turn === 'player') {
		text.chooseDice();
		text.diceList(runTimeInfo);
		text.menuFinal();
		const lengthOfList = runTimeInfo.unusedDice.length;
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
				if (num > lengthOfList || num < 0) {
					return 'Please input a valid number';
				}

				runTimeInfo.playerDice = runTimeInfo.dice[num];
				runTimeInfo.usedDice[Number(num)] = 'used';
				return true;
			},
		});
		runTimeInfo.updateUnusedDice();
		const computerDice = Math.floor(Math.random() * (lengthOfList - 1 - 0)) + 0;
		runTimeInfo.computerDice = runTimeInfo.unusedDice[computerDice];
		text.computerSelectDice(runTimeInfo.computerDice);
	} else {
		const lengthOfList = runTimeInfo.unusedDice.length;
		const computerDice = Math.floor(Math.random() * (lengthOfList - 0)) + 0;
		runTimeInfo.computerDice = runTimeInfo.unusedDice[computerDice];
		runTimeInfo.usedDice[computerDice] = 'used';
		runTimeInfo.updateUnusedDice();
		text.computerFirst(runTimeInfo.computerDice);

		text.chooseDice();
		text.diceList(runTimeInfo);
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
				if (num > lengthOfList - 1 || num < 0) {
					return 'Please input a valid number';
				}

				runTimeInfo.playerDice = runTimeInfo.unusedDice[num];
				return true;
			},
		});
		text.yourSelection(runTimeInfo.playerDice);
	}
}
