const mongoose = require("mongoose");
const initData = require("../init/data.js");
const Listing = require("../models/listings.js");

main()
  .then((res) => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/sellora");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6958deafa8f2cc0b0afaf3fb",
  }));
  await Listing.insertMany(initData.data);
  console.log("database was initialized");
};

initDB();
