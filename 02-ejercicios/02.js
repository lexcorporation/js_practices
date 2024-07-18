function determinaResolucion(ancho, alto) {
    let resolucion = false;

    if (ancho >= 7680 && alto >= 4320) {
        resolucion = "8K";
    } else if (ancho >= 3840 && alto >= 2160) {
        resolucion = "4K";
    } else if (ancho >= 2560 && alto >= 1440) {
        resolucion = "WQHD";
    } else if (ancho >= 1920 && alto >= 1080) {
        resolucion = "FHD";
    } else if (ancho >= 1280 && alto >= 720) {
        resolucion = "HD";
    } else {
        resolucion = false;
    }

    return resolucion;
}

let res = determinaResolucion(5000, 3000)
console.log(res)
