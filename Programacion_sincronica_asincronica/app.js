// Arrow functions

// const saludar = ()=> {
//     console.log(`Hola developers`);
// }

// saludar()

// const sumar = (a,b) => {

//     return a+b
// }

// console.log(sumar(2,4))

// Funciones con una sola expresion

// const duplicar = (num) => num * 2

// console.log(duplicar(3))

// Funciones como metodos en un objeto

// const persona = {
//     nombre: "FalebiDev",
//     saludar: function(){
//         console.log(`Hola, mi nombre es ${this.nombre}`);
//     }
// }

// persona.saludar()

// CALLBACKS

// function obtenerDatosDelUsuario (id, callback){
//     setTimeout(()=> {
//         const usuario = {
//             id: id,
//             nombre: "Fabio",
//             correo: "fabio@bianchi.com"
//         }
//         callback(usuario)
//     }, 5000)
// }

// function mostrarDatosDelUsuario (usuario){
//     console.log(`Nombre: ${usuario.nombre}, correo: ${usuario.correo}`);
// }

// obtenerDatosDelUsuario(1, mostrarDatosDelUsuario )

// PROMISES

// const promesa = new Promise ((res,rej)=> {
//     setTimeout(()=>{
//         const respuesta = true
//         if (respuesta){
//             res ("Esto entrara como RESOLVED")
//         }else{
//             rej ("Esto indicara el REJECTED")
//         }
//     }, 3000)
// })

// promesa.then((mensaje) => {
//     console.log(mensaje)
// }).catch((error) => {
//     console.log("Promesa incumplida", error);
// })

// HANDS ON LAB

function suma (a,b) {
    return new Promise ((res, rej)=> {
        if (a === 0 || b === 0){
            rej ("Operacion innecesaria")
        } else if (a +b < 0){
            rej ("La calculadora solo debe devolver valores positivos")
        } else {
            res (a+b)
        }
    })
}

function resta (minuendo, sustraendo){
    return new Promise ((res, rej) => {
        if (minuendo === 0 || sustraendo === 0){
            rej ("Operacion invalida")
        } else if (minuendo - sustraendo < 0){
            rej ("La calculadora solo debe devolver valores positivos")
        } else {
            res (minuendo-sustraendo)
        }
    })
}

function multiplicacion (factor1, factor2) {
    return new Promise ((res,rej) => {
        if (factor1 < 0 || factor2 < 0){
            rej ("La calculadora solo debe devolver valores positivos")
        } else {
            res (factor1 * factor2)
        }
    })
}

function division (dividendo, divisor) {
    return new Promise ((res,rej) => {
        if (divisor === 0){
            rej ("No se puede dividir por 0")
        }else {
            res (dividendo / divisor )
        }
    })
}

// Funcion asincrona para realizar los calculos

async function calculos (){
    try {
        const resultadoSuma = await suma(5,7)
        console.log("Resultado de la suma es", resultadoSuma)
        const resultadoResta = await resta(10,3)
        console.log("Resultado de la resta es", resultadoResta)
        const resultadoMultiplicacion = await multiplicacion (4,0)
        console.log("Resultado de la multiplicacion", resultadoMultiplicacion)
        const resultadoDivision = await division (10,5)
        console.log("Resultado de la division es ", resultadoDivision)

    } catch (error){
        console.log(error);
    }
}

calculos()

