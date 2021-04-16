function extend(Child , Parent){
    Child.prototype = Object.create(Parent);
    Child.prototype.constructor = Child;
};

function HtmlElement(){
    this.click = function(){
        console.log('clicked')
    }
};

HtmlElement.prototype.focus = function(){
    console.log('focused')
};

function HtmlSelectElement(items = []){
    
    this.items = items;

     this.addItem = function(item){
        this.items.push(item);
    }
    
    this.removeItem = function(item){
       this.items.splice(this.items.indexOf(item) , 1);
    }

    this.render = function(){
  return `
<select>${this.items.map(item => `
    <option>${item}</option>`).join('')}
</select>`;
    }
};

extend(HtmlSelectElement , HtmlElement);


function HtmlImageElement(src = ''){
    this.src = src;

    this.render = function(){
        return `<img src="${this.src}" />`;
    }
}

extend(HtmlImageElement , HtmlElement);


const elements = [
    new HtmlSelectElement([1 , 2 ,3]),
    new HtmlImageElement('http://')
];

//This Polymorphisim
for(element of elements){
    console.log(element.render());
}
