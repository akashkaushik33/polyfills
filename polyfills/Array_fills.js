Array.prototype.$forEach = function (callback) {
    // this will denote array
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

Array.prototype.$map = function (callback) {
    const newArr = this.slice();
    for (let i = 0; i < newArr.length; i++) {
        callback(newArr[i], i, newArr);
    }
    return newArr;
}

Array.prototype.$reduce = function ( callback, accumulator ) {
    let count = 0;
    if (!accumulator) {
        accumulator = this[0];
        count++
    };

    for (let i = count; i < this.length; i++ ) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

