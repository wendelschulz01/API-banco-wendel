module.exports = {
  dialect: 'postgree',
  host: 'localhost',
  username: 'admin',
  password: 'admin',
  database: 'tasklist',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
}