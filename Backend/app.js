const express = require("express");
const app = express();
const cors = require("cors");
const UserAPI = require("./routes/userRoute");
const TaskAPI = require("./routes/taskRoute");
const mongoose = require("mongoose");
require("dotenv").config();
require("./conn");
const port = 3000;
app.use(express.json());
app.use(cors())

app.use("/api/v1", UserAPI);
app.use("/api/v2", TaskAPI);

// app.use("/", (req, res, next) => {
//     res.send("hello");
// });

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
