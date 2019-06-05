const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/dummydb.db3'
    },
    useNullAsDefault: true
}

const db = knex(knexConfig);

module.exports = {
    find, 
    insert,
    findById,
    update,
    remove
};

function find() {
    return db('users');
};

function findById(id){
    return db('users')
    .where({ id })
    .first();
};

function insert(user) {
    return db('users')
    .insert(user);
};

function update(id, changes) {
    return db('users')
    .where({ id })
    .update(changes)
};

function remove(id) {
    return db('users')
    .where({ id })
    .delete();
};