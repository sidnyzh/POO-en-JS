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
    saldo; 
    agencia; 

    depositoEnCuenta(valor){
        this.saldo = this.saldo + valor; 
    }
}
const cliente1 = new Cliente();
const CuentaCorriente1 = new CuentaCorriente();

cliente1.nombre = "sidny"; 
CuentaCorriente1.numero = "125646654";
CuentaCorriente1.saldo = "10000000";

CuentaCorriente1.depositoEnCuenta(10000)
console.log(CuentaCorriente1.saldo);
