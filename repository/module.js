const db = require("./dbConnection");

async function insert(data) {
    try {
        const result = await db("tbl_modules").insert(data);
        return result;
    } catch (error) {
        throw error;
    }
}

async function selectByteacherId(teacherId) {
    try {
        const result = await db("tbl_modules").select().where("teacher_id", teacherId);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    insert,
    selectByteacherId
}