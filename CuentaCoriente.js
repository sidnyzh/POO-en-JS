import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta 
{
    static cantidadDeCuentas = 0; 

    constructor(cliente, numero, agencia) {
        //Super referencia al constructor de la clase padre (cuenta)
        super(cliente, numero,agencia, 0);
        //Es una sola instancia, no tiene sentido indicarle  "this" no se puede acceder de sta forma, entonces su valor, se atribuye a la clase.
        CuentaCorriente.cantidadDeCuentas++; 

    }
 //sobreescritura de método 
    prueba(){
        //para acceder a los métodos padre
        super.prueba();
    }
}