const express=require('express');
const app=express();
const {DatabaseConfig}=require('./config')
app.listen(DatabaseConfig.PortAddress,async ()=>{
    console.log(`Server started at port ${DatabaseConfig.PortAddress}`);
    DatabaseConfig.connectDb();
    
})