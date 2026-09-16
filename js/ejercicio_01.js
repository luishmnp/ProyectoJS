
// FASE DE ENTRADA: DECLARACION DE VARIABLES:
const varones = 255;
const mujeres = 184;f

// FASE DE PROCESO: LA LOGICA U OPERACION
const totalPersonas = varones + mujeres;
let porcentajeVarones = varones / totalPersonas;
let porcentajeMujeres = mujeres / totalPersonas;

// FASE DE SALIDA: SE HACE LAS IMPRESIONES EN CONSOLA
console.log("Total de Colaboradores: ", totalPersonas);
console.log("Porcentaje de varones: ", porcentajeVarones.toFixed(2), " %");
console.log("Porcentaje de mujeres: ", porcentajeMujeres.toFixed(2), " %");
