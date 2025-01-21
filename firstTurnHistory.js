import { input } from '@inquirer/prompts';
import { table } from './index.js';

export default async function firstTurnHistory(runTimeInfo, text, protocol) {
	text.firstMove();
	runTimeInfo.currentProtocol = protocol(0, 1);
	text.randomValue(runTimeInfo.currentProtocol.theHmac, 1);
	text.guessSelection();
	text.menuStart(1);
	text.menuFinal();

	const answer = await input({
		message: 'Your selection: ',
		validate: (num) => {
			if (num === 'X' || num === 'x') {
				console.log('seleccionaste salir');
				process.exit(0);
			}
			if (num === '?') {
				console.log('seleccionaste ayuda');
				table.printTable();
				return;
			}
			if (isNaN(num)) {
				return 'Please input a valid number';
			}

			if (num > 1 || num < 0) {
				return 'Please input a valid number';
			}

			runTimeInfo.playerSelection = +num;
			return true;
		},
	});

	text.key(runTimeInfo.currentProtocol.num, runTimeInfo.currentProtocol.key);
	runTimeInfo.firstTurn(
		runTimeInfo.currentProtocol.num,
		runTimeInfo.playerSelection
	);
}
