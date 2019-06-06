# Steps to build a server

## <p align="center">< -------- Already completed ----------></p>

### Create a directory for your server to live

- mkdir < server-directory-name >
- `git init`              
- `npx gitignore node`    //creates git.ignore for node
- `npm init -y`           //creates package.json

### Add your dependencies

- `npm i express`         
- `npm i nodemon -D`	
- `npm i helmet` 		
- `npm i knex`		
- `npm i sqlite3`	

- Update package.json scripts to include server (and start) script(s):

```
"scripts": {
	"server": "nodemon index.js",
	"start": "node index.js" (optional, for production)
}
```

- Create index.js file -- this file includes server and setup for dummyRoute
- Create folders: data, dummyRoute
- In dummyRoute, create files: dummy-router.js, dummy-model.js
- Inside these files include most common CRUD endpoints and helper functions



## <p align="center">< -------- Adding Migrations & Seeding (on knex-branch) ----------></p>

- `npx knex init`    //creates an abstracted knex file
- replace the development object with the knexConfig object
- change knexConfig to import the new knexfile.js
- make sure db is acessing the development object
- update an existing filename to a newfilename.db3

## Create a table within a migration folder:
- `npx knex migrate:make table_name`

Table schema is already created for a basic user with id and name

add migrations and seeds directories to knexfile.js

``` 
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
        filename: './data/dummy.db3'
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



- `npx knex migrate:latest`     (creates .db3 file)
- `npx knex migrate:rollback`   (deletes .db3 file)

- If refactoring from an existing server without migrations/seeding, update helper functions to inlude the correct table name

## Create data (seed):

- `npx knex seed:make 001-seedName`    (makes a new seed)
- `npx knex seed:run`		     (runs/resets seed)


File structure should be: 
data > migration, seeds, db3 file



## <p align="center">< -------- after forking and cloning this repo ----------></p>

- run command `npm install` to get your dependencies listed above.

There is already a dummyRoute included in this file for reference
