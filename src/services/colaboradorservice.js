const db = require('../db');

exports.getAllPaginated = async (page = 1, limit = 5) => {
  const offset = (page - 1) * limit;

  const [data] = await db.query(
    'SELECT * FROM COLABORADOR LIMIT ? OFFSET ?',
    [parseInt(limit), parseInt(offset)]
  );
  const [[{ total }]] = await db.query(
    'SELECT COUNT(*) AS total FROM COLABORADOR'
  );
  
  return {
    data,
    total,
    page: parseInt(page),
    limit: parseInt(limit)
  };
};


exports.create = async (data) => {
  const { nombre, apellido, direccion, edad, profesion, estadocivil } = data;

  if (!nombre || !apellido || !edad || edad <= 0) {
    throw new Error('Datos inválidos');
  }
  await db.query(
    `INSERT INTO COLABORADOR 
     (NOMBRE, APELLIDO, DIRECCION, EDAD, PROFESION, ESTADOCIVIL)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [nombre, apellido, direccion, edad, profesion, estadocivil]
  );
};

exports.update = async (id, data) => {
  const { nombre, apellido, direccion, edad, profesion, estadocivil } = data;

  if (!nombre || !apellido || !edad || edad <= 0) {
    throw new Error('Datos inválidos');
  }
  const [result] = await db.query(
    `UPDATE COLABORADOR
     SET NOMBRE=?, APELLIDO=?, DIRECCION=?, EDAD=?, PROFESION=?, ESTADOCIVIL=?
     WHERE IDCOLABORADOR=?`,
    [nombre, apellido, direccion, edad, profesion, estadocivil, id]
  );

  return result;
};

exports.remove = async (id) => {
  const [result] = await db.query(
    'DELETE FROM COLABORADOR WHERE IDCOLABORADOR=?',
    [id]
  );

  return result;
};
