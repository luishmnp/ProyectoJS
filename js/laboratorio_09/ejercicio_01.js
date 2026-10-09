let deuda = 4500.00;
let pagoMensual = 500.00;
let mesesTranscurridos = 1;
console.log(":::::::CRONOGRAMA DE PAGOS:::::::")

while (deuda > 0){

    if (deuda >= pagoMensual){
        deuda -= pagoMensual;
        console.log(`Mes ${mesesTranscurridos}:pago de S/ ${pagoMensual.toFixed(2)}. saldo restante: S/ ${deuda.toFixed(2)}`);
        mesesTranscurridos++
    }

    else{
        console.log(`Mes ${mesesTranscurridos}: Pago Final de S/ ${deuda.toFixed(2)}. Saldo restante: S/ 0.00 `);
        }
}

console.log("Deuda liquidada en su totalidad.");