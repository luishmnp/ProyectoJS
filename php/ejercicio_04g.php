<?php

$trabajador ="Arias";
$boletaPago =1400 ;
$asignacionFamiliar = 0.10;
$ONP =0.13 ;

$totalIngresos =$boletaPago * $asignacionFamiliar;

$pagoFinal = $totalIngresos - $ONP;


echo "::::::::::BOLETA DE PAGO:::::::::" . "<br>";
echo "pago inicial :S/" . $boletaPago . "<BR>";
echo "asignacion familiar:" . $asignacionFamiliar . "<br>";
echo "ONP :" . $ONP . "<br>";
echo "pago final: S/" . $pagoFinal . "<br>";




?>