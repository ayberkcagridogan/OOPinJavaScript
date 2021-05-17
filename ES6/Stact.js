
const _item = new WeakMap();

class Stack{
    constructor(){
        _item.set(this , []);
    }

    get count(){
         return _item.get(this).length;
    }

    push(obj){
        _item.get(this).push(obj);
    };

    pop(){
        
        const items = _item.get(this);

        if(items.length === 0) throw new Error('Stack is empty');
        
        return items.pop();
    }

    peek(){

        const items = _item.get(this);

        if(items.length === 0) throw new Error('Stack is empty');        
        return items[items.length - 1];
    }
}

const cs = new Stack('asdf');

