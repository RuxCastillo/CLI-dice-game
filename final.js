import { text } from './index.js';
import { runTimeInfo } from './index.js';

export default function final() {
	text.winner(runTimeInfo.computerResult, runTimeInfo.playerResult);
}
