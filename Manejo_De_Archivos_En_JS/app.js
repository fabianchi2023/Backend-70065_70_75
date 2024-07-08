//importacion de dependencias:
// const fs = require("fs") // => Para utilizacion de los metodos de manera sincronica
const fs = require("fs").promises // => Para utilizacion de funciones con promsas

//writeFileSync = Escritura de un archivo de manera sincronica
//readFileSync = Lectura de un archivo de manera sincronica
//appendFileSync = Actualizar un archivo de manera sincronica
//unlinkSync = Eliminar un archivo de manera sincronica
//mkdirSync = Crear carpetas de manera sincronica

// const data = "Contenido para escribir en un archivo"

//  try {
//      fs.writeFileSync('MiArchivo.txt', data)
//      console.log("Archivo creado correctamente");
//  } catch (error) {
//      console.log("Error al escribir el archivo" , error);
//  }

// try {
//     const data = fs.readFileSync('MiArchivo.txt', "utf-8")
//     console.log("Contenido para mostrar.", data);
// } catch (error) {
//     console.error("Error al leer el archivo", error);
// }

// const otraInfo = "Informacion actualizada para el archivo de texto"
// try {
//     fs.appendFileSync("MiArchivo.txt", otraInfo)
//     console.log("Archivo actualizado con exito");
// } catch (error) {
//     console.error("Error al actualizar el archivo", error);
// }

// try {
//     fs.unlinkSync("MiArchivo.txt")
//     console.log("Archivo eliminado con exito");
// } catch (error) {
//     console.error("No se puede eliminar elñ archivo", error);
// }

//FS CON CALLBACKS
//Implementacion con promesas y funciones asincronas

// async function readFile (){
//     try {
//         const data = await fs.readFile("archivo.txt", "utf-8")
//         console.log(data);
//     } catch (error) {
//         console.error("Error al leer el archivo", error);
//     }
// }

// readFile()

// async function writeFile (){
//     const dataParaEscribir = "Informacion para declarar en el archivo"
//     try {
//         await fs.writeFile("archivo.txt", dataParaEscribir)
//         console.log("Archivo creado");
//     } catch (error) {
//         console.error("No se pudo generar el archivo", error);
//     }
// }

// writeFile()

// async function appendFile () {
//     const dataParaActualizar = "Estoy agregando data a mi archivo con APPEND"
//     try {
//         await fs.appendFile("archivo.txt", dataParaActualizar)
//         console.log("Datos del archivo actualizados");
//     } catch (error) {
//         console.error("No se pudo actualizar el archivo");
//     }
// }

// appendFile()

