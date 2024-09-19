import express from 'express'
import conexao from './infra/conexao.js'
import Conectar from './infra/Conectar.js'
import router from './routers/index.js'
import cors from 'cors'

Conectar.init(conexao)

const app = express()
app.use(cors())

router(app, express)

app.listen(3000, () => 
    console.log('Servidor iniciado na porta 3000')
)