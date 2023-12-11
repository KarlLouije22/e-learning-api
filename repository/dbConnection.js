const knex = require("knex");

const db = knex({
    client: "mysql",
    connection: {
        host: "localhost",
        port: 3306,
        database: "e_learning",
        user: "root"
    }
});

module.exports = db;