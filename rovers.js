class rovers {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.pos = '';
	}
	setPosition(a, b, p) {
		this.x = a;
		this.y = b;
		this.pos = p;
		console.log(`the location is: (${this.x},${this.y})  direction is: "${this.pos}"`);
	}

	move(dirc) {

		for (let i = 0; i < dirc.length; i++) {

			this.direction(dirc.charAt(i));
		}
	}

	Leftdirection(){
		
		switch (this.pos) {
			case 'N':
				this.pos = 'W';

				break;

			case 'S':
				this.pos = 'E';

				break;

			case 'E':
				this.pos = 'N';

				break;

			case 'W':
				this.pos = 'S';

				break;

		}
	}

	Rightdirection(){

		switch (this.pos) {
			case 'N':
				this.pos = 'E';

				break;

			case 'S':
				this.pos = 'W';

				break;

			case 'E':
				this.pos = 'S';

				break;

			case 'W':
				this.pos = 'N';

				break;
		}
	}

	movement(){

		switch (this.pos) {

			case 'N':
				this.y += 1;

				break;

			case 'S':
				this.y -= 1;

				break;

			case 'E':
				this.x += 1;

				break;

			case 'W':
				this.x -= 1;

				break;
		}

	}

	direction(d) {

		if ((this.x < 4 && this.x > -5) && (this.y < 4 && this.y > -5)) {

			switch (d) {
				case ('L'):
					this.Leftdirection();
					break;

				case ('R'):		
				this.Rightdirection();
					break;

				case ('M'):	
				this.movement();
					break;

				default:
					console.log(`${d}  is a Wrong Input`);

			}

			console.log(`the current location: (${this.x},${this.y}) direction is:  "${this.pos}"`);
		}
		else {
			console.log(`you are currently out of grid`)
		}
	}
}

module.exports = rovers;