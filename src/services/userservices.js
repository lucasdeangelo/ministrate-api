import db from '../repository/connection.js'

async function createUser(name, email, password){
  const sql = "INSERT INTO usuarios(nome, email, senha) VALUES(?,?,?)"
  
  const values = [name, email, password];
  const conn = await db.connect();
  await conn.query(sql, values)
  conn.end();
}

async function updateUser(name, email, password, idUser){
  const sql = "UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id_usuario = ?"
  const values = [name, email, password, idUser]

  const conn = await db.connect()
  await conn.query(sql, values)
  conn.end();
}

async function deleteUser(idUser){
  const sql = "DELETE FROM usuarios WHERE id_usuario = ?"
  const conn = await db.connect()
  await conn.query(sql, idUser)
  conn.end();
}

export default {createUser, updateUser, deleteUser};