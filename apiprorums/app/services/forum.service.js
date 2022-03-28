const db = require('./db');

async function getMultiple(){
  const category = await db.query(`SELECT * FROM forum`);

  return category;
}

async function getById(id){
    const category = await db.query(`SELECT * FROM forum WHERE id = ${id}`);
    return category;
}

module.exports = {
  getMultiple,
  getById,
}