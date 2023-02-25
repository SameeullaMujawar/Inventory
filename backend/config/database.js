import QueryBuilder from 'node-querybuilder';
const settings = {
    host: 'localhost',
    database: 'inventory',
    user: 'root',
    password: ''
};
const pool1 = new QueryBuilder(settings, 'mysql', 'pool');

const db1 = await pool1.get_connection();
export default db1;

