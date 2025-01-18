import isDiceValid from './isDiceValid.js';

const dice = process.argv.slice(2);
console.log(dice);

isDiceValid(dice);
