import { Cliente } from "./Cliente.js";

export class CuentaCorriente
{
    #cliente;
    numero; 
    // este # hace la propieda privada, esto quere decir que solo se modifica dentro de la clase, a través de sus métodos
    #saldo; 
    agencia; 
 
    set cliente(valor){
        // Protege la clase de forma que este atributo sólo pueda ser una instancia de la clase cliente 
        if(valor instanceof Cliente)
        this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    constructor(cliente, numero, agencia) {
        // toda cuenta que se cree va a tener su  #saldo en 0
        //this.#cliente = null;  //esto se hace para eviar que cada vesz que la cuenta se cree, cree un nuevo cliente, ya que el cliente debe ser de la clase cliente 
        this.numero = numero;
        this.agencia = agencia; 
        this. #saldo = 0; 

    }

    depositoEnCuenta(valor){
        return this. #saldo += valor; 
    }

    retirarEnCuenta(valor){
        if (valor > this. #saldo) {
            return "El monto a retirar supera el  #saldo diponible";
        }
        else{
            this.#saldo = this. #saldo -= valor; 
            return this.#saldo;
        }
    }
    verSaldo(){
        return this.#saldo;
    }

    transferirACuenta(valor, cuentaDestino){
        this.retirarEnCuenta(valor); 
        cuentaDestino.depositoEnCuenta(valor); 
    }
}