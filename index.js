require("dotenv").config();

const TuyaClient = require("./lib/tuya");
const tuya = new TuyaClient(
    process.env.TUYA_CLIENT_ID,
    process.env.TUYA_CLIENT_SECRET,
    "USAW"
);