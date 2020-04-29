const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const myConnection = require('express-myconnection');
const mysql = require('mysql')
//importando rutas
const CustomerRoutes = require('./routes/customer');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(myConnection( mysql, {
    host: 'sql9.freemysqlhosting.net',
    user: 'sql9336418',
    password: 'k1PHrQ3C4B',
    port: '3306',
    database: 'sql9336418'
}));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', CustomerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//starting the servers
app.listen(3000, () => {
    console.log('Server on port 3000');
});
