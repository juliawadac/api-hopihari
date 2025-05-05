const mysql = require('../mysql');

exports.atualizarUsuario = async (req,res) => {
    try {
    const idUsuario = Number (req.params.id);
    const resultado = await mysql.execute(
        ` update users 
            set name = ?,
                email = ?,
                password = ?
        where id = 1;`,
        [req.body.name, 
         req.body.email, 
         req.body.password, 
         idUsuario]
);
    return res.status (201).send ({
        "mensagem": "Usuario atualizado com sucesso!",
        "resultado": resultado
    });
    

    }catch (error) {
        return res.status(500).send({
            "mensagem": error
        });
         
    } 

}

exports.cadastrarUsuario = async (req, res) => {
    try {
        const resultado = await mysql.execute(
            `insert into users (first_name, last_name, email, password, birth_date, phone)
            values (?, ?, ?, ?, ?, ?)`,
            [req.body.first_name, req.body.last_name, req.body.email, req.body.password, req.body.birth_date, req.body.phone]
        );

        return res.status(201).send({
            "mensagem": "Usuario criado com sucesso!",
            "resultado": resultado
        });


    } catch (error) {
        return res.status(500).send({
            "mensagem": error
        });
    }
}