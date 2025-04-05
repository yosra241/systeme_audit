const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path:'config.env' });
const morgan = require('morgan');
const dbConnection =require("./config/database");
// Import des routes
const auditRoute = require("./routes/auditRoute");
const taskRoutes = require('./routes/taskRoute');
const rapportRoutes = require('./routes/rapportRoute');
const utilisateurRoutes = require('./routes/utilisateurRoute');

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

//app.use('/api/v1/categories', auditRoute); (fl vd )
app.use('/api/audits', auditRoute);
app.use('/api/tasks', taskRoutes);
app.use('/api/rapports', rapportRoutes);
app.use('/api/utilisateurs', utilisateurRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`APP running on port  ${PORT}`);
});