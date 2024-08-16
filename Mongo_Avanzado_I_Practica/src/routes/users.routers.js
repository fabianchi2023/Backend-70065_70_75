import { Router }  from "express";
import studentModel from '../models/student.js'

const router = Router()

router.get("/", async(req, res)=>{
    try {
        let users = await studentModel.find()
        res.send({result: "success", payload: users})
    } catch (error) {
        console.error(error)
    }
})

router.post("/", async(req, res)=>{
        try {
            const users = req.body; // Suponiendo que el cuerpo de la solicitud contiene un array de productos
            const resultado = await studentModel.insertMany(users);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

router.put("/:uid",async(req,res)=> {
    let {uid} = req.params
    let studentToReplace = req.body
    let resultado = await studentModel.updateOne({_id:uid}, studentToReplace)
    res.send({result:"Success", payload: resultado})
})

router.delete("/:uid",async(req,res)=> {
    let {uid} = req.params
    let resultado = await studentModel.deleteOne({_id:uid},)
    res.send({result:"Success", payload: resultado})
})
export default router