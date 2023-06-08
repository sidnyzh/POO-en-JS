// Importación de clases 

import {CuentaCorriente} from './CuentaCoriente.js';


// const cliente1 = new Cliente();
const CuentaCorriente1 = new CuentaCorriente();
let saldo = CuentaCorriente1.verSaldo();
CuentaCorriente1.numero = "125646654";

CuentaCorriente1.depositoEnCuenta(10000);
console.log(saldo);

CuentaCorriente1.retirarEnCuenta(2000);
console.log(saldo);
