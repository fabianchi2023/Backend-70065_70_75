
import express, { json, urlencoded } from 'express'

const app = express() //=> Toda la funcionalidad que nos da el modulo EXPRESS lo asigno a una variable.
const PORT = 8080

app.use(json())
app.use(urlencoded({extended: true}))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})