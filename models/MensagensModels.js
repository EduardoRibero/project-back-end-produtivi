import conexao from "../infra/conexao.js";

class MensagensModels{

    getMensagensByUsers(usersarray){
        const sql = `select id, mensagem, id_destinatario, id_remetente, insert_time from mensagens 
                        where (id_remetente = ? and id_destinatario = ?  and status_msg <> 'deletado')
                                or
                            (id_remetente = ? and id_destinatario = ?  and status_msg <> 'deletado')
                        order by id;`

        return new Promise((resolve, reject)=>{
            conexao.query(sql, usersarray, (err, resposta)=>{
                if(err){
                    console.log("Erro ao tentar pegar todas as mensagens" + err)
                    reject(err)
                }
                resolve(resposta)
            })
        })
    }

    postNewMessage(msg, id){
        const sql = `insert into mensagens(mensagem, id_destinatario, id_remetente) values (?, ?, ?);`
        
        return new Promise((resolve, reject)=>{
            conexao.query(sql, [msg, parseInt(id), 1], (err, resposta)=>{
                if(err){
                    console.log(`Erro ao tentar enviar nova mensagem : ${err}`)
                    reject(err)
                }
                resolve(resposta)
            })
        })
    }

    deleteMsgById(id){
        const sql = `update mensagens set status_msg = 'deletado' where id = ?;`

        return new Promise((resolve, reject) => {

            conexao.query(sql,[id], (err, resposta) => {
                if (err) {
                    console.log("Erro ao tentar apagar usuario por ID" + err)
                    reject(err)
                }
                resolve(resposta)
            })

        })
    }
    
}

export default new MensagensModels()