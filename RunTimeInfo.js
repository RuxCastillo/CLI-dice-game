export default class RunTimeInfo {
	constructor() {
		this.turn = null;
		this.computerResult = null;
		this.playerResult = null;
		this.playerSelection = null;
		this.currentProtocol = null;
		this.playerDice = null;
		this.computerDice = null;
		this.usedDice = null;
		this.unusedDice = null;
		this.dice = null;
	}
	firstTurn(computer, player) {
		if (computer === player) {
			this.turn = 'player';
		} else {
			this.turn = 'computer';
		}
	}
	updateUnusedDice() {
		this.unusedDice = [];
		for (let i = 0; i < this.dice.length; i++) {
			if (this.usedDice[i] !== 'used') {
				this.unusedDice.push(this.dice[i]);
			}
		}
	}
}
