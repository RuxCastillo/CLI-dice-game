import isDiceValid from './isDiceValid.js';
import NumbersGenerator from './KeysGenerator.js';
import crypto from 'crypto';

const dice = process.argv.slice(2);
console.log(dice);

isDiceValid(dice);
