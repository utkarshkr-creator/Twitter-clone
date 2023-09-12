const {TweetModels}=require('../models');
const CrudRepository = require('./crud-repository');
class TweetRepository extends CrudRepository{
     constructor(){
        super(TweetModels)
     }
};

module.exports=TweetRepository;