const db = require("./dbConnection");



async function insert(data) {
    try {
        const result = await db("tbl_user").insert(data);
        return result;
    } catch (error) {
        throw error;
    }
}

async function findByEmail(email) {
    try {
        const result = await db('tbl_user').select().where("email", email);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    insert,
    findByEmail
}