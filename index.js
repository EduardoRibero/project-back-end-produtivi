import express from 'express'

import conexao from './infra/conexao.js'
import Conectar from './infra/Conectar.js'

import UsersModels from './models/UsersModels.js'
import MensagensModels from './models/MensagensModels.js'


Conectar.init(conexao)
UsersModels.getAllUsers()
MensagensModels.getAllMensagens()

const app = express()

app.listen(3000, () => 
    console.log('Servidor iniciado na porta 3000')
)