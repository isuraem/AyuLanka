const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
//connect database
connection.once("open", () => {
  console.log("Mongodb Connection Success !", PORT);
});

// const sellerRouter = require("./routes/sellerRoutes");
const userRouter = require("./routes/buyerRoutes");

// app.use("/api/seller",sellerRouter);
app.use("api/buyer", userRouter);

app.listen(PORT, () => {
  console.log(`server is up and running on port: ${PORT}`);
});
