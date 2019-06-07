# <p align="center">How to Build a Node.js Server Using an SQLite Database</p>

## Creating A Git Repo & Adding Dependencies

### Create a directory for your server to live

- `mkdir < server-directory-name >`
- `git init`              
- `npx gitignore node`    //creates git.ignore for node
- `npm init -y`           //creates package.json

### Add your dependencies

- `npm i express helmet knex sqlite3`         
- `npm i nodemon -D`	


- Update package.json scripts to include server (and start) script(s):

```
"scripts": {
	"server": "nodemon index.js",
	"start": "node index.js" (optional, for production)
}
```


## Adding Migrations & Seeding

- `npx knex init`    //creates an abstracted knexfile.js

- Update knexfile.js to:

```
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
        filename: './data/database.db3' //database can be whatever you name it
    },
    useNullAsDefault: true,
    migrations: {
      directory:   './data/migrations',
    }, 
    seeds: {
      directory: './data/seeds',
    },
  },
};
```

## Create a table within a migration folder:

- `npx knex migrate:make table_name`

- Update table_name file within migrations folder to:

```
exports.up = function(knex, Promise) {
    return knex.schema.createTable('table_name', function(tbl){
        // insert table schema constraints
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('table_name');
};

```

- `npx knex migrate:latest`     (creates .db3 file)
- `npx knex migrate:rollback`   (deletes .db3 file)

## Create data (seed):

- `npx knex seed:make 001-seedName`    (makes a new seed)

- Example 001-exampleSeed.js file:

```
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { name: 'Amanda' },
        { name: 'Herman' },
        { name: 'Boo' }
      ]);
    });
};
```

- `npx knex seed:run`		               (runs/resets seed)



## Creating Server, Routes and Helper Functions

- Create index.js file that includes your server and a Route to '/api'
- Create a directory named 'route'
- Within the 'route' directory create 2 files named: `model.js` and `router.js`
- Please review the `model.js` and `router.js` files that include the basic helper and CRUD functions.



## <p align="center">< -------- after forking and cloning this repo ----------></p>

- run command `npm install` to get your dependencies listed above.
- If you fork and clone this repo you do not need to follow README steps, they are already completed. 


