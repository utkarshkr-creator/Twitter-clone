const CrudRepository = require("./crud-repository");
const {UserModel}=require('../models');


class UserRepository extends CrudRepository{
      constructor(){
         super(UserModel)
      }

      async findByEmail(Email){
            const res=await UserModel.findOne(Email);
            return res;
      }
}

module.exports=UserRepository;