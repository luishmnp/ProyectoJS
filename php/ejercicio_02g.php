<?php
//FASE DE ENTRADA
$precioMonitor = 500;
$cantidad = 4;

//FASE DE DESARROLLO
$subtotal = $precioMonitor * $cantidad;

$descuento = 0;
if ($cantidad > 3) {
    $descuento = $subtotal * 0.10;
}
$subtotalDescuento = $subtotal - $descuento;

$IGV = $subtotalDescuento * 0.18;

$total = $subtotalDescuento + $IGV;
//FASE DE SALIDA
echo "Cantidad comprada: " . $cantidad . "<br>";
echo "Precio unitario: S/. " . $precioMonitor . "<br>";
echo "Subtotal inicial: S/. " . $subtotal . "<br>";
echo "Descuento aplicado: S/. " . $descuento . "<br>";
echo "Subtotal con descuento: S/. " . $subtotalDescuento . "<br>";
echo "IGV (18%): S/. " . $IGV . "<br>";
echo "TOTAL A PAGAR: S/. " . $total . "<br>";


?>
