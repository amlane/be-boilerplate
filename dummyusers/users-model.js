const db = require('../data/dbConfig.js');

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