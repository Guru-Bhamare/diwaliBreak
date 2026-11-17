const t = require('./deepEquality.js')

const testCases = [
    {
        input1: 1,
        input2: 1,
        expected: true,
    },
    {
        input1: "a",
        input2: "a",
        expected: true,
    },
    {
        input1: [],
        input2: [],
        expected: true,
    },
    {
        input1: [1],
        input2: [1],
        expected: true,
    },
    {
        input1: [1],
        input2: [1, 2],
        expected: false,
    },
    {
        input1: [1],
        input2: ["1"],
        expected: false,
    },
    {
        input1: { a: 1 },
        input2: { a: 1 },
        expected: true,
    },
    {
        input1: { a: 1 },
        input2: { b: 1 },
        expected: false,
    },
    {
        input1: { a: [1] },
        input2: { a: [1] },
        expected: true,
    },
    {
        input1: { a: { b: 1 } },
        input2: { a: { b: 1 } },
        expected: true,
    },
    {
        input1: NaN,
        input2: NaN,
        expected: false,
    },
    {
        input1: null,
        input2: null,
        expected: true,
    },
    {
        input1: null,
        input2: undefined,
        expected: false,
    },
    {
        input1: { a: undefined },
        input2: { b: 1 },
        expected: false,
    },
    {
        input1: { a: 1 },
        input2: { b: undefined },
        expected: false,
    },
]

for (const obj of testCases) {
    console.log("input 1", obj.input1)
    console.log("input 2", obj.input2)
    console.log((t.isEqual(obj.input1, obj.input2) === obj.expected) ? '✅' : '❌');
    console.log()
}