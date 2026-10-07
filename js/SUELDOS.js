//1. Primero, vamos a crear un arreglo
//con los sueldos de los Colaboradores

const sueldoColaboradores = [
    2500, 1300, 4800, 5300, 1200, 5800, 1380, 6899, 4578, 5487,
    3200, 1500, 2800, 4100, 1900, 6200, 2350, 5100, 3900, 4700,
    1400, 2900, 3600, 5500, 1800, 6400, 2100, 4300, 3700, 5000,
    2600, 1600, 3100, 4900, 2200, 5900, 1750, 6100, 3400, 4600,
    2700, 1250, 3300, 5200, 2000, 6300, 2400, 4400, 3800, 5600
];
const porcentajeAguinaldo = 0.20;

for (let i = 0; i < sueldoColaboradores.length; i++){
    let sueldoBase = sueldoColaboradores[i];
    let aguinaldo = sueldoBase * porcentajeAguinaldo;
    let totalPagar = sueldoBase + aguinaldo;

    console.log("Sueldo Base: ", sueldoBase);
    console.log("Aguinaldo: ", aguinaldo.toFixed(2));
    console.log("Total a Pagar: ", totalPagar.toFixed(2));
}