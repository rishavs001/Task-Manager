const mongoose = require("mongoose");
const dotenv = require("dotenv");
const conn = async () => {
    try {
        const response = await mongoose.connect(`${process.env.MONGO_URI_LOCAL}`);
        if (response) {
            console.log("database connected");
        }
    } catch (err) {
        console.log(err);
    }
};

conn();
