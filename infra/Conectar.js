class Conectar{
    init(conexao){
        this.conexao = conexao
        this.createTableUsers()
        this.createTableMensagens()
    }

    createTableUsers(){
        const sql = `create table if not exists usuarios(
                        id int auto_increment primary key,
                        nome varchar(255) not null,
                        telefone varchar(30) not null,
                        insert_time  timestamp default current_timestamp,
                        update_time timestamp default current_timestamp on update current_timestamp,
                        status_user enum ('deletado', 'ativo', 'inativo')  default 'ativo'
                    );`
        
        this.conexao.query(sql, (err)=>{
            if(err){
                console.log("Erro ao criar a tabela tarefas" + err)
                return
            }
        })
    }

    createTableMensagens(){
        const sql = `create table if not exists mensagens(
                        id int auto_increment primary key,
                        mensagem longtext not null,
                        insert_time  timestamp default current_timestamp,
                        update_time timestamp default current_timestamp on update current_timestamp,
                        id_destinatario int,
                        foreign key (id_destinatario) references usuarios(id),
                        id_remetente int,
                        foreign key (id_remetente) references usuarios(id),
                        status_msg enum ('deletado', 'ativo', 'inativo')  default 'ativo'
                    );`
        
        this.conexao.query(sql, (err)=>{
            if(err){
                console.log("Erro ao criar a tabela tarefas" + err)
                return
            }
        })
    }
}

export default new Conectar()