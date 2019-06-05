const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/', (req, res) => {
    Users.find()
    .then( users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.get('/:id', verifyId, (req, res) => {
    const id = req.params.id;

    Users.findById(id)
    .then( user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
    Users.insert(req.body)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.put('/:id', verifyId, (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Users.update(id, changes)
    .then(updatedUser => {
        res.status(201).json(updatedUser)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.delete('/:id', verifyId, (req, res) => {
    const id = req.params.id;

    Users.remove(id)
    .then(deletedUser => {
        const unit = deletedUser > 1 ? "records" : "record";
        res.status(200).json({ message: `${deletedUser} ${unit} deleted.` });
    })
    .catch(err => {
        res.status(500).json(err)
    })
});


// Custom Middleware

//checks if id exists in the database
function verifyId(req, res, next){
    const id = req.params.id;

    Users.findById(id)
    .then(item => {
        if(item){
            req.item = item;
            next();
        } else {
            res.status(404).json({ message: "User Not Found." })
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
};


module.exports = router;