class Stack {
    constructor(size = 10) {
        this.top = 0;
        this.size = size;
        this.arr = new Array(size);
        this.max = -Infinity;
    }
    
    empty() {
        return this.top == 0;
    }
    
    full() {
        return this.top == this.size;
    }
    
    push(el) {
        if (this.full()) {
            throw new Exception("Stack.push: Can't insert into a full stack");
        }
        this.arr[this.top] = el;
        this.top++;
        
        let tmp = this.#numDigits(el);
        
        if (el < 0) tmp++;
        if (tmp > this.max) {
            this.max = tmp;
        }
    }
    
    pop() {
        if (this.empty()) {
            throw new Exception("Stack.pop: Can't remove from an empty stack");
        }
        
        this.top--;
        
        return this.arr[this.top];
    }
    
    size() {
        return this.top;
    }
    
    toString() {
        var result = "";
        for (let i = this.top - 1; i >= 0; i--) {
            result += "|";
            let tmp = this.max - this.#numDigits(this.arr[i]);
            
            if (this.arr[i] < 0) tmp--;

            for (let i = 0; i < tmp; i++) {
                result += " ";
            }
            
            result += this.arr[i] + "|\n";
        }
        result += " ";
        for (let i = 0; i < this.max; i++) {
            result += "¯";
        }
        
        return result;
    }
    
    #numDigits(x) {
      return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;
    }
}
