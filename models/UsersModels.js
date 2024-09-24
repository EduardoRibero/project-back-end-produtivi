import conexao from "../infra/conexao.js";

class UsersModels {

    getUser() {
        const sql = 'select * from usuarios;'

        return new Promise((resolve, reject) => {

            conexao.query(sql, (err, resposta) => {
                if (err) {
                    console.log("Erro ao tentar pegar todos os usuarios" + err)
                    reject(err)
                }
                resolve(resposta)
            })

        })
    }

    getAllUsers() {
        const sql = `WITH user_messages AS (
                        SELECT
                            m.id,
                            m.mensagem,
                            m.insert_time,
                            m.id_remetente AS user_id
                        FROM mensagens m
                        where status_msg <> 'deletado'
                        UNION ALL
                        SELECT
                            m.id,
                            m.mensagem,
                            m.insert_time,
                            m.id_destinatario AS user_id
                        FROM mensagens m
                        where status_msg <> 'deletado'
                    ),
                    ranked_messages AS (
                        SELECT
                            user_id,
                            mensagem,
                            insert_time,
                            ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY insert_time DESC) AS rn
                        FROM user_messages
                    )
                    SELECT
                        u.id,
                        u.nome,
                        rm.mensagem,
                        rm.insert_time
                    FROM
                        usuarios u
                    JOIN
                        ranked_messages rm ON u.id = rm.user_id
                    WHERE(
                        rm.rn = 1 and u.id <> 1)
                    ORDER BY
                        rm.insert_time DESC;`

        return new Promise((resolve, reject) => {

            conexao.query(sql, (err, resposta) => {
                if (err) {
                    console.log("Erro ao tentar pegar todos os usuarios" + err)
                    reject(err)
                }
                resolve(resposta)
            })

        })
    }

    getUserById(id) {
        const sql = `select * from usuarios where id  = ?;`

        return new Promise((resolve, reject) => {

            conexao.query(sql, [id], (err, resposta) => {
                if (err) {
                    console.log("Erro ao tentar pegar usuario por ID" + err)
                    reject(err)
                }
                resolve(resposta)
            })

        })
    }

    updateUser(userNew, id) {
        const sql = `update usuarios set nome = ?, telefone= ? where id = ?;`

        return new Promise((resolve, reject) => {

            conexao.query(sql, [userNew.nome, userNew.telefone, id], (err, resposta) => {
                if (err) {
                    console.log("Erro ao tentar atualizar usuario" + err)
                    reject(err)
                }
                resolve(resposta)
            })

        })
    }

    postUser(userNew) {
        const sql = `insert into usuarios (nome, telefone) value (? , ?);`

        return new Promise((resolve, reject) => {

            conexao.query(sql, [userNew.nome, userNew.telefone], (err, resposta) => {
                if (err) {
                    console.log("Erro ao tentar Criar usuario" + err)
                    reject(err)
                }
                resolve(resposta)
            })

        })
    }

    deletUserById(id) {
        const sql = `update usuarios set status_user = 'deletado' where id = ?;`

        return new Promise((resolve, reject) => {

            conexao.query(sql, [id], (err, resposta) => {
                if (err) {
                    console.log("Erro ao tentar apagar usuario por ID" + err)
                    reject(err)
                }
                resolve(resposta)
            })

        })
    }
}

export default new UsersModels()