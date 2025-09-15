//complete this code
class Rectangle {
	constructor(width,height) {
		this.width = width;
		this.height = height;
	}
	get width() {
		return `${this.width}`;
	}
}
	get height() {
		return `${this.height}`;
	}

get Area() {
	return `${this.width}` * `${this.height}`;
}
}

class Square extends Animal {
	constructor(side) {
		this.side = side;
	}
	get Perimeter() {
		return 4 *`${this.side}`;
	}
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
