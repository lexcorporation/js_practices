function calcularTotal(precio, impuesto) {
    let valorImpuesto = precio * impuesto
    return precio + valorImpuesto;
}

console.log("El precio Total es: " + calcularTotal(19.9, 0.15))
