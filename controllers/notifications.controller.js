const mysql = require('../mysql');

exports.getNotificacoes = async (req, res) => {
    try {
        const resultado = await mysql.execute(`SELECT * FROM notifications WHERE id_user = ?` , [res.locals.idUsuario])
        
        if (resultado.length == 0) {
            return res.status(404).send({ "Mensagem": "Notificações não encontradas" });
    }
    return res.status(200).send({ "Notificações": resultado });
    

    }catch (error) {
        return res.status(500).send(error)
}
        
    
}