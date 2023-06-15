import { Cuenta } from "./Cuenta";

export class CuentaDeAhorros extends Cuenta {
    static cantidadDeCuentas = 0; 

    constructor(cliente, numero, agencia, saldo) {
        //Super referencia al constructor de la clase padre (cuenta)
        super(cliente, numero,agencia, saldo);
        //Es una sola instancia, no tiene sentido indicarle  "this" no se puede acceder de sta forma, entonces su valor, se atribuye a la clase.
        CuentaCorriente.cantidadDeCuentas++; 

    retirarDeCuenta(valor) 
    {

        valor = valor * 1.2; 
        //llamo al método padre cuando lo necesito 

        super.retirarDeCuenta(valor);
    }
    }
}