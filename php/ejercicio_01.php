<?php
//FASE DE ENTRADA, (DECLARACION DE VARIABLES Y PREGUNTAS)
// let producto = "Zapatillas Adidas";

$producto = "Zapatillas Adidas";
// const curso = "Logica y programacion";
$precio = 350; 
$descuento = 0.08;
$igv = 0.18;

//FASE DE PROCESO: ES LA LOGICA DEL PROYECTO O DEL PROGRAMA
$precioIGV = $precio * $igv;
$precioDescuento = $precio* $descuento;
$precioFinal = $precio + $precioIGV - $precioDescuento;

//FASE DE SALIDA: Impresion de resultados.
//Modo javascript: console.log("El precio de producto es: ", precio);
echo "El precio del producto es: S/ ". $precio. "<br>";
echo "El IGV es: S/ " . $precioIGV. "<br>";
echo "El descuento es S/ " . $precioDescuento. "<br>";
echo "El precio final es: S/" . $precioFinal. "<br>";

?>