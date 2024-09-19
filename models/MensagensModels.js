import conexao from "../infra/conexao.js";

class MensagensModels{

    getAllMensagens(usersarray){
        const sql = `select id, mensagem, id_destinatario, id_remetente from mensagens 
                        where (id_remetente = ? and id_destinatario = ?)
                                or
                            (id_remetente = ? and id_destinatario = ?)
                        order by id;`

        return new Promise((resolve, reject)=>{
            conexao.query(sql, usersarray, (err, resposta)=>{
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