module.exports = {
  client: 'mysql',
  connection: {
    host: '0.0.0.0',
    user: 'root',
    port: 3306,
    database: 'theflow'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};