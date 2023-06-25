const {getClient ,getDb} = require("../db");


const create  =async (req,res) =>{
    try {

            
            let db = getDb()
            let collection= db.collection('event');
            req.body.images = req.files;
            let eventDoc = await collection.insertOne(req.body);

        return res.status(201).json({eventId: eventDoc.insertedId,status:"success"});
    }   
    catch(err){
        return res.status(500).json({message:"server error" ,error:err});
    }
}
module.exports  = create;