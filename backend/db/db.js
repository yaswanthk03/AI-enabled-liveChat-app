import mongoose from "mongoose";

function connect() {
  console.log(process.env.MONGODB_URI);
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default connect;
