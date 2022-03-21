const db = require('./db');
const helper = require('../../config/helper.js');
const config = require('../../config/db.config');

async function getMultiple(){
  //const offset = helper.getOffset(page, config.listPerPage);
  const users = await db.query(`SELECT * FROM user`);

  return users;
}

module.exports = {
  getMultiple
}