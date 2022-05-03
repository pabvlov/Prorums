const db = require('./db');

async function getMultiple(){
  const category = await db.query(`SELECT * FROM foro`);
  return category;
}

async function getById(id){
    const category = await db.query(`SELECT * FROM foro WHERE id = ${id}`);
    return category;
}

module.exports = {
  getMultiple,
  getById,
}