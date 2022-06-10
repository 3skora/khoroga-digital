const express = require('express');
const app = express();
const port = 8080;
const cors = require("cors")
// const dotenv = require('dotenv').config()

// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config();
//   }



const mongoose = require('mongoose');
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const urlDB = "mongodb://3skora:3skora77MongoDB@cluster0-shard-00-00.m3ois.mongodb.net:27017,cluster0-shard-00-01.m3ois.mongodb.net:27017,cluster0-shard-00-02.m3ois.mongodb.net:27017/koroga?ssl=true&replicaSet=atlas-ndrkjz-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(urlDB, connectionParams)
    .then(() => console.log("DB CONNECTED!!!"))
    .catch((err) => console.log("DB FAILED !!!!", err))


//express middleware
//new comment
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//Import Routes
// const userRoute = require("./routes/users")
// app.use("/users", userRoute)


app.listen(port, () => console.log(`Server is running on port ${port}`));

// git add .
// git commit -m "first commit"
// git remote add origin https://github.com/3skora/khoroga-digital.git
// git push origin master