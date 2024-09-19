import { Router } from "express";
import UsersControllers from "../controllers/UsersControllers.js";
import MensagensControllers from "../controllers/MensagensControllers.js";

const router = Router()

router.get('/users', (req, res)=>{
    const resposta = UsersControllers.getAllUsers()
    resposta.then((resposta)=> res.status(200).json(resposta))
            .catch((err)=> res.status(400).json(err))
})

router.get('/mensagens', (req, res)=>{
    const idUsers = req.body
    console.log(idUsers)
    const resposta = MensagensControllers.getMensagensByUsers(idUsers.value)
    resposta.then((resposta)=> res.status(200).json(resposta))
            .catch((err)=> res.status(400).json(err))
})


export default router