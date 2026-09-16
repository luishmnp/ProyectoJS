let nombreProducto = "Mouse Optico";
let precioProducto = 100;

const porcentajeDescuento = 0.08;
const porcentajeIgv = 0.18;

let descuento = precioProducto * porcentajeDescuento;
let subTotal = precioProducto - descuento;
let montoIgv = subTotal * porcentajeIgv;
let totalPagar = subTotal + montoIgv;

console.log("Producto: 🛒", nombreProducto);
console.log("💵Precio base: S/ ", precioProducto);
console.log("💵Descuento (8%) S/ : ", descuento);
console.log("💵SubTotal S/ :  ", subTotal);
console.log("💵IGV (18%) S/ :  ", montoIgv);
console.log("💵Total a Pagar S/: ", totalPagar);
