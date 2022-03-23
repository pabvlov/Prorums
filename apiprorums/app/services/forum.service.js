const db = require('./db');
/* const helper = require('../../config/helper.js');
const config = require('../../config/db.config'); */

async function getMultiple(){
  //const offset = helper.getOffset(page, config.listPerPage);
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