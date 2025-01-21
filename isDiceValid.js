export default function isDiceValid(dice) {
	has2orMoreDice(dice);
	hasOnlyInt(dice);
	has6NumForDice(dice);
	has5OrMoreComma(dice);
}

function has2orMoreDice(dice) {
	if (dice.length <= 2) {
		console.error('User specified only two dice or no dice at all');
		process.exit(1);
	}
}

function hasOnlyInt(dice) {
	for (let i = 0; i < dice.length; i++) {
		for (let j = 0; j < dice[i].length; j++) {
			separatingComas(dice[i][j]);
		}
	}
}

function separatingComas(str) {
	if (str !== ',') {
		if (isNumber(str)) {
			console.error('Invalid character: ' + str);
			process.exit(1);
		}
	}
}

function isNumber(num) {
	return isNaN(num);
}

function has6NumForDice(dice) {
	for (let i = 0; i < dice.length; i++) {
		if (dice[i].length < 11) {
			console.error('Dice number ' + (i + 1) + ' does not have 6 digits');
			process.exit(1);
		}
	}
}

function has5OrMoreComma(dice) {
	for (let i = 0; i < dice.length; i++) {
		let count = 0;
		for (let j = 0; j < dice[i].length; j++) {
			if (dice[i][j] === ',') {
				count++;
			}
		}
		if (count < 5) {
			console.error('Dice ' + (i + 1) + ' has less than 6 faces');
			process.exit(1);
		}
		if (count > 5) {
			console.error('Dice ' + (i + 1) + ' has more than 6 faces');
			process.exit(1);
		}
	}
}
