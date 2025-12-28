export class BraceValidation {
	constructor() {
		this.braces = {
			')': '(',
			']': '[',
			'}': '{'
		}

		this.openBraces = Object.values(this.braces);
		this.closeBraces = Object.keys(this.braces);
	}

	run(text) {
		let position = this.validate(text) + 1; // position where error was found
		console.log(position == 0 ? "Success" : position);
	}

	validate(text) {
		const stack = [];
		let	i = -1, ok = true;

		while (++i < text.length && ok) {
			let current = text[i];

			if (this.isOpenBrace(current)) {
				stack.push(i);
			} else if (this.isCloseBrace(current)) {
				if (stack.length == 0) {
					ok = false;
				} else {
					let correspond = text[stack.pop()];
					ok = this.matches(correspond, current);
				}
			}
		}

		if (!ok) {
			return i - 1;
		}
		
		return stack.length == 0 ? -1 : stack.pop();
	}

	matches(openBrace, closeBrace) {
		return this.braces[closeBrace] === openBrace;
	}

	isOpenBrace(brace) {
		return this.openBraces.includes(brace);
	}

	isCloseBrace(brace) {
		return this.closeBraces.includes(brace);
	}
}