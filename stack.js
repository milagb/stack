class Stack{

    itens = [];
    count = 0;
    
    // constructor () {
    //     this.itens = [];
    //     this.count = 0;
    // }
    
    push(element){
        this.itens[this.count] = element;
        console.log(element, this.count);
        this.count++;
    }

    pop() {
        let lastItem = this.itens[this.count - 1];
        // // this.count -= 1;
        this.itens.pop();
        this.count--;
        return lastItem;
    }

    peek() {
        return this.itens[this.count - 1];
    }

}

const stack = new Stack();

stack.push("camila");
stack.push("nyx");
stack.push("lucy");
stack.push("arthur");
console.log(stack);
stack.pop();
stack.pop();
console.log(stack);

stack.push("nino");
console.log(stack.peek());
console.log(stack);
