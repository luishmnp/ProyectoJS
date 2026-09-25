<?php

$lotesLicencia = 10;
$costoLicencia = 120;

$compraTotal = $lotesLicencia * $costoLicencia;


if ($compraTotal > 5000) {
    $proveedor = 0; 
} else {
    $proveedor =150;
}

echo "::::::::::::LICENCIAS DE SOFTWARE::::::::::" . "<br>";
echo "costo de la licencia: S/" . $costoLicencia . "<br>";
echo "cantidad de lotes: " . $lotesLicencia . "<br>";
echo "total a pagar: S/" . $compraTotal . "<br>";
echo "costo a pagar al flete: S/" . $proveedor . "<br>";


?>