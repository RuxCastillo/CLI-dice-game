export default class RunTimeInfo {
	constructor() {
		this.turn = null;
		this.computerResult = null;
		this.playerResult = null;
		this.playerSelection = null;
		this.currentProtocol = null;
		this.diceUsed = null;
		this.dice = null;
	}
	firstTurn(computer, player) {
		if (computer < player) {
			this.turn = 'player';
		} else {
			this.turn = 'computer';
		}
	}
}
