// FASE DE ENTRADA: DECLARACION DE VARIABLES
let nombreObrero = "Jorge Calero";
let cantidadPrendas = 60;
 
// FASE DE PROCESO: OPERACIONES Y CÁLCULOS
const tarifaPrendas = 10;
let sueldoBruto = cantidadPrendas * tarifaPrendas;
 
// Descuentos y bonificación (basados en el sueldo bruto)
let descuentoImpuestos = sueldoBruto * 0.03; // 3%
let descuentoSeguro = sueldoBruto * 0.02; // 2%
let descuentoSolidaridad = sueldoBruto * 0.01; // 1%
let bonificacion = sueldoBruto * 0.05; // 5%
 
// Cálculo del Sueldo Neto
let sueldoNeto =
  sueldoBruto -
  descuentoImpuestos -
  descuentoSeguro -
  descuentoSolidaridad +
  bonificacion;
 
// FASE DE SALIDA: IMPRESIONES EN CONSOLA
console.log("Obrero:", nombreObrero);
console.log("Prendas confeccionadas:", cantidadPrendas);
console.log(" Sueldo Bruto S/:", sueldoBruto);
console.log("---------------------------------------------------");
console.log(" Descuento Impuestos (3%) S/:", descuentoImpuestos);
console.log(" Descuento Seguro (2%) S/:", descuentoSeguro);
console.log(" Descuento Solidaridad (1%) S/:", descuentoSolidaridad);
console.log(" Bonificación (5%) S/:", bonificacion);
console.log("---------------------------------------------------");
console.log(" Sueldo Neto a Pagar S/:", sueldoNeto.toFixed(2));
 
 