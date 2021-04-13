//Function Method 
function createCircle(radius) {
    //Object literal syntax
    return {
        radius,  
        location: {
            x: 1,
            y: 2
        },
        draw : function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();

//Constructor Method 
function Circle (radius){
    this.radius = radius;
    this.draw = function () {
    console.log('draw with Constructor method');
  };
}

const circleConstructor = new Circle(1);
circleConstructor.draw();


//Enumerating Properties

let circleEnumerating = new Circle(2);

for(let key in circleEnumerating){
    console.log(key);
    console.log(circleEnumerating[key]);
    if(typeof circleEnumerating[key] !== 'function')
        console.log(circleEnumerating[key]);
}


const keys = Object.keys(circleEnumerating);
console.log(keys);

if('radius' in circleEnumerating)
    console.log('CircleEnumerating has a radius.')
