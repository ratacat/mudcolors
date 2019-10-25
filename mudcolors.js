'use strict';


class mudcolors {
	constructor() {
		let colors = [];
	}
	static parse (string) {
		if (typeof string != 'string'){
			throw new error('mudcolors was passed something besides a string');
		}

		const reset = '\u001b[0m';
		const key = ']';

		this.colors.forEach(function(color){
			var r = new RegExp(`(?<!\\[\d\dm)[${color.tag}]\\${key}`, 'g'); //new RegExp(color.tag + key,'g');
			string = string.replace(r,reset + color.code);
		});
		string = string + reset;

		return string;
	}

	static getColor(target){
		let color = this.colors.find(function(obj) {
			if (obj.color == target){
				return obj;
			}
		});
		return color.code;
	}
}

mudcolors.colors = [
	{code: '\u001b[35m', tag: 'm', color: 'magenta'}, //magenta
	{code: '\u001b[30m', tag: 'b', color: 'black'}, //black
	{code: '\u001b[31m', tag: 'r', color: 'red'}, //red
	{code: '\u001b[32m', tag: 'g', color: 'green'}, //green
	{code: '\u001b[33m', tag: 'y', color: 'yellow'}, //yellow
	{code: '\u001b[34m', tag: 'u', color: 'blue'}, //blue
	{code: '\u001b[36m', tag: 'c', color: 'cyan'}, //cyan
	{code: '\u001b[37m', tag: 'w', color: 'white'}, //white
	{code: '\u001b[90m', tag: 'B', color: 'BLACK'}, //BLACK
	{code: '\u001b[91m', tag: 'R', color: 'RED'}, //RED
	{code: '\u001b[92m', tag: 'G', color: 'GREEN'}, //GREEN
	{code: '\u001b[93m', tag: 'Y', color: 'YELLOW'}, //YELLOW
	{code: '\u001b[94m', tag: 'U', color: 'BLUE'}, //BLUE
	{code: '\u001b[95m', tag: 'M', color: 'MAGENTA'}, //MAGENTA
	{code: '\u001b[96m', tag: 'C', color: 'CYAN'}, //CYAN
	{code: '\u001b[97m', tag: 'W', color: 'WHITE'} //WHITE
];

module.exports = mudcolors;
