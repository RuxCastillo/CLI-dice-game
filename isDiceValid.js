export default function isDiceValid(dice) {
	has2orMoreDice(dice);
	hasOnlyInt(dice);
	has6NumForDice(dice);
}

function has2orMoreDice(dice) {
	if (dice.length <= 2) {
		console.error('User specified only two dice or no dice at all');
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
		}
	}
}

function isNumber(num) {
	return isNaN(num);
}

function has6NumForDice(dice) {
	for (let i = 0; i < dice.length; i++) {
		if (dice[i].length < 11) {
			console.error('Dice number ' + dice[i] + ' does not have 6 digits');
		}
	}
}
