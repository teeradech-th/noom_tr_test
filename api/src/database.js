const mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect()
  }

  _connect() {
    mongoose.connect(`mongodb://${process.env.MONGO_SERVER}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`,
      {
        auth: { authdb: "admin" },
        user: process.env.MONGO_APP_USERNAME,
        pass: process.env.MONGO_APP_PASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      })
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error')
        console.log(err);
      })
  }
}

module.exports = new Database();
