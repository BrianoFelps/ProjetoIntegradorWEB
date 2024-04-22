import mysql from 'mysql2';

export const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "ProjetoIntegradorWEB"
})

db.connect((err) => {
    if(err){
        console.log(`Erro de conexão ao banco de dados: ${err}`);
        return;
    }

    console.log(`Conexão bem-sucedida!`)
})