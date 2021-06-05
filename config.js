const mongoose = require("mongoose");

const connection = mongoose.connect(
  `mongodb://localhost:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

module.export = connection;
//'mongodb://localhost/test'
