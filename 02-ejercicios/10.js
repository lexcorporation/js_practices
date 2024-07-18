function crearArr(tamano) {
    newArr = [];
    for (i = 0; i < tamano; i++) {
        newArr[i] = i + 1;
    }

    return newArr;
}
console.log("El nuevo arr: ", crearArr(10))
