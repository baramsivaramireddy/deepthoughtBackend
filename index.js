const express = require("express");

const {connect} = require("./db");

const app = express();

// connect to db
connect()
// middleware
app.use(express.json())

// router 
const router  = require("./Routes")
app.use('/api/v3/app/eventa' , router);

const PORT  = 8000;
app.listen(PORT,()=> (console.log('server started')));
