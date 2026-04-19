require('dotenv').config();
const connectDB = require('./config/db')
const express = require('express');
const app = express();
const cors = require('cors');

connectDB();
app.get('',(req,res)=>{
    res.send("Hello i am chirag");
})
const PORT=process.env.PORT || 3000
app.listen(3000,()=>{
    console.log("app is running on port 3000");
    
});