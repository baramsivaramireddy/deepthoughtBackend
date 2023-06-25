const {getClient ,getDb} = require("../db");
const {ObjectId} = require("mongodb");

const updateEvent  =async (req,res) =>{
    try {

            let db = getDb()
            let collection = db.collection('event');
        

        const filter = { _id: new ObjectId(req.params.id) };
        const update = { $set: req.body };
    
        const options = {
          returnOriginal: false // Set to false to return the modified document
        };

        const updatedEvent = await collection.findOneAndUpdate(filter, update, options);
        return res.status(200).json({event: updatedEvent,status:"success"});
    }   
    catch(err){
        return res.status(500).json({message:"server error" ,error:err});
    }
}
module.exports  = updateEvent;