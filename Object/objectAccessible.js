// Private Properties and Methods

function Circle(radius){
    this.radius = radius;
    let defaultLocation = {x : 1 , y : 1}
    
    let calculateLocation = function(radius){
        console.log(defaultLocation.x * radius);
    }

    this.showLocation = function(newradius){
        calculateLocation(this.radius);
    }

    //Getter and Setter
    Object.defineProperty(this, 'defaultLocation' ,{
        get: function(){
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y)
                throw new Error('Invalid location.');

            defaultLocation = value;
        }
    })
}




let circle = new Circle(10);
circle.showLocation();

circle.radius = 20;
circle.showLocation();

//Note: I can't reach calculateLocation function and defaultLocation

console.log(circle.defaultLocation);

circle.defaultLocation = 1;
