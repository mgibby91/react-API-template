const { pool } = require('./db');

const userQuery1 = () => {

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

module.exports = {
  userQuery1
};