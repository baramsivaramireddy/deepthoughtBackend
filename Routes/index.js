
const Router =  require("express").Router();

// controllers 
const readSpecific = require("../controllers/readSpecific");
const createEvent = require("../controllers/createEvent");
const readall = require("../controllers/readall");
const updateEvent = require("../controllers/updateEvent");
const deleteEvent = require("../controllers/deleteEvent");

//middleware 
const upload = require("../middleware/imageupload");

Router.get('/:id' ,readSpecific );
Router.post("/" ,  upload.array('images') ,createEvent);
Router.get("/" , readall);
Router.put("/:id" ,upload.array('images'), updateEvent);
Router.delete("/:id" , deleteEvent);
module.exports = Router;