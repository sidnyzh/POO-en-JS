export class Cuenta{
     // este # hace la propieda privada, esto quere decir que solo se modifica dentro de la clase, a través de sus métodos
    #cliente;
    #saldo;  
//EN js, los atrbutos publicos no se tienen que declarar en las propiedades explicitamente, 
//con que estén en el constuctor basta 
    constructor( cliente, numero, agncia, saldo){
        this.agencia = agencia; 
        this.numero = numero; 
        this.#cliente = cliente;   
         this.#saldo = saldo;
     }

     set cliente(valor){
        // Protege la clase de forma que este atributo sólo pueda ser una instancia de la clase cliente 
        if(valor instanceof Cliente)
        this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

     depositoEnCuenta(valor){
        return this. #saldo += valor; 
    }

    retirarEnCuenta(valor){

        if (valor > this.#saldo) {
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