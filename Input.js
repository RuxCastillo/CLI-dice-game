export default class Input {
	validInput(numMax, runTimeInfo) {
		return function (num) {
			if (num === 'X' || num === 'x') {
				console.log('seleccionaste salir');
				process.exit(0);
			}
			if (num === '?') {
				console.log('seleccionaste ayuda');
			}
			if (num > numMax || num < 0) {
				console.log('Please input a valid number');
			}

			runTimeInfo.playerSelection = num;
		};
	}
}
