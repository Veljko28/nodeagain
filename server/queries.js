const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'artisoft',
    host: 'localhost',
    database: 'userproj',
    password: process.env.POSTGRES_PASSWORD,
    port: 5432
})

module.exports = pool;