import conexao from "../infra/conexao.js";

class UsersModels{

    getAllUsers(){
        const sql = `select * from usuarios;`
        return new Promise((resolve, reject)=>{

            conexao.query(sql, (err, resposta)=>{
                if(err){
                    console.log("Erro ao criar a tabela tarefas" + err)
                    reject(err)
                }
                resolve(resposta)
                console.log(resposta)
            })

        })
    }
}

export default new UsersModels()