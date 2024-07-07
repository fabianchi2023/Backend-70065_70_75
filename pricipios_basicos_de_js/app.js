//VARIABLES
// let comision = 70065
// console.log(comision);

//FUNCIONES

// function sumar (a,b) {
//     return a+b
// }

// console.log(sumar(2,23))

// const restar =  (a,b) => {
//    return a-b
// }

// console.log(restar(4,3))

// const saludar = function (nombre) {
//     console.log(`Hola ${nombre}`)
// }

// saludar("Fabio")

//CLASES
//Atributos = Caracteristicas
//Metodos() = Acciones

// class Persona {
//     constructor (nombre, edad){
//         this.nombre = nombre
//         this.edad = edad
//     }   
    
//     saludar (){
//         console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`)
//     }
// }

// const persona1 = new Persona ("Fabio", 34)

// persona1.saludar()

class Contador {

    static cuentaGlobal = 0
    constructor (responsable) {
        
        this.responsable = responsable
        this.cuentaIndividual = 0     

    }

    getResponsable(){
        return this.responsable
    }

    obtenerCuentaIndividual (){
        return this.cuentaIndividual       
    }

    static obtenerCuentaGlobal (){
        return Contador.cuentaGlobal
    }

    contar(){
        this.cuentaIndividual++
        Contador.cuentaGlobal++
    }
}

const contador1 = new Contador ("Fabio")
console.log(contador1.getResponsable())


contador1.contar()
contador1.contar()
contador1.contar()
contador1.contar()
contador1.contar()


console.log(contador1.obtenerCuentaIndividual())
console.log(Contador.obtenerCuentaGlobal());

