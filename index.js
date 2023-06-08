// Importación de clases 

import {CuentaCorriente} from './CuentaCoriente.js';
import { Cliente } from './Cliente.js';


const cliente1 = new Cliente();
cliente1.nombre = "Sidny"; 
cliente1.dni = "1134556344"
const CuentaCorriente1 = new CuentaCorriente();
CuentaCorriente1.cliente = cliente1; 
let saldo = CuentaCorriente1.verSaldo();
CuentaCorriente1.numero = "125646654";

CuentaCorriente1.depositoEnCuenta(10000);
console.log(saldo);

CuentaCorriente1.retirarEnCuenta(2000);
console.log(saldo);

const cliente2 = new Cliente();
cliente2.nombre = "Yuliana"; 
cliente2.dni = "1134556344"
const CuentaCorriente2 = new CuentaCorriente();
CuentaCorriente2.cliente = cliente2; 
let saldo2 = CuentaCorriente2.verSaldo();
CuentaCorriente2.numero = "124446654";

CuentaCorriente1.transferirACuenta(200, CuentaCorriente2); 
console.log(CuentaCorriente2.verSaldo())