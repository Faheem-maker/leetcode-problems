var Stack = function() {
    this.arr1 = [];
    this.arr2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
Stack.prototype.push = function(x) {
    this.arr1.unshift(x);
};

/**
 * @return {number}
 */
Stack.prototype.pop = function() {
    if (this.arr1.length == 0) {
        [this.arr1, this.arr2] = [this.arr2, this.arr1];
    }
    while (this.arr1.length > 1) {
        this.arr2.unshift(this.arr1.pop());
    }

    return this.arr1.pop();
};

/**
 * @return {number}
 */
Stack.prototype.top = function() {
    if (this.arr1.length == 0) {
        [this.arr1, this.arr2] = [this.arr2, this.arr1];
    }
    while (this.arr1.length > 1) {
        this.arr2.unshift(this.arr1.pop());
    }

    return this.arr1[0];
};

/**
 * @return {boolean}
 */
Stack.prototype.empty = function() {
    return this.arr1.length == 0 && this.arr2.length == 0;
};
