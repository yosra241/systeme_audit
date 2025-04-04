const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path:'config.env' });
const morgan = require('morgan');
const dbConnection =require("./config/database");
const categoryRoute = require("./routes/auditRoute");
//connect with db
dbConnection();
// express app
const app = express();
// Middelwares
app.use(express.json());
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'));
    console.log(`APP running on port:  ${process.env.NODE_ENV}`);
}

//1-Create Schema

//2-Create  model

//Mount Routes

app.use('/api/v1/categories', categoryRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`APP running on port  ${PORT}`);
});