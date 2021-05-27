import _ from 'lodash';
import {Circle} from './circle.js';


function component() {
    const element = document.createElement('div');
  
    // Lodash now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());


const cs = new Circle(2491);
cs.draw();

console.log("Changed.")
