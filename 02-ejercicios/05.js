function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (let iterator of arr) {
        menor = (menor < iterator) ? menor : iterator;
        mayor = (mayor > iterator) ? mayor : iterator;
    }
    return [menor, mayor]
}

console.log("Elementos mayor y menor del arr: ", getMenorMayor([-222, 5, 8, 0, 20, -34, -5000]))