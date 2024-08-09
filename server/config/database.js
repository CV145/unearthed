import pg from 'pg';

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
}

//Use the connection pool object to query the database by acquiring a client from the pool - allows reusing connections instead of opening and closing them each time
export const pool = new pg.Pool(config)