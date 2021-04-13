function Circle(radius){

    // Instance members
    this.radius = radius
    this.result = this.draw();
}

//Prototpye Members 
Circle.prototype.draw = function(){
    console.log("draw");
}

//Protoype Members from Root
Circle.prototype.toString = function(){
    console.log('Circle with radius' +this.radius);  
}
