function type(a) {
    if (Array.isArray(a)) return "array";
    if (typeof (a) === "boolean") return "boolean";
    if (typeof (a) === "object") return "object";
    if (typeof (a) === "string") return "string";
    return 'number'
}

function areBothDatatypesSame(input1, input2) {
    return type(input1) !== type(input2);
}

function areObjectsEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for (const key in obj1) {
        if (!(key in obj2)) return false;
        if (!isEqual(obj1[key], obj2[key])) return false;
    }
    return true;
}

function areArraysEqual(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++) {
        if (!isEqual(array1[i], array2[i])) return false;
    }
    return true;
}

function isEqual(input1, input2) {

    if (areBothDatatypesSame(input1, input2)) return false;
    if (type(input1) === "array") return areArraysEqual(input1, input2);
    if (type(input1) === "object") return areObjectsEqual(input1, input2);
    return input1 === input2;
}

function test(message, actual, input1, input2) {
    const isPassed = isEqual(input1, input2) === actual ? '✅' : '❌';
    console.log(`${message} | ${isPassed}`);
}

function testBooleans() {
    test("Two Booleans are true should be equal", true, true, true);
    test("Two Booleans are false should be equal", true, false, false);
    test("Diff Booleans should be unequal", false, true, false);
    test("One Boolean & One Number should be unequal", false, true, 1);
    test("One Boolean & One String should be unequal", false, "1", true);
    test("One Boolean & One Array should be unequal", false, true, []);
    test("One Boolean & One Object should be unequal", false, true, {});
}

function testNumbers() {
    test("Two same numbers should be equal", true, 1, 1);
    test("Two diff number should be unequal", false, 0, 1);
    test("One Negative and One Positive should be unequal", false, 10, -10);
}

function testArrays() {
    test("Two empty arrays should be equal", true, [], []);
    test("Two arrays with different length should be unequal", false, [], [1]);
    test("Two arrays same length with same values should be equal", true, [1], [1]);
    test("Two arrays same length different values should be unequal", false, [1], [2]);
    test("Two arrays same length different values should be unequal", false, [1], [1, 2]);
    test("Two same nested arrays should be equal", true, [[]], [[]]);
    test("One array & One object should not be true", false, [], {})

}

function testObjects() {
    test("Two empty objects should be equal", true, {}, {});
    test("Two object with different length of keys should be unequal", false, {}, { a: 1 });
    test("Two objects with same keys and values should be equal", true, { a: 1 }, { a: 1 })
    test("Two objects with same keys but different values should be unequal", false, { a: 1 }, { a: 3 });
    test("Two objects with same key and same array should be equal", true, { a: [[]] }, { a: [[]] });
}

function main() {
    testBooleans();
    testNumbers();
    testArrays();
    testObjects();
}

main(); 