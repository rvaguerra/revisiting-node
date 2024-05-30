import { DataSource } from 'typeorm';

export default new DataSource({
    type: 'mysql',
    host: 'mysqldb',
    username: 'user',
    password: 'password',
    database: 'nodedb',
    port: 3306,
    entities: [__dirname + '/../entities/**/*.entity.{t,j}s'],
    migrations: [__dirname + '/../migrations/**/*.{t,j}s'],
});
