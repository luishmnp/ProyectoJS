const lecturasEscaner = [120, 45.5, 80, 0];

let totalCompra = 0;
let indiceEscaner = 0;
let precioProducto = 0;

do {
    precioProducto = lecturasEscaner[indiceEscaner];
    indiceEscaner++;

    if (precioProducto > 0) {
        totalCompra = totalCompra + precioProducto;
        console.log(`Producto escaneado: S/ ${precioProducto}`);
    }

} while (precioProducto !== 0);

console.log("----------------------------------------");
console.log("COMPRA FINALIZADA");
console.log(`TOTAL A COBRAR: S/ ${totalCompra}`);

