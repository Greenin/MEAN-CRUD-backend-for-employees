const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');


//Settings 
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(morgan('dev')); //For each request to the server, it will go through the function "morgan('dev')"
app.use(express.json()); //In order to the server "understand" the Json format data from explorer
app.use(cors({origin: 'http://localhost:4200'}));


//Routes
app.use('/api/employees', require('./routes/employee.routes'));


//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ',app.get('port'));
});