<?php

$tarifaPorHora = 25.00;
$horasEstimadas = 10;

$costoDominio = 15.00;
$costoHosting = 60.00;
$costoFijo = $costoDominio + $costoHosting;

$costoDesarrollo = $tarifaPorHora * $horasEstimadas;

$presupuestoTotal = $costoDesarrollo + $costoFijo;

echo "----------------------------------------" . "<br>";
echo "::::::DETALLE DE COTIZACIÓN: LANDING PAGE::::::" . "<br>";
echo "----------------------------------------" . "<br>";
echo "Tarifa por hora: $ " . $tarifaPorHora . "<br>";
echo "Horas estimadas: " . $horasEstimadas . " horas" . "<br>";
echo "Costo de Desarrollo: $ " . $costoDesarrollo . "<br>";
echo "----------------------------------------" . "<br>";
echo "Costo Dominio: $ " . $costoDominio . "<br>";
echo "Costo Hosting: $ " . $costoHosting . "<br>";
echo "Total Costos Fijos: $ " . $costoFijo . "<br>";
echo "----------------------------------------" . "<br>";
echo "PRESUPUESTO TOTAL A PAGAR: $ " . $presupuestoTotal . "<br>";
echo "----------------------------------------" . "<br>";

?>