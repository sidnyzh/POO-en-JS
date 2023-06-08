// Importación de clases 

import {CuentaCorriente} from './CuentaCoriente.js';
import {Cliente} from './Cliente.js';


const cliente1 = new Cliente("Sidny", "1134556344", "4636");
const CuentaCorriente1 = new CuentaCorriente( cliente1, "125646654", "12" );
let saldo = CuentaCorriente1.verSaldo();

CuentaCorriente1.depositoEnCuenta(10000);
console.log(saldo);

CuentaCorriente1.retirarEnCuenta(2000);
console.log(saldo);

//const cliente2 = new Cliente();
//Al no definir los parametros quedan como undefined

const cliente2 = new Cliente("Yuliana", "1134556344", "54355");
const CuentaCorriente2 = new CuentaCorriente(cliente2, "124446654", "12" );
let saldo2 = CuentaCorriente2.verSaldo();

CuentaCorriente1.transferirACuenta(200, CuentaCorriente2); 
console.log(CuentaCorriente2.verSaldo())