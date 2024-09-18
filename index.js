import express from 'express'

import conexao from './infra/conexao.js'
import Conectar from './infra/Conectar.js'

Conectar.init(conexao)

const app = express()

app.listen(3000, () => 
    console.log('Servidor iniciado na porta 3000')
)