const express = require('express');
const env = require('./config/environment');
const logger = require('morgan');
const app = express();
require('./config/view-helpers')(app);
//
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session'); // used for session cookie
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');
const passportGoogle = require('./config/passport-google-oauth2-strategy');
//const MongoStore = require('connect-mongo')(session);
const sassMiddleware = require('node-sass-middleware');
const flash = require('connect-flash');
const customMware = require('./config/middleware');
const path = require('path');

// setup the chat server to be used with socket.io
const chatServer = require('http').Server(app);
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer);
chatServer.listen(5000);
console.log('Chat server is listening on port: 5000');

// SASS middleware
app.use(express.static("assets"));// connecting css to server

// helps in reading through the POST request
app.use(express.urlencoded());

app.use(cookieParser());

//app.use(logger(env.morgan.mode, env.morgan.options));

// set up static file access (for CSS)
//app.use(express.static(env.asset_path));

// make the uploads path available to the browser
app.use('/uploads', express.static(__dirname + '/uploads'));

// extract styles and scripts from sub-pages into the layout
//app.set('layout extractScripts', true);

// use express layout
//app.use(expressLayouts);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Mongo Store is used to store the session cookie in the database
app.use(
  session({
    name: 'login',
    // TODO change the secret before deployment in production mode
    secret: env.session_cookie_key,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100
    },
    
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);

// use express router
app.use('/', require('./routes'));


 
const port =8600;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })