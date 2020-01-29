const db = require('../database/dbConfig.js');

module.exports = {
    login,
    register,
    getUsers
}

function login(id) {
    return db('users').select('username', 'department').where('id', id);
}

function getUsers() {
    return db('users');
}

function register(user) {
    return db("users").insert(user);
}