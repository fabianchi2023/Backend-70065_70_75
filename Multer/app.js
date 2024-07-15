
import express, { json, urlencoded } from 'express'
import {fileURLToPath} from "url"
import { dirname, join } from 'path'
import multer  from 'multer'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

//Crear una carpeta "descargas"
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, path.resolve(__dirname, "./descargas"))
    },
    filename:(req,file,cb) =>{
        const timeStamp = Date.now()
        const originalName = file.originalname
        const extension = path.extname(originalName)
        cb(null, `${timeStamp} - ${originalName}`)
    }
})

const upload = multer({storage})

const app = express() //=> Toda la funcionalidad que nos da el modulo EXPRESS lo asigno a una variable.
const PORT = 8080

//MIDDLEWARES
app.use(express.json()) //=> Como indica el metodo, ahora el servidor podra recibir json's al momento de la peticion.
// Servira para cuando necesite enviar informacion desde el BODY. Lo usamos cuando creamos un ENDPOINT con POST.
app.use(express.urlencoded({extended: true})) //=> Permite que se pueda enviar informacion tambien desde la URL.



app.use(express.static(path.join(__dirname, "public")))

app.post('/upload', upload.single("archivo"), (req, res)=>{
    res.json({msg: "Archivo subido exitosamente"})
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})