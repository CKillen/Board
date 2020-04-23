const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const config = require('./config/config.js');
const port = config.port;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cookieSession({ secret: config.secret }));
app.use(cors());

app.listen(port, () => {
    console.log(`server running on ${port}`);
});
