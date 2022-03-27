const Pool = require('pq').Pool;
const pool = new Pool({
    user: 'Artisoft',
    host: 'localhost',
    database: 'userproj',
    password: process.env.POSTGRES_PASSWORD,
    port: 5432
})

module.exports = pool;