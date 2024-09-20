import conexao from "../infra/conexao.js";

class UsersModels{

    getAllUsers(){
        const sql = `select * from usuarios where id <> 1;`
        return new Promise((resolve, reject)=>{

            conexao.query(sql, (err, resposta)=>{
                if(err){
                    console.log("Erro ao tentar pegar todos os usuarios" + err)
                    reject(err)
                }
                resolve(resposta)
            })

        })
    }
}

export default new UsersModels()