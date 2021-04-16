function extend(Child , Parent) {
    Child.prototype = Object.create(Parent);
    Child.prototype.constructor = Child;
}

function Shape(color){
    this.color =color 
};

Shape.prototype.dublicate = function() {
    console.log('dublicate');
};

function Circle(radius , color){
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle , Shape.prototype);

Circle.prototype.dublicate = function(){
    console.log('Dublicate Circle')
}


Circle.prototype.draw = function(){
    console.log('draw');
}

function Square(size){
    this.size = size;
}

extend(Square , Shape.prototype);


