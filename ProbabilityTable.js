import Table from 'cli-table3';
import { table } from './index.js';

export default class ProbabilityTable {
	constructor(headersOriginal) {
		let headers = [...headersOriginal];
		headers.unshift('User dice v');
		this.table = new Table({
			head: headers,
		});
		this.addInitialRows(headers);
	}
	addRow(row) {
		this.table.push(row);
	}
	printTable() {
		console.log('\n');
		printHelp();
		console.log('\n');
		console.log(this.table.toString());
	}
	addInitialRows(headers) {
		for (let i = 1; i < headers.length; i++) {
			const array = [];
			array.push(headers[i]);
			for (let j = 1; j < headers.length; j++) {
				const prob = buildProbability(headers[i], headers[j]);
				array.push(prob);
			}
			this.addRow(array);
		}
	}
}

function buildProbability(a, b) {
	if (a === b) return '-';
	a = a.split(',').map(Number);
	b = b.split(',').map(Number);
	let prob = a.reduce((count, x) => count + b.filter((y) => x > y).length, 0);
	prob = prob / 36;
	return prob.toFixed(4);
}

function printHelp() {
	console.log(
		'1. Guess who starts; the system generates a number (0 or 1) with HMAC to ensure fairness.'
	);
	console.log('2. Choose a set of dice to use during the game.');
	console.log(
		'3. Roll a die each turn by selecting a number from 0 to 5 (mod 6).'
	);
	console.log(
		"4. Compare your result with the opponent's; the higher number wins."
	);
}
