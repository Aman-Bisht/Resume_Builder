const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDetails", {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
});
// .then(() => {
//   console.log(`Connection Successful`);
// })
// .catch((e) => {
//   console.log(`no connection`);
// });
mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});
