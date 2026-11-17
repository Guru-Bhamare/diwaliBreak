function areArraysEqual(input1, input2) {
    if (input1.length !== input2.length) return false;
    for (let i = 0; i < input1.length; i++) {
        if (!isEqual(input1[i], input2[i])) return false;
    }
    return true;
}

function isEqual(input1, input2) {
    if (Array.isArray(input1) && Array.isArray(input2)) return areArraysEqual(input1, input2);
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

function main() {
    testBooleans();
    testNumbers();
    testArrays();
}

main(); 