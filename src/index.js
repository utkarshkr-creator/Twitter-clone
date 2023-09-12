const express=require('express');
const app=express();
const {DatabaseConfig}=require('./config')
const apiRoutes=require('./routes')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api', apiRoutes);


app.listen(DatabaseConfig.PortAddress,async ()=>{
    console.log(`Server started at port ${DatabaseConfig.PortAddress}`);
    DatabaseConfig.connectDb();
    
})