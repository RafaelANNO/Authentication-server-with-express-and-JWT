const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const serverkey = require("./config/keys");
const passport = require("passport");
const users = require("./routes/api/users");
var morgan = require('morgan');

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
// parse application/json
app.use(bodyParser.json());
app.use(morgan('dev'));
// DB Config
const db = serverkey.mongoURI;
// Connect to MongoDB
mongoose.set('useCreateIndex', true);
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB successfully connected !✅"))
    .catch(err => console.log(err + "❌"));

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !✅`));