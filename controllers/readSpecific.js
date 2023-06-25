const {getClient ,getDb} = require("../db");
const {ObjectId} = require("mongodb");

const readSpecific  =async (req,res) =>{
    try {

            let db = getDb()
            let collection = db.collection('event');
        let eventDoc =  await collection.findOne({_id:new ObjectId(req.params.id)});
        return res.status(200).json({event:eventDoc,status:"success"});
    }   
    catch(err){
        return res.status(500).json({message:"server error" ,error:err});
    }
}
module.exports  =readSpecific;