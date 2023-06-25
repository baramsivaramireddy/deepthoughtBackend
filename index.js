const express = require("express");

const {connect} = require("./db");

const app = express();

// connect to db
connect()
// middleware
app.use(express.json())

// router 
const router  = require("./Routes")
app.use('/event' , router);

const PORT  = 8000;
app.listen(PORT,()=> (console.log('server started')));
