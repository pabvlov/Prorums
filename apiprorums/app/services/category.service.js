const db = require('./db');
/* const helper = require('../../config/helper.js');
const config = require('../../config/db.config'); */

async function getMultiple(){
  //const offset = helper.getOffset(page, config.listPerPage);
  const category = await db.query(`SELECT * FROM category`);

  return category;
}

async function getCategoryForums(id){
  //const offset = helper.getOffset(page, config.listPerPage);
  const category = await db.query(`SELECT * FROM forums WHERE id_category = ${id}`);

  return category;
}

module.exports = {
  getMultiple,
  getCategoryForums
}