const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/dev");
const Rental = require("./models/rental");
const FakeDb = require("./fakeDb");
const rentalRouter = require("./routes/rental");
mongoose
  .connect(config.Db_Url, { useNewUrlParser: true, dbName: "bmw-ng" })
  .then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
  })
  .catch(error => {
    console.log("unable to connect to database" + error);
  });

const app = express();
app.use("/api/v1/rentals", rentalRouter);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server is listening at prot " + port);
});
