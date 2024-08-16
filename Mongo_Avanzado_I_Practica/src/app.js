
import express from 'express'
import mongoose from 'mongoose'
// import userModel from './models/users.js'
import router from './routes/users.routers.js'
import studentModel from './models/student.js'
import courseModel from './models/courses.js'

const app = express()
const PORT = 8080

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const enviroment = async () => {
    await mongoose.connect("mongodb+srv://fabiobianchi:Ocasa2009@cluster0.dx5auig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    // let response = await userModel.find({first_name: "Orly"}).explain("excutionStats")
    // console.log(response);
    // await studentModel.create({
    //     first_name: "Pepe",
    //     last_name: "Perez",
    //     email: "Pepe@mail.com",
    //     gender: "Male"
    // })
    // await courseModel.create({
    //     title:"Programacion backend",
    //     description: "Curso avanzado",
    //     difficulty: 5,
    //     topics:["FS", "express", "mongodb"],
    //     professor:"El panza"
    // })
    let student = await studentModel.findOne({_id:"66bd7f3f6581581ea92db724"}).populate("courses.course")
    console.log(JSON.stringify(student,null, "\t"));
    
    // student.courses.push({course:"66bd811c2c2512973817e0b8"})
    // let result = await studentModel.updateOne({_id:"66bd7f3f6581581ea92db724"}, student)
    // console.log(student);
}

enviroment()

app.use("/", router)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
    
    