require('./polyfills/Array_fills')
require('./polyfills/Function_fills')

const testData = [1,2,3,4,5];


function testArrForEach() {
    const resp = testData.$forEach((item, index, arr) => {
        arr[index] = 2*item;
    });
    console.log('ORIGINAL', testData);
    console.log('FUNC OUTPUT', resp);
}
// uncomment for testing
// testArrForEach()


function testArrMap() {
    const resp = testData.$map((item, index, arr) => {
        arr[index] = 2*item;
    });
    console.log('ORIGINAL', testData);
    console.log('FUNC OUTPUT', resp);
}

// testArrMap()


function testReduce () {
    const resp = testData.$reduce((acc, item, index, arr) => {
        return acc += item;
    });

    console.log('ORIGINAL', testData);
    console.log('FUNC OUTPUT', resp);

}
// testReduce()

function testBind () {
    // bind the this arg of an obj and return the bound funtion;
    // also bind the args

    const obj1 = {
        fname: 'Akash',
        lname: 'kaushik',
        printName: function (...args) {
            console.log('Some more args', args)
            return `Full name: ${this.fname} ${this.lname}`
        },
    };

    const obj2 = {
        fname: 'Navya',
        lname: 'kaushik'
    };

    const boundFn1 = obj1.printName.$bind(obj1, 1,2,3,4);
    const boundFn2 = obj1.printName.$bind(obj2, 5,6,7);

    console.log('boundFn1()', boundFn1(8, 9));
    console.log('boundFn2()', boundFn2(1,2,3));
}
// testBind()