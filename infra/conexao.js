import mysql2 from 'mysql2'

const conexao = mysql2.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "produtivi"
});

export default conexao