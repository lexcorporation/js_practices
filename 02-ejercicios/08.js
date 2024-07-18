function toPairs(arr) {
    newArr = [];
    for (let key in arr) {
        newArr[key] = [arr[key].id, arr[key]];
    }

    return newArr;
}

let array = [
    {
        id: 1, "des": "ana"
    }, {
        id: 2, "des": "pepa"
    }, {
        id: 3, "des": "carla"
    }
]
console.log("El nuevo arr: ", toPairs(array))
