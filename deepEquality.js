function isEqual(input1, input2) {

    if (input1 === null || input2 === null) return input1 === null && input2 === null;

    if ((typeof (input1) !== "object")) return input1 === input2;

    if (Array.isArray(input1) ^ Array.isArray(input2)) return false;

    if (Object.keys(input1).length != Object.keys(input2).length) return false;

    for (const key in input1) {
        if (!(key in (input2))) return false;
        if (!isEqual(input1[key], input2[key])) return false;

    }
    return true;
}

module.exports = {
    isEqual,
}