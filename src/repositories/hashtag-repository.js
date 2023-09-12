const CrudRepository = require("./crud-repository");
const {HashtagModel}=require('../models')
class HashtagRepository extends CrudRepository{
    constructor(){
        super(HashtagModel)
    }
    async bulkCreate(data){
        const tags=await HashtagModel.insertMany(data);
        return tags;
    }

    async findByName(tag){
        const response=await HashtagModel.find({
            text:tag
        });
        return response;
    }
    
}

module.exports=HashtagRepository