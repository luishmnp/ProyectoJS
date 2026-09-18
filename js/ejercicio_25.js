const presupuestoAnual = 10000;
const urgencias = 37;
const pediatria = 42;
const traumatologia = 21;

let porcentajeTotal = presupuestoAnual / 100
let porcentaje = porcentajeTotal * urgencias
let porcentaje2 = porcentajeTotal * pediatria
let porcentaje3 = porcentajeTotal * traumatologia

console.log("PRESUPUESTO TOTAL S/: ", presupuestoAnual);
console.log("PRESUPUESTO URGENCIAS:", porcentaje, );
console.log("PRESUPUESTO PEDIATRIA: ", porcentaje2, );
console.log("PRESUPUESTO TRAUMATOLOGIA: ", porcentaje3, );