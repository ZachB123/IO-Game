"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(location, name, color, score = 0) {
        this.location = location;
        this.name = name;
        this.color = color;
        this.score = score;
    }
}
exports.default = Player;
