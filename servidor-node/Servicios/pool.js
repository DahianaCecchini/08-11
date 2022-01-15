const { Pool }= require('pg')

const config = {
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD
}

const pool = new Pool(config);

module.exports= {
    query: (queryString, params) => pool.query(queryString,params)
}