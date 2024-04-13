import express from 'express';
import { userRoutes } from './routes/user-routes.js';
import { ideRoutes } from './routes/ide-routes.js';
import cors from 'cors';
const app = express();
app.use(cors()); //cors will help in receiving request from frontend 
app.use(express.json()); //To retrieve or fetch data from the JSON when request is send
// below are the middlewares to integrate in our system 
app.use('/', userRoutes);
//app.use('/', ideRoutes); 
// Last Middleware (404)
app.use((request, response, next)=>{
    response.json({message:'Invalid URL'});
})
const server = app.listen(1235,(err)=>{ // enables the address as 1234
    if(err){
        console.log('Server Crash', err);
    }
    else{
        console.log('Server Up and Running', server.address().port); //will showcase the address
    }
})