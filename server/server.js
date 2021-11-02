const express = require('express');
const {routes} = require('./Routes/usercontroller');
const app = express();
const connectDB = require('./config/db');
const Port = process.env.Port || 3005;
const bodyParser = require('body-parser');
    
connectDB();
routes(app);

app.listen(Port,()=>{
    console.log(`Server running on port ${Port}`);
})

module.exports = {app};
