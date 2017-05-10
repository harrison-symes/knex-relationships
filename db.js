
module.exports = {
  getUser: getUser,
  getUsers: getUsers
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
    .join('profiles', 'users.id', 'profiles.user_id')
    .where('users.id', id)
}
