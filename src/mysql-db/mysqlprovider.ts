import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'db',
    user: 'user',
    password: 'password',
    database: 'nodedb',
    port: 3306,
});

export default pool.promise();
