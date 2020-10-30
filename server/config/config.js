module.exports = {
  development: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "auction",
    host: "localhost",
    dialect: "mysql",
    logging: false,
    port: 4000,
  },
  // production: {
  //   username: 'admin',
  //   password: process.env.RDS_PASSWORD,
  //   database: 'auction',
  //   host: '',
  //   dialect: 'mysql',
  //   logging: false,
  //   port: 3333,
  // }
};
