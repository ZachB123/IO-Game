import {Point} from './Point.js';
export class Player{
    constructor(
        public location: Point,
        public name: string,
        public color: string,
        public score: number = 0
    ) {
    }
}