const app = require("./app");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ayuboceylonlk:fetQl1r0ww7hiUhJ@cluster0.ue9qbte.mongodb.net/my_e_site"
    );
  } catch (error) {
    console.log("Mongoose connect failed", error);
  }
};
connect();
const server = app.listen(5555, "127.0.0.1", () => {
  console.log(`server started on ${server.address().port}`);
});
