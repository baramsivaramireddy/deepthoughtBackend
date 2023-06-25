const {getClient ,getDb} = require("../db");
const {ObjectId} = require("mongodb");

const deleteEvent  =async (req,res) =>{
    try {

            let db = getDb()
            let collection = db.collection('customers');
        let customerDoc =  await collection.deleteOne({_id:new ObjectId(req.params.id)});
        return res.status(200).json({customer:customerDoc,status:"success"});
    }   
    catch(err){
        return res.status(500).json({message:"server error" ,error:err});
    }
}
module.exports  =deleteEvent;