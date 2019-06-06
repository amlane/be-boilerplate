const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
    find, 
    insert,
    findById,
    update,
    remove
};

function find() {
    return db('dummyTable');
};

function findById(id){
    return db('dummyTable')
    .where({ id })
    .first();
};

function insert(user) {
    return db('dummyTable')
    .insert(user);
};

function update(id, changes) {
    return db('dummyTable')
    .where({ id })
    .update(changes)
};

function remove(id) {
    return db('dummyTable')
    .where({ id })
    .delete();
};