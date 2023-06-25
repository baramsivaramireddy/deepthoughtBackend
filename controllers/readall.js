const {getClient ,getDb} = require("../db");


const readall  =async (req,res) =>{
    try {

       
        let query =  (req.query.type)?{type:req.query.type}:{}; 
        
            
            let db = getDb()
            let collection= db.collection('event');

           const  itemsPerPage = req.query.limit?   parseInt(req.query.limit,10) :5;
           const pageNumber = req.query.page ? parseInt(req.query.page):1;
            // total documents 
               let totalDocuments =   await collection.countDocuments({});
               let NumberOfPages = Math.ceil(totalDocuments/itemsPerPage);

               
            let customerDocs = await collection
                                            .find(query)
                                            .skip((pageNumber - 1) * itemsPerPage)
                                            .limit(itemsPerPage)
                                            .toArray();

        return res.status(201).json({customers:customerDocs, NumberOfPages:NumberOfPages,status:"success"});
    }   
    catch(err){
        return res.status(500).json({message:"server error" ,error:err});
    }
}
module.exports  = readall;