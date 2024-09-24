import express from 'express'
import conexao from './infra/conexao.js'
import Conectar from './infra/Conectar.js'
import router from './routers/index.js'
import cors from 'cors'

const port = process.env.npm_package_config_port || 8080;

Conectar.init(conexao)

const app = express()
app.use(cors())

router(app, express)

app.listen(port, () => 
    console.log(`Servidor iniciado na porta ${port}`)
)