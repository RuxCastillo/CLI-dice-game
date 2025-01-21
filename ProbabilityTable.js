import Table from 'cli-table3';
import { table } from './index.js';

export default class ProbabilityTable {
	constructor(headers) {
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
