// As chaves servem a importar a constante do arquivo
import { db } from '../database/db.js';

// O underline é o endpoint, esperando informação, sem necessidade do corpo
// aqui a requisição não precisa de processamento, por isso é omitida
export const getPages = (_, res) => {
    const sql = "select * from pages";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição!")
            // Status code, retorna uma coisa se der erro padronizando (tipo erro 404 do google)
            return res.status(500).json(err);
        } else {
            console.log(`Dados dos usuários obtidos adequadamente!`);
            return res.status(200).json(data);
            // 500 expressa erro, já o 200, sucesso.
        }
    });
}

export const addPages = (req, res) => {
    const sql = "insert into pages (id_elements, id_usuario, id_emojimenu, isFavorited) values (?, ?, ?, ?)";

    const {id_elements, id_usuario, id_emojimenu, isFavorited} = req.body;

    db.query(sql, [id_elements, id_usuario, id_emojimenu, isFavorited], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição!")
            return res.status(500).json(err);
        } else {
            console.log(`Usuário cadastrado adequadamente!`);
            return res.status(200).json(data);
        }
    })
}

export const updatePages = (req, res) => {
    const sql = "update pages set isFavorited = ? where id = ?";

    const {id, isFavorited} = req.body;

    // Nome a partir daqui vai ser transferido ao "?"
    db.query(sql, [isFavorited, id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição!")
            // Status code, retorna uma coisa se der erro padronizando (tipo erro 404 do google)
            return res.status(500).json(err);
        } else {
            console.log(`Usuário atualizado adequadamente!`);
            return res.status(200).json(data);
            // 500 expressa erro, 200 sucesso.
        }
    });
}

export const deletePages = (req, res) => {
    const sql = "delete from pages where id = ?";

    const {id} = req.query;

    // Nome a partir daqui vai ser transferido ao "?"
    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição!")
            // Status code, retorna uma coisa se der erro padronizando (tipo erro 404 do google)
            return res.status(500).json(err);
        } else {
            console.log(`Usuário removido adequadamente!`);
            return res.status(200).json(data);
            // 500 expressa erro, 200 sucesso.
        }
    });
}