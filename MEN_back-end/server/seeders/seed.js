const db = require("../config/connection");
const {} = require("../models");

db.once("open", async () => {
  try {
    console.log("done seeding");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
