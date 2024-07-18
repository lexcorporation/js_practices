function toObjet(arr) {
    newArr = [];
    for (let key in arr) {
        console.log("key: ", arr[key])
        arrIn = arr[key];
        idx = arrIn[0]
        nameA = arrIn[1]

        newArr[key] = nameA;
        newArr[key].id = idx;
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


let obj = [
    [1, { name: "obj1" }],
    [2, { name: "obj2" }],
    [3, { name: "obj3" }]
]
console.log("El nuevo obj: ", toObjet(obj))
