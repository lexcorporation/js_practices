function getByIdx(arr, idx) {
    if (idx < 0 || idx >= arr.length) {
        return "Indice Inexistente";
    } else {
        return arr[idx]
    }
}

console.log("El elemento es: ", getByIdx([1, 4, 6, 7, 9, 15], 8))