'use strict';


class scy {

	static parse (string) {
		const colors = [
			{code: '\u001b[30m', tag: 'b'}, //black
			{code: '\u001b[31m', tag: 'r'}, //red
			{code: '\u001b[32m', tag: 'g'}, //green
			{code: '\u001b[33m', tag: 'y'}, //yellow
			{code: '\u001b[34m', tag: 'u'}, //blue
			{code: '\u001b[35m', tag: 'm'}, //magenta
			{code: '\u001b[36m', tag: 'c'}, //cyan
			{code: '\u001b[0m', tag: 'w'}, //white
			{code: '\u001b[30;1m', tag: 'B'}, //BLACK
			{code: '\u001b[31;1m', tag: 'R'}, //RED
			{code: '\u001b[32;1m', tag: 'G'}, //GREEN
			{code: '\u001b[33;1m', tag: 'Y'}, //YELLOW
			{code: '\u001b[34;1m', tag: 'U'}, //BLUE
			{code: '\u001b[35;1m', tag: 'M'}, //MAGENTA
			{code: '\u001b[36;1m', tag: 'C'}, //CYAN
			{code: '\u001b[0;1m', tag: 'W'} //WHITE
		];

		const reset = '\u001b[0m';
		const key = ']';

		colors.forEach(function(color){
			var r = new RegExp(color.tag + key,'g');
			string = string.replace(r,reset + color.code);
		});
		string = string + reset;

		return string;
	}
}

module.exports = scy;
