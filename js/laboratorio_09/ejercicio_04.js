const carrito = [80, 150, 50, 200, 100]; 

let totalAPagar = 0;

for (let i = 0; i < carrito.length; i++) {
    let precio = carrito[i];

    if (precio > 100) {
        let descuento = precio * 0.15;
        let precioConDescuento = precio - descuento;
        totalAPagar = totalAPagar + precioConDescuento;
        console.log(`Artículo ${i + 1}: S/ ${precio} -> ¡Aplica 15% de descuento! Precio final: S/ ${precioConDescuento}`);
    } else {
        
        totalAPagar = totalAPagar + precio;
        console.log(`Artículo ${i + 1}: S/ ${precio} -> No aplica descuento.`);
    }
}

console.log("----------------------------------------");
console.log(`TOTAL FINAL A PAGAR: S/ ${totalAPagar}`);