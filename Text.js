import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

export default class Text {
	firstMove() {
		console.log("Let's determine who makes the first move");
	}
	randomValue(hmac, max) {
		console.log(
			`I selected a random value in the range 0...${max} (HMAC=${hmac})`
		);
	}
	key(num, key) {
		console.log(`My number is ${num} (KEY=${key})`);
	}
	guessSelection() {
		console.log('Try to guess my selection');
	}
	menuFinal() {
		console.log('X - exit\n? - help');
	}
	menuStart(num) {
		for (let i = 0; i <= num; i++) {
			console.log(`${i} - ${i}`);
		}
	}
	chooseDice() {
		console.log('Choose your dice');
	}
	diceList(runTimeInfo) {
		for (let i = 0; i < runTimeInfo.unusedDice.length; i++) {
			console.log(`${i} - ${runTimeInfo.unusedDice[i]}`);
		}
	}
	addNumber() {
		console.log('Add your number modulo 6');
	}
	yourThrow() {
		console.log("It's time for your throw");
	}
	yourThrowResult(result) {
		console.log('Your throw is ' + result);
	}
	computerThrowResult(result) {
		console.log('My throw is ' + result);
	}
	computerThrow() {
		console.log("It's time for my throw");
	}
	sumOfNumbers(computer, player) {
		let result = (computer + player) % 6;
		console.log(
			'The result is ' + computer + ' + ' + player + ' = ' + result + ' (mod 6)'
		);
	}
	result(dice, sumOfNumbers) {
		console.log('Your throw is ' + dice[sumOfNumbers]);
	}
	winner(computer, player) {
		if (computer < player) {
			console.log(`You win (${player} > ${computer})`);
		} else {
			console.log(`You lose (${player} < ${computer})`);
		}
	}
	diceUsed() {
		console.log('That dice is already used, choose another one');
	}
	yourSelection(num) {
		console.log('Your selection: ' + num);
	}
	computerSelectDice(dice) {
		console.log('Computer select: ' + dice);
	}
	computerFirst(dice) {
		console.log('I make the first move and choose the ' + dice + ' dice');
	}
}
