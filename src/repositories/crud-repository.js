class CrudRepository{
     
    constructor(model){
        this.model=model;
    }
    async create(data){
        const res=await this.model.create(data);
        return res;
    }
    async findOne(data){
        const res=await this.model.findOne(data);
        return res;
    }
    async destroy(id){
        const res=await this.model.findByIdAndDelete(id);
        return res;
    }
    async get(id){
         const res=await this.model.findById(id);
         return res;
    }
    async getAll(){
         const res=await this.model.find({});
         return res;
    }
    async deleteOne(filter){
        const res=await this.model.deleteOne(filter);
        return res;
    }
    async deleteMany(filter){
        const res=await this.model.deleteMany(filter);
        return res;
    }
    async updateOne(filter,data){
         const res=await this.model.updateOne(filter,data);
         return res;
    }
};

module.exports=CrudRepository;