const mysql2 = require('mysql2');

 const connection = mysql2.createConnection ({
    host: "localhost",
    user: "root",
    password: "root",
    database: "hopihari_db",
    port: 3307

});

exports.execute = (query, params = [], pool = connection) => {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}
