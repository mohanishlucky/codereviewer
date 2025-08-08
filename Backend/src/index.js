const express=require('express');
const app=express();//creates an express application/or server
const aiRoutes=require('./routes/ai.routes')
const cors=require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/ai",aiRoutes)


module.exports=app;