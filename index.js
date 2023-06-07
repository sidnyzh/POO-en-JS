// Definición de clases 
class Cliente 
{
    nombre; 
    dni;
    RUT;
    CuentasCorrientes;
}

class CuentaCorriente
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
    verSAldo(){
        return this.#saldo;
    }
}


const cliente1 = new Cliente();
const CuentaCorriente1 = new CuentaCorriente();
let saldo = CuentaCorriente1.verSAldo();
cliente1.nombre = "sidny"; 
CuentaCorriente1.numero = "125646654";

CuentaCorriente1.depositoEnCuenta(10000)
console.log(saldo);

CuentaCorriente1.retirarEnCuenta(2000);
console.log(saldo)
