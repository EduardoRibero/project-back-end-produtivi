import conexao from "../infra/conexao.js";

class MensagensModels{
    getAllMensagens(){
        const sql = `select * from mensagens;`

        return new Promise((resolve, reject)=>{
            conexao.query(sql, (err, resposta)=>{
                if(err){
                    console.log("Erro ao tentar pegar todas as mensagens" + err)
                    reject(err)
                }
                resolve(resposta)
                console.log(resposta)
            })
        })
    }
}

export default new MensagensModels()