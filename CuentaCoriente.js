export class CuentaCorriente
{
    numero; 
    // este # hace la propieda privada, esto quere decir que solo se modifica dentro de la clase, a través de sus métodos
    #saldo; 
    agencia; 

    constructor() {
        // toda cuenta que se cree va a tener su  #saldo en 0
        this. #saldo = 0; 
        this.numero = ""; 
        this.agencia = "";
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
}