const Pool = require('pg').Pool;
export const pool = new Pool({
    user: 'artisoft',
    host: 'localhost',
    database: 'userproj',
    password: process.env.POSTGRES_PASSWORD,
    port: 5432
})