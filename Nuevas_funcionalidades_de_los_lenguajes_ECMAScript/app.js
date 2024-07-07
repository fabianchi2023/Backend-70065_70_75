//Operador exponencial

// let resultado = 2 ** 3
// let exponente = 2 
// let base = 5
// let resultado2 = base ** exponente
// console.log(resultado2);

// Includes
// const bebidas = ["mate", "agua", "gaseosa"]
// console.log(bebidas.includes("agua")); // => Me verificar que el string "agua" este o no en el array BEBIDAS

// const nombres = ["fabio", "pepe", "carlos"]
// if (nombres.includes("Fabio")){
//     console.log("El nombre se encuentra en el array")
// }else{
//     console.log("El nombre NO se encuentra en el array");
// }

//Operador NULLISH (??)
// let nombre1 
// const nombre2 = "Sarasa"
// const nombreElegido = nombre1 ?? nombre2
// console.log(nombreElegido); //=> Como nombre1 no esta definido (solo declarado), asigna el otro valor.

 // Object.entries - Object.values - Object.keys
//  const prueba = {
//     nombre : "Fabio",
//     edad : 34,
//     ciudad : "Bs As"
//  }

//  const pruebaEntries = Object.entries(prueba)
//  console.log(pruebaEntries);

//  const pruebaKeys = Object.keys(prueba)
//  console.log(pruebaKeys);

//  const pruebaValues = Object.values(prueba)
//  console.log(pruebaValues);

// Finally()

// function ejemploPromesa () {

//     return new Promise ((res, rej) => {
//         setTimeout(() => {
//             const exito = false
//             if (exito){
//                 res("Procesado con exito")
//             } else{
//                 rej("Error al consultar la base")
//             }
//         }, 3000)
//     })
// }

// ejemploPromesa()
// .then ((resultado) => {
//     console.log(resultado);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("Esto siempre se ejecuta");
// })

//Spread y Rest
// const objeto1 = {
//     propiedas1: "A",
//     propiedas2: 3,
//     propiedas3: true
// }

// let {propiedas1, propiedas2} = objeto1
// let objeto2 = {...objeto1, propiedas4 : "agregado"}
// console.log(objeto2);

// String.trim() y Array.flat()

// const mensaje = "            Aloha"
// console.log(mensaje)
// console.log(mensaje.trim())

// const arreglo = [1, 2,3, [5,6,7], 8, [10,11]]
// console.log(arreglo.flat());


class TicketManager {
    constructor (){
         this.eventos = []
         this.precioBaseGanancias = 0
    }

    getEventos (){
        return this.eventos
    }

    agregarEvento (nombre, lugar, precio, capacidad = 50, fecha = new Date()){
        precio += precio * 0.15
        const eventoID = this.eventos.length + 1
        const participantes = []
        const evento = {
            id: eventoID,
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes
        }
        this.eventos.push(evento)
    }

    agregarUsuario (eventoID, usuarioID){
        const eventoEncontrado = this.eventos.find((evento) => evento.id ===eventoID)
        if(!eventoEncontrado){
            console.log("El evento no fue encontrado");
            return
        }
        const participantes = eventoEncontrado.participantes
        const usuarioRegistrado = participantes.includes(usuarioID)
        if(usuarioRegistrado){
            console.log("El usuario ya esta registrado en el evento");
            return
        }
        participantes.push(usuarioID)
        console.log("El usuario ha sido agregado al evento");
    }

    ponerEventoEnGira (eventoID, nuevaLocalidad, nuevaFecha){
        const eventoEncontrado = this.eventos.find((evento) => evento.id === eventoID)
        if (!eventoEncontrado){
            console.log("El evento con el ID proporcionado no existe");
            return
        }

        const copiarEvento = {...eventoEncontrado}
        copiarEvento.id = this.eventos.length +1
        copiarEvento.lugar = nuevaLocalidad
        copiarEvento.fecha = nuevaFecha
        copiarEvento.participantes = []

        this.eventos.push(copiarEvento)
        console.log("El evento ha sido puesto en gira correctamente");
    }
}

const ticketManager = new TicketManager()

ticketManager.agregarEvento("Recital1", "Kempes", 5000, 10000, new Date ("2024-07-30"))
ticketManager.agregarEvento("Recital2", "Bombonera", 1000, 20000, new Date ("2024-07-31"))

const eventos = ticketManager.getEventos()

ticketManager.agregarUsuario(1, "Fabio")
ticketManager.agregarUsuario(2, "Sarasa")
ticketManager.agregarUsuario(2, "Ale")
ticketManager.agregarUsuario(2, "FAFA")
ticketManager.agregarUsuario(2, "Aleja")

ticketManager.ponerEventoEnGira(1, "Estudiantes", new Date ("2025-01-01"))

console.log(eventos);