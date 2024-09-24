import { Router } from "express";
import UsersControllers from "../controllers/UsersControllers.js";
import MensagensControllers from "../controllers/MensagensControllers.js";

const router = Router()

router.get('/users', (req, res)=>{
    const resposta = UsersControllers.getAllUsers()
    resposta.then((resposta)=> res.status(200).json(resposta))
            .catch((err)=> res.status(400).json(err))
})

router.get('/users/:id', (req, res)=>{
    const idUser = req.params
    const id = parseInt(idUser.id)
    const resposta = UsersControllers.getUserById(id)
    resposta.then((resposta)=> res.status(200).json(resposta))
            .catch((err)=> res.status(400).json(err))
})

router.get('/mensagens/:id', (req, res)=>{
    const idUser = req.params
    const id = parseInt(idUser.id)
    const arrayIds = [1, id, id, 1]
    const resposta = MensagensControllers.getMensagensByUsers(arrayIds)
    resposta.then((resposta)=> res.status(200).json(resposta))
            .catch((err)=> res.status(400).json(err))
})

router.post('/mensagens', (req, res)=>{
    const mensagem = req.body
    const resposta = MensagensControllers.postNewMessage(mensagem.msg, mensagem.id)
    resposta.then((resposta) => res.status(201).json(resposta))
            .catch((err)=> res.status(400).json(err))
})


export default router