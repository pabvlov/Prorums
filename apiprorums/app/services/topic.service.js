const db = require('./db');

async function getMultiple(){
  const category = await db.query(`SELECT * FROM tema ORDER BY fecha DESC`);
  return category;
}

async function getByUser(id){
  const category = await db.query(`SELECT * FROM tema WHERE id_usuario_fk = ${id} ORDER BY fecha DESC`);
  return category;
}

async function getByForum(id){
    const category = await db.query(`SELECT t.id, t.titulo, t.fecha, t.tipo, t.id_foro_fk, t.id_usuario_fk,
                                      f.nombre as nombre_foro, f.descripcion as descripcion_foro, 
                                      u.foto, u.nombre as escritor, u.apodo as apodo_escritor
                                      FROM tema t 
                                      INNER JOIN usuario u on t.id_usuario_fk = u.id 
                                      INNER JOIN foro f on t.id_foro_fk = f.id
                                      WHERE id_foro_fk = ${id}`);
    return category;
}

async function getById(id){
  const category = await db.query(`SELECT t.id, t.titulo, t.cuerpo, t.fecha, t.tipo, t.id_foro_fk, t.id_usuario_fk, 
                                    u.foto, u.nombre as escritor, u.apodo as apodo_escritor, u.ultima_visita,
                                    f.nombre as foro, f.foto as foto_foro, 
                                    c.nombre as categoria,
                                    p.pais
                                    FROM tema t 
                                    INNER JOIN usuario u on t.id_usuario_fk = u.id
                                    INNER JOIN foro f on t.id_foro_fk = f.id
                                    INNER JOIN categoria c on f.id_categoria_fk = c.id
                                    INNER JOIN pais p on u.id_pais_fk = p.id
                                    WHERE t.id = ${id}`);
  return category;
}

module.exports = {
  getMultiple,
  getByForum,
  getById,
  getByUser
}