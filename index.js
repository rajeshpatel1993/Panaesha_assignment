const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();
 
// uncomment after placing your favicon in /public


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/notes/', routes);


// catch 404 and forward to error handler
app.use((req, res, next) =>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
 

 


app.listen(3000, () => console.log(' app listening on port 3000!'));
