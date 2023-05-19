

function Surrogate(){}

Function.prototype.inherits = function () {
    Surrogate.prototype = MovingObject.prototype;
    Ship.prototype = new Surrogate();
    Ship.prototype.constructor = Ship;
}

Function.prototype.inherits = function () {
    Surrogate.prototype = MovingObject.prototype;
    Asteroid.prototype = new Surrogate();
    Asteroid.prototype.constructor = Asteroid;
}

function MovingObject () {
}

MovingObject.prototype.moves = function () {
    console.log(`${this} is on the move!`);
}

let meteor = new MovingObject();
meteor.moves();

function Ship () {}
Ship.inherits(MovingObject);

let apollo1 = new Ship();
apollo1.moves();

function Asteroid () {}
Asteroid.inherits(MovingObject);