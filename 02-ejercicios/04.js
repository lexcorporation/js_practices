function imprimirImpares() {
    let impares = '';
    for (let ji = 0; ji < 10; ji++) {
        //console.log("I: /*  */", i)
        if (ji % 2 !== 0)
            impares = ji + "\n" + impares;

    }
    return impares
}

console.log("Impar: ", imprimirImpares())
