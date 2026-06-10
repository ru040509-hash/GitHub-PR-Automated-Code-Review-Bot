function getUser(id) {
  const query = "SELECT * FROM users WHERE id = " + id;
  return db.query(query);
}

function divide(a, b) {
  return a / b;
}

module.exports = { getUser, divide };
