function getPositivos(arr) {
    let positivos = 0;
    let negativos = 0;
    for (let iterator of arr) {
        if (iterator > 0) {
            positivos++
        }
    }
    return positivos
}

console.log("El arr tiene : " + getPositivos([-222, 777, 555, 5, 8, 0, 20, -34, -5000]) + " elementos positivos")