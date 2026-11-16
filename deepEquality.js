function isEqual(input1, input2) {
    if (!(typeof (input1) === "object")) return input1 === input2;

    if (Array.isArray(input1) ^ Array.isArray(input2)) return false;

    if (Object.keys(input1).length != Object.keys(input2).length) return false;

    for (const key of input1) {
        if (key in input2) {
            if (!isEqual(input1[key], input2[key])) return false;
        }
    }

    return true;
}

console.log(isEqual([], []));