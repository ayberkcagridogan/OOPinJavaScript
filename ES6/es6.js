class Circle{
    constructor(radius){
        this.radius = radius;
        this.move = function(){}
    }
    draw(){
        console.log('draw');
    }

    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const c = Circle.parse('{ "radius": 1}');
//Function Declaration
function sayHello(){ }

//Funtion Expression
const sayGoodbye = new function(){};


//Class Declaration
class Square{   
}

//Class Expression
const rectangle = class {
};

//Private Member Using Symbol 
const _radius = Symbol();
const _draw = Symbol();

class Circle_Symbol{
    constructor(radius){
        this[_radius] = radius;
    }

    [_draw](){
        console.log('run draw');
    }

    getRadius(){
        console.log(this[_radius]);
        this[_draw]();
    }
}

//Private Member Using WeakMap
const _radiusWeakMap = new WeakMap();
const _moveWeakMap = new WeakMap();

class Circle_WeakMap{
    constructor(radius){
        _radiusWeakMap.set(this , radius);

        _moveWeakMap.set(this , () => {
            console.log(_radiusWeakMap.get(this));
        });
    }

    draw(){
        _moveWeakMap.get(this)();
    };
}

//Getter And Setter
const _roomCount = new WeakMap();
class House {
    constructor(roomCount){
        _roomCount.set(this, roomCount);
    }

    get roomCount(){
        return _roomCount.get(this);
    }
    set roomCount(value){
        if(value == 0) throw new Error('Invalid Room Cound');
        _roomCount.set(this, value);
    }
}

//Inheritance
class Car{
    constructor(color){
        this.color = color;
    }

    move(){
        console.log('move');
    }
}

class BMW extends Car { 
    constructor(color , price){
        super(color);
        this.price = price;
    }

    discount(){
        console.log(this.price + '* %15');
    }
}


