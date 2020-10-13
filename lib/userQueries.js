const { pool } = require('./db');

const getAllUsers = () => {

  return pool.query(`
    SELECT * FROM users;
  `)
    .then(res => {
      if (!res.rows.length) {
        return null;
      }
      return res.rows;
    })
    .catch(err => {
      console.error(err);
    });
}

const registerUser = (userData) => {

  const { email, password } = userData;

  return pool.query(`
    INSERT INTO users
      (email, password)
    VALUES
      ($1, $2)
    RETURNING *;
  `, [email, password])
    .then(res => {
      if (!res.rows.length) {
        return null;
      }
      return res.rows;
    })
    .catch(err => {
      console.error(err);
    });
}

const loginUser = (userData) => {

  const { email, password } = userData;

  return pool.query(`
    SELECT *
    FROM users
    WHERE email = $1 AND password = $2;
  `, [email, password])
    .then(res => {
      if (!res.rows.length) {
        return null;
      }
      return res.rows;
    })
    .catch(err => {
      console.error(err);
    });

}

module.exports = {
  getAllUsers,
  registerUser,
  loginUser
};